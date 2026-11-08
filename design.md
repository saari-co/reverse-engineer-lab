# Reverse Engineer Lab — Design Contract

Updated: 2026-11-07
Canonical path: `design.md`
GrillTrack ledger: `.grilltrack/ledger.json` (`gt-20261107210933-26b0f5`)

## Product Intent & Audience

Reverse Engineer Lab (`https://reverseengineerlab.com`) is an independent, public catalog of software reverse-engineering case studies and architectural distillations, built on Astro and EmDash CMS. Readers are systems engineers, protocol analysts, and software builders who care about **what was observed, what was inferred, and what remains unknown** — backed by public, revision-pinned evidence links.

## Hard Invariants & Pinned Repository Contracts

- **Public/private boundary (`AGENTS.md`)**: Never import private research, credentials, local databases, or internal proof. Explicitly state non-affiliation with the Reverse Engineer Anything project.
- **Verification hooks (`bin/verify-site.mjs`)**:
  - `/` must render `data-content-source="emdash"` on EmDash-driven surfaces (main nav and published catalog cards).
  - Every crawled internal route (`/`, `/entries/<slug>`, `/about`, `/submit`) must return `200` and never render `"There is no page at this address"`.
  - `/_emdash/api/plugins/rea-catalog/admin` must reject anonymous POSTs (`401`/`403` or Cloudflare Access `302`).
  - `/sitemap.xml` and `/robots.txt` must return `200` with clean canonical URLs (no `%2f`).
- **Submission contract (`src/pages/submit.astro` + `src/lib/validation.ts`)**:
  - Preserve `#submission`, `#form-result` (`role="status" aria-live="polite"`), honeypot `name="website"`, consent checkbox `name="consent"`, and POST `/_emdash/api/plugins/rea-catalog/submit` JSON envelope handling. Text and public HTTPS links only; zero file uploads.
- **Anti-slop & honesty (`emdash-stitch-design`)**:
  - Zero fabricated metrics, star counts, testimonials, or `LABEL // 2026` filler badges. Every displayed distillation count (`20 published`), target type, author, date, and evidence link comes strictly from EmDash content.
  - Zero emojis in UI chrome.
  - Zero horizontal overflow across `320px–767px` mobile and desktop viewports; every `[hidden]`-toggled element with a custom `display` rule carries a matching `[hidden] { display: none }`.

## Owner-Locked Visual System (`m1-character-mark-c2` + `r1-v5-v1-dual-workbench`)

> *Supersedes initial Grill 0 vellum candidate posture (`m1-character-mark`, `r1-homepage-layout`).*

- **Locked Brand Character-Mark (`m1-character-mark-c2` -> `C2 · Split Black-Box Prism`)**:
  - Geometric chamfered dark obsidian prism sliced open along a diagonal amber-to-emerald seam (*"No black boxes"*) with minimal GrokBot/Muse horizontal phosphor visor eyes (`public/logo.svg`, `public/favicon.svg`, `public/social-card-c2.png` `1200×630`, `public/social-card.svg`, `.github/assets/social-preview.png` `1280×640`, `.github/assets/banner-{dark,light}.webp`).
- **Locked Dual-Mode Workbench Architecture (`r1-v5-v1-dual-workbench`)**:
  - **Styling & Light Mode (`V5 · Specimen Drawer Workbench`, screen `e4c74218669f4d5ba46ccc7b70c1554b`)**: Crisp `1.5px` architectural workbench borders, `2px` hard specimen-drawer offset shadows (`3px 3px 0` resting, `4px 4px 0` hover), cool mineral sage canvas (`#E8ECE9`) + clean card plates (`#F4F7F5`), deep forest spruce (`#24583C`) + warm bronze (`#9A4D06`) accents.
  - **Dark Mode (`V1 · Obsidian Telemetry Bench`, screen `b4fa8241f4c24d44b48363190ca830f5`)**: Deep obsidian bench (`#111614`, never pure `#000000`) + charcoal slate plates (`#171F1B`), warm bone ink (`#ECEAE2`), phosphor emerald (`#4CC38A`), and warm brass (`#E6A23C`) accents.
  - **Token Architecture**: CSS `light-dark(<V5-light>, <V1-dark>)` inside `@layer base` in `src/styles/tokens.css`, followed by blank unlayered `src/styles/theme.css` (`:root {}`), with inline pre-paint `data-theme` (`light` / `dark` / `system`) + `data-resolved-theme` restoration and a single-click `Light` / `Dark` bench toggle in the header.
  - **Typography Role System**: `Newsreader` (editorial specimen display & prose headings), `Plus Jakarta Sans` (UI controls & readable technical body), `JetBrains Mono` (`tabular-nums` specimen metadata, target badges, and revision identifiers).
