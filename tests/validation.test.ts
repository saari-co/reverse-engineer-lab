import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {submissionSchema,publicLink} from '../src/lib/validation';
import {researchPresentation} from '../src/lib/research-presentation';

const good={title:'An investigation',target:'Example',target_version:'v1',kind:'Web application',question:'How does this work?',summary:'A finding.',observed:'Observed from source.',unknown:'No runtime evidence.',author:'Researcher',investigated_at:'2026-10-29',links:'https://github.com/morluto/rea',consent:true};

test('accepts bounded text and HTTPS evidence',()=>assert.equal(submissionSchema.safeParse(good).success,true));
test('rejects uploads, status injection, honeypot, invalid dates and excess data',()=>{for(const extra of [{file:'bytes'},{status:'published'},{website:'spam'},{investigated_at:'2026-02-30'},{summary:'x'.repeat(5001)},{consent:false}])assert.equal(submissionSchema.safeParse({...good,...extra}).success,false)});
test('rejects dangerous, local and credential-bearing link forms',()=>{for(const url of ['javascript:alert(1)','data:text/html,a','http://example.com','https://localhost/a','https://127.0.0.1','https://[::1]','https://user:pass@github.com','https://github.com:9000','https://host.internal','https://foo.local'])assert.equal(publicLink(url),false,url)});
test('deduplicated shape ignores no unknown input',()=>assert.equal(submissionSchema.safeParse({...good,links:Array(9).fill('https://github.com/morluto/rea').join('\n')}).success,false));

test('every seed distillation validates and aligns 1:1 with researchPresentation',()=>{
  const seedRaw=fs.readFileSync(new URL('../seed/seed.json',import.meta.url),'utf8');
  const seed=JSON.parse(seedRaw);
  const items=seed.content.distillations as Array<{slug:string;status:string;data:Record<string,unknown>}>;
  assert.equal(items.length,19);
  const slugs=new Set(items.map(i=>i.slug));
  assert.deepEqual([...slugs].sort(),Object.keys(researchPresentation).sort());
  for(const item of items){
    assert.equal(item.status,'published',item.slug);
    const parsed=submissionSchema.safeParse({...item.data,consent:true});
    assert.equal(parsed.success,true,`${item.slug}: ${JSON.stringify(parsed.error?.issues)}`);
    for(const [field,val] of Object.entries(item.data)){
      if(typeof val==='string'&&field!=='links'){
        assert.equal(val.includes('`'),false,`${item.slug}.${field} contains raw Markdown backticks`);
        assert.equal(val.includes('**'),false,`${item.slug}.${field} contains raw Markdown bold markers`);
      }
    }
    const pres=researchPresentation[item.slug];
    assert.equal(pres.steps.length,3,item.slug);
    assert(pres.related.length>=2,item.slug);
    for(const rel of pres.related){
      assert.notEqual(rel,item.slug,item.slug);
      assert(slugs.has(rel),`${item.slug} -> missing ${rel}`);
    }
  }
  for(const forbidden of [/\/Users\//,/\/home\/[a-z0-9_-]+\//i,/\bev_[0-9a-f]{16,}/i,/\bjrr_[0-9a-f]{16,}/i,/\brol_[0-9a-f]{16,}/i,/\b(sk-[A-Za-z0-9]{16,}|ghp_[A-Za-z0-9]{16,}|GOCSPX-[A-Za-z0-9_-]+)/]){
    assert.equal(forbidden.test(seedRaw),false,`Forbidden pattern ${forbidden} in seed.json`);
  }
});
