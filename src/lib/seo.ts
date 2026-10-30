export const SITE_ORIGIN = 'https://reverseengineerlab.com';
export const SITE_NAME = 'Reverse Engineer Lab';
export function canonicalRedirect(input: URL): URL | null {
  if (!['reverseengineerlab.com', 'www.reverseengineerlab.com'].includes(input.hostname)) return null;
  if (input.hostname === 'reverseengineerlab.com' && input.protocol === 'https:') return null;
  const target = new URL(input);
  target.protocol = 'https:';
  target.hostname = 'reverseengineerlab.com';
  target.port = '';
  return target;
}
export function metaDescription(text: string, limit = 160): string {
  const normalized = text.replace(/\s+/g, ' ').trim();
  if (normalized.length <= limit) return normalized;
  const boundary = normalized.lastIndexOf(' ', limit - 1);
  return normalized.slice(0, boundary > 0 ? boundary : limit - 1).replace(/[ ,;:.-]+$/, '') + '…';
}
export function authorEntity(name: string) {
  return name.trim().toLowerCase() === SITE_NAME.toLowerCase()
    ? { '@type': 'Organization', '@id': SITE_ORIGIN + '/#organization', name: SITE_NAME, url: SITE_ORIGIN + '/about' }
    : { '@type': 'Person', name };
}