- **Owner-Directed Touch-Ups Over Raw Stitch Exports**:
  1. **Header**: Replaced cluttered Stitch status bars with a clean single-row workbench header (`C2` prism mark + `Reverse Engineer Lab` + `Catalog · About · Submit research` + `Light/Dark` bench toggle) that wraps cleanly on `320px–390px` mobile without clipping.
  2. **Mobile (`320px–767px`)**: Fixed raw `V5`'s non-responsive 12-column hero split (`grid-cols-12` without `lg:` breakpoint) so mobile stacks cleanly (`scrollWidth <= clientWidth` across all routes).
  3. **Footer**: Structured 3-column specimen workbench footer (`Identity & Non-Affiliation`, `Catalog & Routes`, `Editorial Contract`).
- **Minor Animation (`emdash-surface-fx`)**:
  - Token-aware Bayer `8×8` dither wash (`public/fx/dither.js`, pooled via `public/fx/viewport-pool.js`).
  - Gentle SVG signal trace pulse along the hero `SYSTEM -> EVIDENCE -> UNDERSTANDING` schematic diagram.
  - Lightweight CSS-variable 3D hover tilt (`mountHoverTilt`) on catalog cards + `mountNumberTicker` (`tabular-nums`) on the published index count (`20 published`) (`public/fx/surface-micro.js`), all respecting `prefers-reduced-motion: reduce`.

## WCAG 2.x AA Contrast Verification Matrix

| Mode | Foreground Token | Background Token | Contrast Ratio | Threshold | Result |
| --- | --- | --- | --- | --- | --- |
| Light (`V5`) | `--ink` (`#1E2923`) | `--bg` (`#E8ECE9`) | `12.69:1` | `>= 4.5:1` | Pass |
| Light (`V5`) | `--ink` (`#1E2923`) | `--bg-elevated` (`#F4F7F5`) | `13.97:1` | `>= 4.5:1` | Pass |
| Light (`V5`) | `--ink-muted` (`#44544B`) | `--bg` (`#E8ECE9`) | `6.55:1` | `>= 4.5:1` | Pass |
| Light (`V5`) | `--ink-muted` (`#44544B`) | `--bg-elevated` (`#F4F7F5`) | `7.21:1` | `>= 4.5:1` | Pass |
| Light (`V5`) | `--ink-subtle` (`#52645A`) | `--bg-subtle` (`#DDE3DF`) | `5.66:1` | `>= 4.5:1` | Pass |
| Light (`V5`) | `--accent` (`#24583C`) | `--bg` (`#E8ECE9`) | `6.96:1` | `>= 4.5:1` | Pass |
| Light (`V5`) | `--accent-ink` (`#F4F7F5`) | `--accent` (`#24583C`) | `7.66:1` | `>= 4.5:1` | Pass |
| Light (`V5`) | `--accent-amber` (`#9A4D06`) | `--bg-elevated` (`#F4F7F5`) | `5.73:1` | `>= 4.5:1` | Pass |
| Light (`V5`) | `--line-strong` (`#6D8075`) | `--bg` (`#E8ECE9`) | `3.45:1` | `>= 3.0:1` UI | Pass |
| Dark (`V1`) | `--ink` (`#ECEAE2`) | `--bg` (`#111614`) | `15.18:1` | `>= 4.5:1` | Pass |
| Dark (`V1`) | `--ink` (`#ECEAE2`) | `--bg-elevated` (`#171F1B`) | `13.97:1` | `>= 4.5:1` | Pass |
| Dark (`V1`) | `--ink-muted` (`#A6B3AC`) | `--bg` (`#111614`) | `8.59:1` | `>= 4.5:1` | Pass |
| Dark (`V1`) | `--ink-muted` (`#A6B3AC`) | `--bg-elevated` (`#171F1B`) | `7.90:1` | `>= 4.5:1` | Pass |
| Dark (`V1`) | `--ink-subtle` (`#8E9E95`) | `--bg-subtle` (`#1E2823`) | `5.86:1` | `>= 4.5:1` | Pass |
| Dark (`V1`) | `--accent` (`#4CC38A`) | `--bg` (`#111614`) | `8.68:1` | `>= 4.5:1` | Pass |
| Dark (`V1`) | `--accent-ink` (`#0D1511`) | `--accent` (`#4CC38A`) | `9.21:1` | `>= 4.5:1` | Pass |
| Dark (`V1`) | `--accent-amber` (`#E6A23C`) | `--bg-elevated` (`#171F1B`) | `8.12:1` | `>= 4.5:1` | Pass |
| Dark (`V1`) | `--line-strong` (`#5B6E64`) | `--bg` (`#111614`) | `3.63:1` | `>= 3.0:1` UI | Pass |

