import handler, { createScheduledHandler, PluginBridge } from '@emdash-cms/cloudflare/worker';
import { canonicalRedirect } from './lib/seo';
export { PluginBridge };
const fetch: NonNullable<typeof handler.fetch> = (request: Request, env: unknown, context: unknown) => {
  const target = canonicalRedirect(new URL(request.url));
  if (target) return new Response(null, { status: 308, headers: { Location: target.href } });
  return handler.fetch!(request, env, context);
};
export default { ...handler, fetch, scheduled: createScheduledHandler() };
