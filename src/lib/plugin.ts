import { definePlugin } from 'emdash';
import { createHash } from 'node:crypto';
import { submissionSchema, fieldLabels } from './validation';
import { z } from 'zod';
const decision = z.object({type:z.literal('form_submit'),action_id:z.string().regex(/^decide:[a-f0-9-]{36}$/),values:z.object({decision:z.enum(['approve','deny']),reason:z.string().trim().max(1000).default('')})});
const plain = (text:string) => ({type:'section',text});
export function createPlugin(){return definePlugin({
  id:'rea-catalog',version:'0.1.0',capabilities:['content:read','content:write','content:publish'],
  storage:{submissions:{indexes:['status','createdAt']},limits:{indexes:[]}},
  admin:{pages:[{path:'/review',label:'Review submissions',icon:'clipboard-check'}]},
  routes:{
    submit:{public:true,methods:['POST'],request:{body:'json',maxBytes:48000},handler:async ctx=>{
      const p=submissionSchema.safeParse(ctx.input);
      if(!p.success)return {ok:false,error:'Check the highlighted fields.',fields:p.error.flatten().fieldErrors};
      const origin=ctx.request.headers.get('origin');
      if(!origin || origin!==new URL(ctx.request.url).origin)return {ok:false,error:'Submit from this site.'};
      // A persistent, atomic site-wide ceiling also protects hosts without trusted IP metadata.
      const hour=Math.floor(Date.now()/3600000), limit=ctx.storage.limits;
      const key=`hour:${hour}`;
      for(let i=0;i<4;i++){
        const current=await limit.getVersioned(key);const count=(current?.value as any)?.count||0;
        if(count>=30)return {ok:false,error:'The submission queue is busy. Please try again later.'};
        if((await limit.compareAndSet(key,current?.revision??null,{count:count+1})).applied)break;
        if(i===3)return {ok:false,error:'Please try again in a moment.'};
      }
      const digest=createHash('sha256').update(JSON.stringify(p.data)).digest('hex');
      const dupe=await limit.compareAndSet(`duplicate:${digest}`,null,{at:Date.now()});
      if(!dupe.applied)return {ok:false,error:'This submission has already been received.'};
      const id=crypto.randomUUID();const {website,consent,...data}=p.data;
      try {
        const content=await ctx.content!.create!('distillations',{...data,links: data.links.join('\n')});
        await ctx.storage.submissions.put(id,{status:'pending',createdAt:new Date().toISOString(),contentId:content.id,data});
        return {ok:true,reference:id};
      }catch(error){console.warn('Catalog save failed', (error as any)?.code || (error as any)?.name || 'unknown');await limit.delete(`duplicate:${digest}`);return {ok:false,error:'The submission could not be saved. Please try again.'};}
    }},
    admin:{permission:'content:publish_any',methods:['POST'],handler:async ctx=>{
      let toast:any;
      const p=decision.safeParse(ctx.input);
      if(p.success){
        const id=p.data.action_id.slice(7), store=ctx.storage.submissions;
        const existing=await store.getVersioned(id);const row=existing?.value as any;
        if(!row || !['pending','approving'].includes(row.status)) toast={type:'error',message:'This submission is already closed.'};
        else if(p.data.values.decision==='deny' && !p.data.values.reason)toast={type:'error',message:'Add a reason before denying.'};
        else if(row.status==='approving'&&p.data.values.decision==='deny')toast={type:'error',message:'Approval has started. Retry approval to finish.'};
        else if(p.data.values.decision==='deny'){
          const r=await store.compareAndSet(id,existing!.revision,{...row,status:'denied',reason:p.data.values.reason,reviewedAt:new Date().toISOString()});
          toast={type:r.applied?'success':'error',message:r.applied?'Denied. The reason is saved.':'The submission changed. Refresh and retry.'};
        }else{
          const claim=row.status==='approving'||(await store.compareAndSet(id,existing!.revision,{...row,status:'approving'})).applied;
          if(!claim)toast={type:'error',message:'The submission changed. Refresh and retry.'};
          else try{
            const content=await ctx.content!.getVersioned!('distillations',row.contentId);
            if(!content)throw Error('Missing content');
            if(content.item.status!=='published')await ctx.content!.publish!('distillations',row.contentId,{_rev:content._rev});
            await store.put(id,{...row,status:'approved',reviewedAt:new Date().toISOString()});
            toast={type:'success',message:'Approved and published to the catalog.'};
          }catch{toast={type:'error',message:'Approval did not finish. Retry approval; it is safe to retry.'};}
        }
      }
      const input=ctx.input as any;
      const status=input?.type==='block_action'&&['pending','approved','denied'].includes(input.value)?input.value:'pending';
      const results=await ctx.storage.submissions.query({where:{status:status==='pending'?{in:['pending','approving']}:status},orderBy:{createdAt:'desc'},limit:100});
      const blocks:any[]=[{type:'header',text:'Review submissions'},plain('Read the evidence and coverage before approving. Approval publishes; denial records a private reason. Text and links only.'),{type:'actions',elements:['pending','approved','denied'].map(value=>({type:'button',action_id:'filter',label:value[0].toUpperCase()+value.slice(1),value}))}];
      if(!results.items.length)blocks.push({type:'empty',title:`No ${status} submissions`});
      for(const {id,data:raw} of results.items){const row=raw as any; const d=row.data;
        blocks.push({type:'divider'},{type:'header',text:d.title},plain(`${d.target} · ${d.target_version} · ${d.kind}\n${d.author} · ${d.investigated_at}\nStatus: ${row.status}`));
        for(const [key,label] of Object.entries(fieldLabels))if(d[key])blocks.push(plain(`${label}\n${d[key]}`));
        blocks.push(plain(`Evidence links (review manually)\n${d.links.join('\n')}`));
        if(row.reason)blocks.push(plain(`Denial reason\n${row.reason}`));
        if(['pending','approving'].includes(row.status))blocks.push({type:'form',block_id:`review-${id}`,fields:[{type:'select',action_id:'decision',label:'Decision',options:[{label:'Approve and publish',value:'approve'},{label:'Deny',value:'deny'}]},{type:'text_input',action_id:'reason',label:'Reason (required for denial)',multiline:true}],submit:{action_id:`decide:${id}`,label:'Save decision'}});
      }
      if(results.hasMore)blocks.push(plain('Showing the newest 100 submissions. Close these submissions to reveal the rest of the queue.'));
      return {blocks,...(toast?{toast}:{})};
    }},
  },
});}
