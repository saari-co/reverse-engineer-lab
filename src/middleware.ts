import { defineMiddleware } from 'astro:middleware';
import { canonicalRedirect } from './lib/seo';
export const onRequest = defineMiddleware(async (ctx, next) => {
  const redirect = canonicalRedirect(ctx.url);
  if (redirect) return new Response(null, { status: 308, headers: { Location: redirect.href } });
  const response = await next();
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  if (ctx.url.protocol === 'https:') response.headers.set('Strict-Transport-Security', 'max-age=31536000');
  if (ctx.url.pathname.startsWith('/_emdash')) response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  if (ctx.url.pathname === '/submit' || ctx.url.searchParams.has('q') || ctx.url.searchParams.has('type')) response.headers.set('X-Robots-Tag', 'noindex, follow');
  return response;
});
