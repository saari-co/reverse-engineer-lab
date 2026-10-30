import {test} from 'node:test';
import assert from 'node:assert/strict';
import {submissionSchema,publicLink} from '../src/lib/validation';
const good={title:'An investigation',target:'Example',target_version:'v1',kind:'Web application',question:'How does this work?',summary:'A finding.',observed:'Observed from source.',unknown:'No runtime evidence.',author:'Researcher',investigated_at:'2026-10-29',links:'https://github.com/morluto/rea',consent:true};
test('accepts bounded text and HTTPS evidence',()=>assert.equal(submissionSchema.safeParse(good).success,true));
test('rejects uploads, status injection, honeypot, invalid dates and excess data',()=>{for(const extra of [{file:'bytes'},{status:'published'},{website:'spam'},{investigated_at:'2026-02-30'},{summary:'x'.repeat(5001)},{consent:false}])assert.equal(submissionSchema.safeParse({...good,...extra}).success,false)});
test('rejects dangerous, local and credential-bearing link forms',()=>{for(const url of ['javascript:alert(1)','data:text/html,a','http://example.com','https://localhost/a','https://127.0.0.1','https://[::1]','https://user:pass@github.com','https://github.com:9000','https://host.internal','https://foo.local'])assert.equal(publicLink(url),false,url)});
test('deduplicated shape ignores no unknown input',()=>assert.equal(submissionSchema.safeParse({...good,links:Array(9).fill('https://github.com/morluto/rea').join('\n')}).success,false));
