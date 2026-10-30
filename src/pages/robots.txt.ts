import { canonicalOrigin } from '../lib/catalog';
export function GET(){const origin=canonicalOrigin();return new Response(origin?`User-agent: *\nAllow: /\nDisallow: /_emdash/\nSitemap: ${origin}/sitemap.xml\n`:'User-agent: *\nDisallow: /\n',{headers:{'Content-Type':'text/plain'}});}
