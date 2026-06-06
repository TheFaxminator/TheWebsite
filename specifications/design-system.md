# THEFAMINATOR'S — Design System

> **How to use this file:** At the top of every tool spec, write one line:
> `Follow design-system.md exactly. Page title: "THEFAMINATOR'S [TOOL NAME]".`
> Claude Code will read this file and apply the full design consistently across every tool.

---

## 1. Brand & Naming Convention

Every page **must** follow this two-line header pattern — no exceptions:

```
Line 1 (large):  THEFAMINATOR'S          ← always identical, always the brand name
Line 2 (small):  [TOOL NAME IN CAPS]     ← unique per page, e.g. TIN VALIDATOR
```

The brand name `THEFAMINATOR'S` is fixed and never changes. Only the subtitle changes per tool.

---

## 2. Colour Palette

All colours are defined as CSS custom properties on `:root`. Always use these variables — never hardcode hex values elsewhere.

```css
:root {
  /* Backgrounds */
  --bg-page:        #05050f;        /* near-black, deep navy — page background */
  --slate-900:      #0f172a;
  --slate-800:      #1e293b;

  /* Text */
  --slate-400:      #94a3b8;        /* muted body text */
  --slate-300:      #cbd5e1;        /* secondary text */
  --white:          #ffffff;

  /* Accent — Cyan (primary interactive colour) */
  --cyan-300:       #67e8f9;
  --cyan-400:       #22d3ee;        /* ← main accent, use for labels, focus states, primary UI */

  /* Accent — Purple (secondary accent) */
  --purple-300:     #d8b4fe;
  --purple-400:     #c084fc;
  --purple-500:     #a855f7;        /* ← gradient end colour */

  /* Status — Success */
  --emerald-300:    #6ee7b7;
  --emerald-400:    #34d399;
  --emerald-500:    #10b981;

  /* Status — Error */
  --red-300:        #fca5a5;
  --red-400:        #f87171;

  /* Status — Warning / Neutral */
  --amber-400:      #fbbf24;
}
```

### Colour Usage Rules

| Element | Colour |
|---|---|
| Page background | `#05050f` (set on `body`) |
| Card / panel background | `rgba(15, 23, 42, 0.75)` — glassmorphism |
| Primary accent / section labels | `--cyan-400` |
| Secondary accent | `--purple-400` |
| CTA gradient | `linear-gradient(to right, --cyan-400, --purple-500)` |
| Valid / success | `--emerald-400` |
| Invalid / error | `--red-400` |
| Warning / not validated | `--amber-400` |
| Body text | `--slate-300` |
| Muted / label text | `--slate-400` |
| Borders | `rgba(255,255,255,0.10)` or `rgba(255,255,255,0.20)` |

---

## 3. Typography

```css
body {
  font-family: 'Inter', system-ui, sans-serif;
  color: #ffffff;
  background: #05050f;
}

.title-font {
  font-family: 'Space Grotesk', sans-serif;   /* used for the brand header and large stat numbers */
}
```

Load both fonts from Google Fonts:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
```

### Type Scale

| Use | Class / Size | Notes |
|---|---|---|
| Brand name `THEFAMINATOR'S` | `4xl` / `2.25rem`, `tracking-[-2px]` | Space Grotesk, white, header-glow |
| Tool subtitle | `xl` / `1.25rem`, `tracking-widest` | Inter, `--cyan-400`, `-mt-2` offset |
| Section label | `xs` / `0.75rem`, `tracking-[2px]`, `uppercase` | `--cyan-400` or `--purple-400` |
| Large stat number | `6xl` / `3.75rem` | Space Grotesk, coloured by status |
| Body / description | `sm` / `0.875rem` | `--slate-300`, `leading-relaxed` |
| Form label | `sm` / `0.875rem` | `--slate-400` |
| Button | `lg` / `1.125rem`, `uppercase`, `font-semibold` | |
| Monospace (file names, codes) | `font-mono`, `xs` | |

---

## 4. Layout & Structure

### Page Shell

```html
<body class="min-h-screen text-white overflow-x-hidden" style="background:#05050f">
  <header>…</header>
  <main class="max-w-screen-2xl mx-auto px-10 py-10 space-y-12">
    <!-- tool sections go here -->
  </main>
  <footer>…</footer>
</body>
```

- Maximum content width: `1536px` (`max-w-screen-2xl`), centred with `mx-auto`
- Horizontal padding: `px-10` (2.5rem each side)
- Vertical page padding: `py-10`
- Spacing between sections: `space-y-12` (3rem)

### Grid System

Use a **12-column grid** for tool input layouts:
```html
<div class="grid grid-cols-1 md:grid-cols-12 gap-8"> … </div>
```
Responsive: `grid-cols-1` on mobile → `md:grid-cols-12` on desktop.

---

## 5. Components

### 5.1 Header (sticky, appears on every page)