## Stripped Stitch Filler & Hallucinated Copy

The following non-EmDash decorative strings generated inside raw Stitch HTML exports were stripped during Astro translation:

- **Global chrome (`e4c74218669f4d5ba46ccc7b70c1554b`, `b4fa8241f4c24d44b48363190ca830f5`)**: `DISASSEMBLY // 01`, `CALIBRATED : SPECIMEN DRAWER`, `LATENCY: ZERO-DRIFT`, `STATUS: RUNNING INSPECTION`, `BENCH LIVE`, `FIELD NOTES // SPEC_001`, `[INDEX: REPOSITORY]`, `PHASE 01 // TARGET`, `LAB//SPEC`.
- **Entry detail (`c3806ddd0d7c40a48ee15dcf874708db`)**: `SPECIMEN REF: 2026-SAND-792`, `SECTION // 01`, `SECTION // 02`, `SECTION // 03`, `ARCHIVE REF: EV-03`, `INDEX 02 ENTRIES`.
- **Submit (`ed9a7f93b6c047d487da3a828d99947e`)**: `SPECIMEN SUBMISSION PROTOCOL · REV 2026.11`, `DRAFTING BENCH ACTIVE`.
- **About (`3b184554a9724a50ba02ac2a0cfcb69b`)**: `INDEX DOCTRINE`, `ABOUT THE INDEX // METHODOLOGY ARCHIVE`, `EMPIRICAL TAXONOMY STRIP // TRIAGE OF CLAIMS`, `CORE METHODOLOGY PILLARS // SPECIMEN DRAWER BENCHMARKS`, `SUBMISSION CRITERIA // EMPIRICAL RIGOR`, `NOTE // PROTOCOL:`, `SPECIMEN DRAWER PROTOCOL · EMPIRICAL VERIFICATION REGISTER`.

## Surface Checklist & Stitch Decision Status

- **Google Stitch Project**: `projects/17279222502840569372` (`https://stitch.google.com/projects/17279222502840569372`)
- **Design System (`DESIGN.md`) Screens**: initial `13181985034841685301` (asset `43da814d6bc94df2a5b030f1c6582bef`), updated locked system `4377957448709986653` (`.stitch/DESIGN.md`)
- **`R0 · Baselines` (`GROUP_INSTANCE` `e5c0b6b28c0245dbb9f417fcd658a81e`)**:
  - `/`: `18372367550482048341`
  - `/entries/[slug]`: `14982098077836894227`
  - `/submit`: `16049154649265114268`
  - `/about`: `10450188374525766718`
- **`R1 · Layout` (`GROUP_INSTANCE` `0d441bf53d584df89f27c7d0fa4ff422`)**:
  - `V1`: `b4fa8241f4c24d44b48363190ca830f5` (*Obsidian Telemetry Bench* — **selected Dark palette**)
  - `V2`: `4d6a5079400f4057a0c6fb5bf69d2245` (*Archival Field Dossier*)
  - `V3`: `afab81cb2d9542beaa8f4bf6f2b8e8ee` (*Blueprint Drafting Matrix*)
  - `V4`: `4bad9e6f1d5f469784041bf54153b27e` (*Scholarly Monograph Ledger*)
  - `V5`: `e4c74218669f4d5ba46ccc7b70c1554b` (*Specimen Drawer Workbench* — **selected Light palette + styling structure**)
