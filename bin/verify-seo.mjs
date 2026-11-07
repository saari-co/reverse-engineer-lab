import assert from 'node:assert/strict';
const origin='https://reverseengineerlab.com';
const report={redirects:[],pages:[],image:false,adminProtected:false};
for(const base of ['http://reverseengineerlab.com','http://www.reverseengineerlab.com','https://www.reverseengineerlab.com']){
 const r=await fetch(base+'/about?proof=canonical',{redirect:'manual'});
 assert([301,308].includes(r.status),`${base}: ${r.status}`);
 assert.equal(r.headers.get('location'),origin+'/about?proof=canonical');
 report.redirects.push({from:base,status:r.status});
}
const robots=await(await fetch(origin+'/robots.txt')).text();
assert(robots.includes('Sitemap: '+origin+'/sitemap.xml'));
assert(!robots.includes('Disallow: /?')&&!robots.includes('Disallow: /submit'));
const sitemap=await(await fetch(origin+'/sitemap.xml')).text();
const urls=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(x=>x[1]);
assert.equal(urls.filter(u=>u.includes('/entries/')).length,19);
for(const url of urls){
 assert(url.startsWith(origin+'/'));
 const r=await fetch(url);assert.equal(r.status,200,url);const html=await r.text();
 assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,url);
 assert(html.includes('content="index, follow"'),url);
 assert(html.includes('rel="canonical" href="'+url+'"'),url);
 assert(html.includes('property="og:image"')&&html.includes('name="twitter:card"'),url);
 const description=html.match(/name="description" content="([^"]*)"/)?.[1];assert(description&&description.length<=180,url);
 const structured=[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(x=>JSON.parse(x[1]));
 if(url.includes('/entries/')){
  const article=structured.find(x=>x['@type']==='Article');assert(article,url);
  assert.equal(article.author['@type'],'Organization');assert.equal(article.mainEntityOfPage,url);
  assert(article.datePublished&&article.dateModified&&article.image.width===1200);
  assert(html.includes('Related investigations')&&html.includes('Contract model'));
 }
 report.pages.push({url,status:r.status,description});
}
for(const path of ['/submit','/?q=Katana']){
 const r=await fetch(origin+path);const html=await r.text();assert(html.includes('noindex, follow'));
 assert.equal(r.headers.get('x-robots-tag'),'noindex, follow');
}
const image=await fetch(origin+'/social-card.png');assert.equal(image.status,200);assert(image.headers.get('content-type')?.includes('image/png'));await image.body?.cancel();report.image=true;
const missing=await fetch(origin+'/not-a-real-rel-page');assert.equal(missing.status,404);await missing.body?.cancel();
const admin=await fetch(origin+'/_emdash/admin',{redirect:'manual'});assert.equal(admin.status,302);assert(new URL(admin.headers.get('location')).hostname.endsWith('.cloudflareaccess.com'));await admin.body?.cancel();report.adminProtected=true;
console.log(JSON.stringify(report,null,2));
