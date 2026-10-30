import { z } from 'zod';
import { isIP } from 'node:net';
export function publicLink(value: string): boolean {
  try {
    const u = new URL(value);
    const host = u.hostname.toLowerCase();
    return u.protocol === 'https:' && !u.username && !u.password && !u.port &&
      host.includes('.') && !isIP(host) && !host.includes(':') &&
      !/(^|\.)(localhost|local|internal|test|example|invalid)$/.test(host) &&
      !['metadata.google.internal'].includes(host);
  } catch { return false; }
}
const text = (max:number, min=1) => z.string().trim().min(min).max(max).refine(s=>!/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(s),'Remove control characters.');
export const submissionSchema = z.object({
  title:text(140),target:text(100),target_version:text(120),kind:z.enum(['Web application','Native application','Library / protocol','Other']),
  question:text(1500),summary:text(5000),observed:text(4000),inferred:text(4000,0).default(''),unknown:text(4000),
  author:text(100),investigated_at:z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine(s=>{const d=new Date(s);return !isNaN(+d)&&d.toISOString().slice(0,10)===s&&s<=new Date().toISOString().slice(0,10)},'Use a valid date, today or earlier.'),
  links:text(6000).transform(s=>s.split(/\r?\n/).map(s=>s.trim()).filter(Boolean)).pipe(z.array(z.string().max(1500).refine(publicLink,'Use public HTTPS links without credentials, ports, or local addresses.')).min(1).max(8)),
  architecture:text(5000,0).default(''),models:text(5000,0).default(''),workflows:text(5000,0).default(''),apis:text(5000,0).default(''),
  website:z.string().max(0).default(''),consent:z.literal(true),
}).strict();
export type Submission = z.output<typeof submissionSchema>;
export const fieldLabels:Record<string,string> = {question:'Investigation question',summary:'Findings summary',observed:'Observed',inferred:'Inferred',unknown:'Unknown & limitations',architecture:'Architecture',models:'Domain & data models',workflows:'Workflows & state machines',apis:'API & protocol surfaces'};
