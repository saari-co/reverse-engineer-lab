---
name: Reverse Engineer Lab
colors:
  canvas-light: '#E8ECE9'
  canvas-dark: '#111614'
  surface-light: '#F4F7F5'
  surface-dark: '#171F1B'
  surface-muted-light: '#DDE3DF'
  surface-muted-dark: '#1E2924'
  ink-light: '#1E2923'
  ink-dark: '#ECEAE2'
  muted-light: '#4A574F'
  muted-dark: '#9CA8A0'
  border-light: '#C5CEC8'
  border-dark: '#26332C'
  border-strong-light: '#76847B'
  border-strong-dark: '#5C7066'
  accent-light: '#24583C'
  accent-dark: '#4CC38A'
  highlight-light: '#9A4D06'
  highlight-dark: '#E6A23C'
  surface: '#F4F7F5'
  background: '#E8ECE9'
  on-surface: '#1E2923'
  on-background: '#1E2923'
  primary: '#24583C'
  on-primary: '#F4F7F5'
  secondary: '#9A4D06'
  on-secondary: '#FFFFFF'
  outline: '#76847B'
  outline-variant: '#C5CEC8'
typography:
  headline-display:
    fontFamily: DM Sans
    fontSize: clamp(2.4rem, 4.6vw, 3.6rem)
    fontWeight: '800'
    lineHeight: '1.06'
  headline-italic-accent:
    fontFamily: Playfair Display
    fontSize: clamp(2.5rem, 4.8vw, 3.75rem)
    fontWeight: '400'
    lineHeight: '1.08'
  headline-lg:
    fontFamily: DM Sans
    fontSize: 2.25rem
    fontWeight: '800'
    lineHeight: '1.15'
  headline-md:
    fontFamily: DM Sans
    fontSize: 1.5rem
    fontWeight: '700'
    lineHeight: '1.25'
  headline-sm:
    fontFamily: DM Sans
    fontSize: 1.15rem
    fontWeight: '700'
    lineHeight: '1.35'
  body-lg:
    fontFamily: DM Sans
    fontSize: 1.0625rem
    fontWeight: '400'
    lineHeight: '1.7'
  body-md:
    fontFamily: DM Sans
    fontSize: 0.96875rem
    fontWeight: '400'
    lineHeight: '1.68'
  mono-meta:
    fontFamily: DM Mono
    fontSize: 0.78125rem
    fontWeight: '500'
    lineHeight: '1.4'
  label-sm:
    fontFamily: DM Mono
    fontSize: 0.71875rem
    fontWeight: '500'
    lineHeight: '1.25'
    letterSpacing: 0.08em
rounded:
  none: 0rem
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
spacing:
  gutter: 1.5rem
  margin: 2.5rem
---

# Reverse Engineer Lab — Locked Design System (`V5 Specimen Drawer Workbench + V1 Obsidian Dark`)

## 1. Visual Theme & Dual-Mode Atmosphere

**Specimen Drawer Workbench (Light, V5) + Obsidian Telemetry Bench (Dark, V1).**
Reverse Engineer Lab is an independent public catalog of software reverse-engineering case studies separating **Observed** facts, **Inferred** mechanics, and **Unknown** boundaries.

- **Light Mode (`V5` Specimen Drawer Workbench):** Architectural sage-stone workbench (`#E8ECE9`) with subtle `32px` coordinate hairlines, crisp `#F4F7F5` specimen cards, `#1E2923` carbon-pine ink, `#24583C` botanical phosphor green, and `#9A4D06` / `#D97706` amber callout pips.
- **Dark Mode (`V1` Obsidian Telemetry Bench):** Calibrated matte obsidian bench (`#111614`, never pure `#000000`) with `#171F1B` inspection plates, `#ECEAE2` warm chalk ink, `#4CC38A` phosphor emerald, and `#E6A23C` amber callouts.
- **Tactile Language:** Crisp `1px–2px` structural borders, physical offset stamp shadows (`8px 8px 0`) on featured schematic/callout plates, `10px` corner indicator pips on specimen cards, millimeter ruler dividers, and zero neon outer glows.

## 2. Typography & Hierarchy

- **Primary Headlines & Body (`--font-sans`):** `DM Sans` — bold geometric `800` tracking (`-0.03em`) for structural headlines, paired with clean `400/500` long-form reading columns (`65ch`).
- **Editorial Italic Emphasis (`--font-serif`):** `Playfair Display` italic (`400`) used selectively for epistemological emphasis (*Evidence included.*, *with receipts.*, *figured out.*).
- **Technical Metadata (`--font-mono`):** `DM Mono` (`tabular-nums`) for target-type badges, specimen indices (`01 ↗ .. 19 ↗`), target revisions, dates, and schematic labels.

## 3. Touched-Up Shared Chrome & Mobile Rules (Owner Lock)

- **Clean Shared Header (No Clutter):** Uses the **`C2` Split Black-Box Prism** geometric SVG character-mark + clean `REVERSE ENGINEER LAB` wordmark (proper spacing, never squished), EmDash primary nav (`Catalog`, `About`, bordered `Submit research ↗` button), and a compact `Light / Dark` bench toggle. **Zero** fake status bars (`DISASSEMBLY // 01`, `LATENCY: ZERO-DRIFT`, `BENCH LIVE` are forbidden). Collapses cleanly on `390px` mobile with zero overlap (`scrollWidth <= clientWidth`).
- **Structured 3-Column Footer:** Brand mark + tagline (`Know how it works. Know what you don't.`), navigation/index links (`Catalog`, `Submit research`, `About`, `Sitemap`), and explicit provenance (`An independent research catalog. Not affiliated with the Reverse Engineer Anything project.` + `Editor sign in ↗`).
- **Strict Honesty:** Preserve exact captured route copy and real EmDash fields; never invent `LABEL // 2026` filler badges, star counts, or unverified claims.
