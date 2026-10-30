# Operating the catalog

Production content belongs to EmDash. The repository seed records the initial and deliberately revised public articles; it must not be reapplied with overwrite semantics to an active site. Edit existing records through the authenticated CMS so revisions and publication state remain intact.

Build with `CF_ACCESS_TEAM_DOMAIN=<your-team>.cloudflareaccess.com npm run build:cloudflare`, then deploy the generated artifact with `npm run deploy`. Verify `node bin/verify-site.mjs https://reverseengineerlab.com` and check the admin UI. Record the source commit and Worker version together. Production and `www` must have permanent canonical redirects before CMS handling; the apex admin is protected by its Access application and only the exact public submission endpoint bypasses it.

D1 provides Time Travel recovery. Before restoring, identify the intended time/bookmark with `wrangler d1 time-travel info reverse-engineer-lab-cms`, preserve current content, and obtain explicit restore approval. A restore changes production content and can roll back newer editorial work. No restore is part of an ordinary deployment. Media in R2 is separate from the database. Validate current Cloudflare recovery documentation before an actual recovery.

Search Console uses the domain property `reverseengineerlab.com`. Keep its public ownership-verification DNS record. Submit `/sitemap.xml`; use URL Inspection to distinguish live crawl availability from actual indexed status. Indexing and rankings are not guaranteed by a successful submission.