- **Subpage Surface Designs (`S1–S3`)**:
  - `S1 · Entry Detail` (`GROUP_INSTANCE` `e5194ba6b5ae4d14ab8887bd338dab91`): `c3806ddd0d7c40a48ee15dcf874708db`
  - `S2 · Submit` (`GROUP_INSTANCE` `0d7b529de5304b959bbb99f13385e947`): `ed9a7f93b6c047d487da3a828d99947e`
  - `S3 · About` (`GROUP_INSTANCE` `e2feb70f9c654eacbac10592cb4449a3`): `3b184554a9724a50ba02ac2a0cfcb69b`

| Surface / Variable | Route | Stitch Round | Candidates | Selected ID | Status | Implemented In |
| --- | --- | --- | --- | --- | --- | --- |
| Brand Character-Mark | Global chrome + favicon + OG + GitHub banners | `M1 · Character-Mark` | `C1`, `C2`, `C3`, `C4`, `C5` | `C2` (`m1-character-mark-c2`) | `selected, implemented` | `public/logo.svg`, `public/favicon.svg`, `public/social-card-c2.png`, `.github/assets/banner-dark.webp`, `.github/assets/banner-light.webp` |
| Homepage Layout + Workbench Chrome | `/` + Global header/footer | `R1 · Layout` | `b4fa8241f4c24d44b48363190ca830f5`, `4d6a5079400f4057a0c6fb5bf69d2245`, `afab81cb2d9542beaa8f4bf6f2b8e8ee`, `4bad9e6f1d5f469784041bf54153b27e`, `e4c74218669f4d5ba46ccc7b70c1554b` | `e4c74218669f4d5ba46ccc7b70c1554b` + header/footer/mobile touch-ups | `selected, implemented` | `src/layouts/Layout.astro`, `src/pages/index.astro`, `src/styles/site.css`, `public/fx/dither.js`, `public/fx/surface-micro.js` |
| Dual-Mode Color Palette & Contrast | Global (`light-dark()`) | `R1 · Layout` (`V5` Light + `V1` Dark) | `e4c74218669f4d5ba46ccc7b70c1554b`, `b4fa8241f4c24d44b48363190ca830f5` | `e4c74218669f4d5ba46ccc7b70c1554b` (Light) + `b4fa8241f4c24d44b48363190ca830f5` (Dark) | `selected, implemented` | `src/styles/tokens.css`, `src/styles/theme.css`, `src/layouts/Layout.astro` |
| Typography Role System | Global (`Newsreader` + `Plus Jakarta Sans` + `JetBrains Mono`) | `R1 · Layout` (`V5`) | `e4c74218669f4d5ba46ccc7b70c1554b` | `e4c74218669f4d5ba46ccc7b70c1554b` | `selected, implemented` | `src/styles/tokens.css`, `src/layouts/Layout.astro`, `src/styles/site.css` |
| Distillation Detail Page | `/entries/[slug]` | `S1 · Entry Detail` | `c3806ddd0d7c40a48ee15dcf874708db` | `c3806ddd0d7c40a48ee15dcf874708db` | `selected, implemented` | `src/pages/entries/[slug].astro`, `src/styles/site.css` |
| Submit Investigation Page | `/submit` | `S2 · Submit` | `ed9a7f93b6c047d487da3a828d99947e` | `ed9a7f93b6c047d487da3a828d99947e` | `selected, implemented` | `src/pages/submit.astro`, `src/styles/site.css` |
| About & Methodology Page | `/about` | `S3 · About` | `3b184554a9724a50ba02ac2a0cfcb69b` | `3b184554a9724a50ba02ac2a0cfcb69b` | `selected, implemented` | `src/pages/about.astro`, `src/styles/site.css` |
| Not Found Fallback | `/404` | — | — | — | `no round judged; styled from foundations only` | `src/pages/404.astro`, `src/styles/site.css` |