```html
<header style="border-bottom:1px solid rgba(255,255,255,0.10); background:rgba(0,0,0,0.70); backdrop-filter:blur(24px); position:sticky; top:0; z-index:50;">
  <div class="max-w-screen-2xl mx-auto px-10 py-6 flex items-center justify-between">

    <!-- LEFT: Brand name + tool subtitle -->
    <div>
      <h1 class="title-font" style="font-size:2.25rem; letter-spacing:-2px; text-shadow:0 0 20px #00f7ff; color:#fff; margin:0;">
        THEFAMINATOR'S
      </h1>
      <p style="color:var(--cyan-400); font-size:1.25rem; letter-spacing:0.1em; margin-top:-0.5rem;">
        [TOOL NAME IN CAPS]
      </p>
    </div>

    <!-- RIGHT: Status badge (optional, tool-specific) -->
    <div style="display:flex; align-items:center; gap:1.5rem; font-size:0.875rem;">
      <!-- Example badge: -->
      <div style="padding:0.25rem 1.5rem; border-radius:9999px; background:rgba(16,185,129,0.10); border:1px solid rgba(52,211,153,0.30); color:var(--emerald-400); display:flex; align-items:center; gap:0.5rem;">
        <div style="width:0.5rem; height:0.5rem; background:var(--emerald-400); border-radius:50%; animation:pulse 2s infinite;"></div>
        STATUS BADGE TEXT
      </div>
    </div>

  </div>
</header>
```

### 5.2 Glass Card / Panel

All tool sections live inside glass cards:

```css
.glass {
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(20px);
  border-radius: 1.5rem;          /* rounded-3xl */
  border: 1px solid rgba(255,255,255,0.10);
  padding: 2.5rem;                /* p-10 */
}
```

Highlighted / primary card adds a cyan glow:
```css
.neon-cyan {
  box-shadow: 0 0 25px -5px #00f7ff, 0 0 10px -2px #00f7ff;
}
```

### 5.3 Section Label

Always placed at the top of a card, above content:
```html
<h2 style="text-transform:uppercase; font-size:0.75rem; letter-spacing:0.2em; color:var(--cyan-400); font-weight:500; margin-bottom:1.5rem;">
  SECTION NAME
</h2>
```
Use `--cyan-400` for primary sections, `--purple-400` for secondary sections.

### 5.4 Primary CTA Button (gradient)

```html
<button style="background:linear-gradient(to right, var(--cyan-400), var(--purple-500)); color:#000; font-weight:600; padding:1rem 2rem; border-radius:1rem; font-size:1.125rem; text-transform:uppercase; border:none; cursor:pointer; width:100%;">
  ACTION LABEL
</button>
```
On hover: lighten to `--cyan-300` → `--purple-400`.

### 5.5 Secondary / Reset Button (outline)

```html
<button style="border:1px solid var(--slate-400); color:#fff; padding:1rem 2rem; border-radius:1rem; font-size:1.125rem; text-transform:uppercase; background:none; cursor:pointer;">
  RESET
</button>
```
On hover: border and text change to `--red-400`.

### 5.6 Form Inputs & Selects

```html
<label style="display:block; font-size:0.875rem; color:var(--slate-400); margin-bottom:0.5rem;">FIELD LABEL</label>
<input type="text"
  style="width:100%; background:var(--slate-900); border:1px solid rgba(255,255,255,0.20); border-radius:1rem; padding:1rem 1.5rem; color:#fff; font-size:1rem; outline:none;"
  placeholder="Placeholder text…">
```
On focus: border-color → `--cyan-400`.
Placeholder text colour: `rgba(148,163,184,0.75)`.

### 5.7 File Upload Drop Zone

```html
<div style="border:2px dashed rgba(148,163,184,0.50); border-radius:1.5rem; padding:2.5rem; text-align:center; cursor:pointer;">
  <div style="font-size:3.75rem; margin-bottom:1rem;">📁</div>
  <p style="font-size:1.25rem; font-weight:600;">Upload Label</p>
  <p style="color:var(--slate-400); font-size:0.875rem; margin-top:0.25rem;">Accepted formats</p>
</div>
```
On hover: border-color → `--cyan-400` (or `--purple-400` for secondary upload zones).

### 5.8 Status / Result Badges

```html
<!-- Valid -->
<span style="color:var(--emerald-400);">VALID</span>

<!-- Invalid -->
<span style="color:var(--red-400);">INVALID</span>

<!-- Warning / Not validated -->
<span style="color:var(--amber-400);">NOT VALIDATED</span>
```

For result panels (background tint):
- Valid panel: `background:rgba(16,185,129,0.10); border:1px solid rgba(52,211,153,0.30);`
- Invalid panel: `background:rgba(239,68,68,0.10); border:1px solid rgba(248,113,113,0.30);`
- Warning panel: `background:rgba(245,158,11,0.10); border:1px solid rgba(251,191,36,0.30);`

