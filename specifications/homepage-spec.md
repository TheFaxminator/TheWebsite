# Homepage — THEFAMINATOR'S REPORTING TOOLS

## Design
Follow `specs/design-system.md` exactly. Page title: **"THEFAMINATOR'S REPORTING TOOLS"**.

---

## Overview

The homepage is the central hub of the website. It displays all available tools as a clickable card grid. There is no news section, no sidebar — just the header, a clean grid of tool cards, a downloads section, and the footer.

---

## File Location

```
index.html   ← root of the project (NOT inside /tools/)
```

Asset paths are therefore one level shallower than tool pages:
- Background: `assets/images/background.jpg`
- Fonts: `assets/fonts/SpaceGrotesk.woff2` and `assets/fonts/Inter.woff2`
- Favicon: `assets/icons/favicon.ico`

---

## Page Structure (top to bottom)

```
1. <head>         fonts, favicon, inline CSS
2. <header>       THEFAMINATOR'S / REPORTING TOOLS  (sticky, from design-system.md)
3. <main>
   a. Intro line  one sentence explaining the site
   b. Tools grid  clickable cards, one per tool
   c. Downloads   section with downloadable files
4. <footer>       TheFaminator 2.0
```

---

## Header

Standard sticky header from `design-system.md`.

- Line 1: `THEFAMINATOR'S`
- Line 2: `REPORTING TOOLS`
- Right side badge: none (no status badge needed on the homepage)

---

## Intro Line

A single short sentence below the header, before the grid. Centred, `slate-400` colour, `sm` size.

> *"Free tools to help financial institutions navigate the world of tax reporting and compliance."*

---

## Tools Grid

### Layout
- Responsive grid: `1` column on mobile → `2` columns on tablet → `3` columns on desktop
- Gap between cards: `2rem`
- Each card is equal height

### Card Design
Each card follows the **glass card** style from `design-system.md` with these additions:

- A large emoji icon centred at the top (see tool list below)
- Tool name in `title-font`, white, `2xl` size, centred, `tracking-[-1px]`
- Subtle cyan glow (`neon-cyan`) on hover only — not by default
- Entire card is clickable — `cursor: pointer`
- On hover: border brightens to `rgba(255,255,255,0.25)`, slight scale up `transform: scale(1.02)`, transition `0.2s ease`
- Clicking navigates to the tool's `.html` file

### Tool List (initial set — add more cards as tools are built)

| Icon | Tool Name | Links To |
|---|---|---|
| 🔍 | TIN VALIDATOR | `tools/tin-validator.html` |
| 🌳 | DECISION TREE | `tools/decision-tree.html` |
| 📊 | XML STATISTICS | `tools/xml-statistics.html` |
| 📋 | KANBAN BOARD | `tools/kanban-board.html` |
| 📥 | DOWNLOADS | *(scrolls to downloads section on same page)* |

> **Note for Claude Code:** If a tool file does not exist yet, still render the card but style it as "coming soon" — slightly dimmed (`opacity: 0.5`), not clickable, with a small `COMING SOON` badge in `amber-400` in the top-right corner of the card.

### "Coming Soon" Badge
```
position: absolute, top-right corner of card
text: COMING SOON
style: amber-400 text, xs size, tracking-widest, bg-amber-500/20, border border-amber-400/30, rounded-full, px-3 py-1
```

---

## Downloads Section

A separate section below the tools grid, clearly separated by a `border-t border-white/10` divider and `mt-12` spacing.

### Section Header
```
Label:  DOWNLOADS
Style:  section label from design-system.md (xs, tracking-[2px], uppercase, cyan-400)
```

### Layout
A `2-column` grid of download cards (1 column on mobile).

### Download Card Design
Same glass card style, smaller padding (`p-6`). Each card contains:
- File type icon (emoji): 📄 for PDF, 📊 for Excel/CSV, 🗂️ for XML/JSON schema
- File name in white, `sm` size
- File type label in `slate-400`, `xs` size (e.g. "Excel template", "XML Schema", "PDF guide")
- A download button (outline style from design-system.md) with label `DOWNLOAD ↓`
- `href` points to the file in the `downloads/` folder

### Initial Download Items (placeholders — add real files as they are created)

| Icon | File Name | Type Label | Links To |
|---|---|---|---|
| 📊 | TIN Dataset Template | Excel template | `downloads/templates/tin-template.xlsx` |
| 🗂️ | CRS XML Schema | XML Schema | `downloads/schemas/crs-schema.xsd` |
| 🗂️ | FATCA XML Schema | XML Schema | `downloads/schemas/fatca-schema.xsd` |
| 📄 | Reporting Quick Guide | PDF guide | `downloads/guides/reporting-guide.pdf` |

> **Note for Claude Code:** If a download file does not exist yet, still render the card but disable the button (`opacity: 0.5`, `cursor: not-allowed`, no `href`) and change the button label to `NOT YET AVAILABLE`.

---

## Background Image

Apply the custom background image to the page body:

```css
body {
    background-image: url('assets/images/background.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-color: #05050f; /* fallback if image not found */
}
```

The dark glass cards from the design system will sit naturally on top of any background image due to their `backdrop-filter: blur` and semi-transparent backgrounds.

---

## Page Metadata

```html
<title>THEFAMINATOR'S REPORTING TOOLS</title>
<meta name="description" content="Free tools for tax reporting, TIN validation, decision trees and XML statistics for financial institutions.">
<link rel="icon" href="assets/icons/favicon.ico">
```

---

## Worked Example

When Claude Code opens the finished `index.html` in a browser, the user should see:

1. Sticky dark header: `THEFAMINATOR'S` / `REPORTING TOOLS` with cyan glow
2. The custom background image visible behind all content
3. One short intro sentence
4. A 3-column grid of glass cards — TIN Validator and any other built tools are fully clickable; unbuilt tools show a dimmed `COMING SOON` badge
5. A divider, then a 2-column grid of download cards — existing files have an active `DOWNLOAD ↓` button; missing files show a disabled button
6. Footer: `TheFaminator 2.0`

---

## How to Tell Claude Code to Build This

```
Read specs/design-system.md and specs/homepage-spec.md.
Build index.html in the project root.
Use assets/images/background.jpg as the page background (fixed, cover).
Use offline fonts from assets/fonts/.
Favicon: assets/icons/favicon.ico.
```

---

## Out of Scope

- Navigation menu between tool pages (each tool has its own back button or the user uses the browser back button)
- Search or filtering of tools
- User login or accounts
- Any server-side functionality
