import { getEmDashCollection } from 'emdash';
import { publicLink } from './validation';
export async function publishedEntries(){
  const entries:any[]=[];let cursor:string|undefined;
  do {const result=await getEmDashCollection('distillations',{status:'published',limit:100,cursor,orderBy:{published_at:'desc'}});if(result.error)throw new Error('Catalog unavailable');entries.push(...result.entries);cursor=result.nextCursor;}while(cursor);
  return entries.filter(e=>e.data.status==='published');
}
export function evidenceLinks(value:unknown){return typeof value==='string'?value.split(/\r?\n/).map(s=>s.trim()).filter(publicLink):[];}
export function canonicalOrigin(){const url=process.env.CATALOG_ORIGIN; if(!url)return null;const u=new URL(url);if(u.protocol!=='https:'||u.username||u.password||u.pathname!=='/'||u.search||u.hash)throw Error('CATALOG_ORIGIN must be an HTTPS origin');return u.origin;}
export function jsonLd(value:unknown){return JSON.stringify(value).replace(/</g,'\\u003c');}