### 5.9 Stat Cards (large numbers)

```html
<div class="glass" style="border:1px solid rgba(52,211,153,0.30); text-align:center; padding:2rem;">
  <p style="color:var(--emerald-400); font-size:0.875rem; text-transform:uppercase; letter-spacing:0.1em;">LABEL</p>
  <p class="title-font" style="font-size:3.75rem; color:var(--emerald-400); margin-top:0.5rem;">0</p>
</div>
```

### 5.10 Progress Bar

```html
<div style="width:100%; background:var(--slate-800); border-radius:9999px; overflow:hidden; height:0.5rem;">
  <div id="progress-fill" style="height:100%; background:linear-gradient(to right, var(--cyan-400), var(--purple-500)); width:0%; transition:width 0.3s ease;"></div>
</div>
```

### 5.11 Data Table

```html
<div style="overflow:auto; max-height:24rem; border-radius:1rem; border:1px solid rgba(255,255,255,0.10);">
  <table style="width:100%; border-collapse:collapse; font-size:0.875rem;">
    <thead style="background:var(--slate-800); position:sticky; top:0;">
      <tr>
        <th style="padding:0.75rem 1rem; text-align:left; color:var(--slate-400); font-weight:500; text-transform:uppercase; letter-spacing:0.05em; font-size:0.75rem;">COL HEADER</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-top:1px solid rgba(255,255,255,0.05);">
        <td style="padding:0.75rem 1rem; color:var(--slate-300);">Cell value</td>
      </tr>
    </tbody>
  </table>
</div>
```

### 5.12 Animated Pulse Dot (status indicator)

```html
<div style="width:0.5rem; height:0.5rem; background:var(--emerald-400); border-radius:50%; animation:pulse 2s cubic-bezier(0.4,0,0.6,1) infinite;"></div>
```

```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.5; }
}
```

---

## 6. Footer

```html
<footer style="border-top:1px solid rgba(255,255,255,0.10); background:rgba(0,0,0,0.70); padding:1.5rem; text-align:center; color:var(--slate-400); font-size:0.875rem;">
  TheFaminator 2.0
</footer>
```

---

## 7. Delivery Format

- **Single self-contained `.html` file** — all CSS and JS inline, no build step.
- No external CSS frameworks. Utility classes (if used) must be defined inline in a `<style>` block.
- Google Fonts loaded via `<link>` tags in `<head>` (requires internet; if offline mode needed, fall back to `system-ui` and `monospace`).
- JavaScript: vanilla JS only, no frameworks. External libraries (e.g. SheetJS for Excel) may be loaded via CDN `<script>` tag.
- All files must run by double-clicking in a modern browser (Chrome, Firefox, Edge).

---

## 8. Quick-Start Template

Copy this shell for every new tool. Replace `[TOOL NAME]` and add the tool's content inside `<main>`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>THEFAMINATOR'S [TOOL NAME]</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
  <style>
    /* === THEFAMINATOR'S DESIGN SYSTEM — paste full CSS here === */
    :root { /* colour variables from Section 2 */ }
    body { margin:0; font-family:'Inter',system-ui,sans-serif; background:#05050f; color:#fff; min-height:100vh; overflow-x:hidden; }
    .title-font { font-family:'Space Grotesk',sans-serif; }
    .glass { background:rgba(15,23,42,0.75); backdrop-filter:blur(20px); border-radius:1.5rem; border:1px solid rgba(255,255,255,0.10); }
    .neon-cyan { box-shadow:0 0 25px -5px #00f7ff, 0 0 10px -2px #00f7ff; }
    @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.5} }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header style="border-bottom:1px solid rgba(255,255,255,0.10);background:rgba(0,0,0,0.70);backdrop-filter:blur(24px);position:sticky;top:0;z-index:50;">
    <div style="max-width:1536px;margin:0 auto;padding:1.5rem 2.5rem;display:flex;align-items:center;justify-content:space-between;">
      <div>
        <h1 class="title-font" style="font-size:2.25rem;letter-spacing:-2px;text-shadow:0 0 20px #00f7ff;color:#fff;margin:0;">THEFAMINATOR'S</h1>
        <p style="color:#22d3ee;font-size:1.25rem;letter-spacing:0.1em;margin-top:-0.5rem;">[TOOL NAME IN CAPS]</p>
      </div>
      <!-- Optional right-side badge -->
    </div>
  </header>

  <!-- MAIN CONTENT -->
  <main style="max-width:1536px;margin:0 auto;padding:2.5rem;display:flex;flex-direction:column;gap:3rem;">
    <!-- Tool sections go here -->
  </main>

  <!-- FOOTER -->
  <footer style="border-top:1px solid rgba(255,255,255,0.10);background:rgba(0,0,0,0.70);padding:1.5rem;text-align:center;color:#94a3b8;font-size:0.875rem;">
    TheFaminator 2.0
  </footer>

</body>
</html>
```
