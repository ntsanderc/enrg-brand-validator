# ENRG Design System

> **Audience:** Designers, developers, and anyone building ENRG brand assets or internal tools.

The complete visual language for ENRG brand assets and internal tools.

*Last Updated: January 2026*

---

## Design Philosophy

The Discovery Guide embodies **expensive simplicity** — a tool that feels premium through restraint, not decoration.

### Core Principles

1. **Neutral-forward design** — 90% of the interface is white and gray. Purple appears sparingly for emphasis, making it truly pop when it does appear.

2. **White space is a feature** — Generous padding lets elements breathe. Cramped layouts feel cheap.

3. **One accent rules** — Purple dominates interactive elements. Orange appears rarely for special moments.

4. **Obvious > clever** — Clear labels, familiar patterns. No mystery meat navigation.

5. **Progressive disclosure** — Start simple, reveal complexity on demand.

6. **Dark mode is first-class** — Both themes are intentional, not afterthoughts.

7. **Accessible by default** — Minimum 4.5:1 contrast ratio for all text.

### Color Philosophy

ENRG uses a **neutral-heavy palette** where whites and grays dominate the canvas:

- **Whites and grays** form the foundation (page backgrounds, cards, text)
- **Purple 500** (#6021E6) is the hero purple — logos, headlines, marketing CTAs, branded moments
- **Purple 800** (#290080) provides depth — dark backgrounds, overlays, UI surfaces
- **Orange** appears rarely as a signature element — the dot, high-emphasis CTAs, special badges

This approach ensures that when color does appear, it carries meaning and draws attention intentionally.

---

## Logo Usage

### The Complete Logo System

ENRG has two logos and three wordmark variants:

| Asset | File Pattern | Description | Use Case |
|-------|--------------|-------------|----------|
| **ENRG Logo** | `primary_logo-*` | Stacked E N R G in square | Socials, profile pics, primary brand mark |
| **ENRG Symbol** | `secondary_logo-*` | E bars with dot | Signs, design accents, geometric patterns |
| **Wordmark (Full)** | `wordmark-*` | ENRG.realty with dot | Primary text identity, formal usage |
| **Wordmark (Short)** | `short_wordmark-*` | ENRG realty, no dot | When dot feels cluttered |
| **Wordmark (Tiny)** | `tiny_wordmark-*` | Just ENRG | Minimal space, stacked layouts |

### Color Options

| Asset Color | Background | Context |
|-------------|------------|---------|
| **Black** | White | Primary usage |
| **Black** | Transparent | For overlays on light imagery |
| **White** | Black | Dark backgrounds |
| **White** | Purple (`#6021E6`) | Official logo purple background |
| **White** | Transparent | For overlays on dark imagery |

> **Logo Purple:** The official purple for logo backgrounds is Purple 500 (`#6021E6`). This is the hero purple from the original brand guidelines.

### Minimum Sizes

| Asset | Digital | Print |
|-------|---------|-------|
| ENRG Logo | 60px height | 30mm |
| ENRG Symbol | 80px width | 8mm |
| Wordmark (Full) | 30px height | 15mm |
| Wordmark (Short) | 30px height | 15mm |
| Wordmark (Tiny) | 20px height | 10mm |

### Logo Typography

The "realty" portion of the wordmarks uses **Helvetica Neue LT Std**.

### Logo Assets

All logo files are stored in `assets/logos/` with corresponding Google Drive URLs.

**Asset Inventory:**

| Asset | File Pattern | Styles | Colors Available |
|-------|--------------|--------|------------------|
| **ENRG Logo** | `primary_logo-*` | Square, Square Framed | Black Transparent, White Transparent |
| **ENRG Symbol** | `secondary_logo-*` | Standard | Black Transparent, White Transparent |
| **Wordmark (Full)** | `wordmark-*` | Horizontal, Stacked | Black on White, White on Black, White on Purple, Black Transparent, White Transparent |
| **Wordmark (Short)** | `short_wordmark-*` | Horizontal | Black Transparent, White Transparent |
| **Wordmark (Tiny)** | `tiny_wordmark-*` | Horizontal | Black Transparent, White Transparent |

**Naming Convention:** `{type}-{color}-{style}-{size}.png`

Examples:
- `primary_logo-black_transparent-square-2x.png`
- `secondary_logo-white_transparent-1x.png`
- `wordmark-white_on_purple-horizontal-3x.png`
- `short_wordmark-black_transparent-horizontal-1x.png`
- `tiny_wordmark-white_transparent-horizontal-2x.png`

**Source Folder:** [Google Drive - ENRG Logos](https://drive.google.com/open?id=1ujg2TxukS7IzIfpOcedCLovZ-wDPnj9J)

---

## Color Palette

### The Two-Purple System

ENRG uses two complementary purples:

| Purple | Hex | Role |
|--------|-----|------|
| **Purple 500** | `#6021E6` | Hero purple — logos, headlines, marketing CTAs, branded moments |
| **Purple 800** | `#290080` | Depth purple — dark backgrounds, overlays, UI depth |

Purple 500 is the original PDF brand purple — vibrant, energetic, distinctive. Purple 800 provides premium depth for dark surfaces. The two work together: 500 for vibrancy, 800 for sophistication.

### Which Purple When?

| Context | Hex | When to Use |
|---------|-----|-------------|
| **Hero Moments** | `#6021E6` (Purple 500) | Logos, headlines, marketing CTAs, branded callouts |
| **UI Depth** | `#290080` (Purple 800) | Dark backgrounds, overlays, deep surfaces |
| **UI Primary (Light)** | `#290080` (Purple 800) | Buttons, links, focus states in light mode |
| **UI Primary (Dark)** | `#B38FFF` (Purple 200) | Buttons, links, focus states in dark mode |
| **Logo Background** | `#6021E6` (Purple 500) | Logo lockups on purple backgrounds |
| **Print Primary** | `#6021E6` (Purple 500) | Physical materials — matches original PDF spec |

**Rule of thumb:** Purple 500 for brand expression, Purple 800 for UI depth.

### Primary Colors

| Role | Light Mode | Dark Mode | Usage |
|------|------------|-----------|-------|
| **Hero Purple** | `#6021E6` (Purple 500) | `#6021E6` | Logos, headlines, marketing CTAs, branded moments |
| **UI Accent** | `#290080` (Purple 800) | `#B38FFF` (Purple 200) | Buttons, active states, focus rings, links |
| **Signature Orange** | `#FF6039` | `#FF6039` | The dot, high-emphasis CTAs, special badges |
| **Success** | `#10B981` | `#34D399` | Positive states, checkmarks, confirmations |
| **Error** | `#F43F5E` | `#FB7185` | Destructive actions, validation errors |

> **Color Harmony Note:** Success (`#10B981` Emerald) and Error (`#F43F5E` Rose) were chosen to harmonize with the purple/orange palette. The rose-based error complements the purple, while the emerald success provides a warm-cool balance with the orange.

### Background & Surface

| Role | Light Mode | Dark Mode | Usage |
|------|------------|-----------|-------|
| **Background** | `#FFFFFF` | `#0f0f0f` | Page background |
| **Surface** | `#FFFFFF` | `#1a1a1a` | Cards, panels, modals |
| **Surface Elevated** | `#F9FAFB` | `#252525` | Nested surfaces, hover states |
| **Surface Muted** | `#F3F4F6` | `#2a2a2a` | Disabled states, secondary panels |

### Text

| Role | Light Mode | Dark Mode | Usage |
|------|------------|-----------|-------|
| **Text Primary** | `#111111` | `#F0F0F0` | Headlines, body text |
| **Text Secondary** | `#374151` | `#CCCCCC` | Subheadings, less emphasis |
| **Text Muted** | `#6B7280` | `#888888` | Captions, placeholders, metadata |
| **Text Disabled** | `#9CA3AF` | `#555555` | Inactive elements |

### Borders

| Role | Light Mode | Dark Mode | Usage |
|------|------------|-----------|-------|
| **Border Default** | `#E5E7EB` | `#333333` | Card edges, dividers |
| **Border Subtle** | `#F3F4F6` | `#2a2a2a` | Very light separation |
| **Border Focus** | `#9D8BC7` | `#9D8BC7` | Focus rings (both themes) |

### Purple Scale

From the original **ENRG.realty Brand Guidelines**.

| Token | Hex | Usage |
|-------|-----|-------|
| `purple-900` | `#1E005E` | Near-black with purple soul, deep accents |
| `purple-800` | `#290080` | **Depth purple** — dark backgrounds, overlays, UI depth |
| `purple-700` | `#3604A2` | Hover states on dark surfaces |
| `purple-600` | `#4A10C4` | Active states |
| `purple-500` | `#6021E6` | **Hero purple** — logos, headlines, marketing CTAs, branded moments |
| `purple-400` | `#7534FF` | Primary accent (dark mode), vibrant highlights |
| `purple-300` | `#9461FF` | Soft purple accents |
| `purple-200` | `#B38FFF` | Light highlights |
| `purple-100` | `#D2BDFF` | Very light backgrounds |
| `purple-50` | `#F1EAFF` | Subtle backgrounds, hover states |

### Orange: The Signature Accent

Orange (#FF6039) serves a specific, intentional role — it's a **signature element**, not a utility color.

| Token | Hex | Usage |
|-------|-----|-------|
| `orange` | `#FF6039` | The dot, high-emphasis CTAs, special badges |
| `orange-light` | `#FFEDD5` | Light background for orange elements |

**The Orange Dot Pattern**

The dot in "ENRG.realty" is a key brand element:
- In wordmark asset files, the dot is the same color as the text (black/white)
- As a **brand accent**, the dot appears in orange (#FF6039) when used decoratively
- It signals "this is ENRG" rather than "click here"
- Purple dominates; orange punctuates

**When to use Orange:**
- The signature dot element
- High-emphasis CTAs (Apply Now, Schedule a Call)
- "New" or promotional badges
- Special moments that need to pop

**When NOT to use Orange:**
- Standard navigation buttons (use purple)
- Body text links (use purple)
- Section labels or card titles (use purple)
- General UI elements (keep them neutral)

**Target usage:** Orange should appear 1-3 times per page, maximum. If it's everywhere, it loses its signature power.

### Core Neutrals

The foundation of the ENRG palette. In a **neutral-forward design**, whites and grays dominate the canvas — they're not supporting colors, they're the primary colors. Purple is used sparingly for emphasis.

**Usage ratio:** Approximately 90% neutral, 10% accent (purple/orange).

| Token | Hex | Usage |
|-------|-----|-------|
| `white` | `#FFFFFF` | Page backgrounds, card surfaces |
| `gray-50` | `#F9FAFB` | Subtle backgrounds, hover states |
| `gray-100` | `#F3F4F6` | Secondary backgrounds |
| `gray-200` | `#E5E7EB` | Light borders, dividers |
| `gray-300` | `#D1D5DB` | Border emphasis |
| `gray-400` | `#9CA3AF` | Disabled text |
| `gray-500` | `#6B7280` | Muted text, placeholders |
| `gray-600` | `#4B5563` | Tertiary text |
| `gray-700` | `#374151` | Secondary text |
| `gray-900` | `#111111` | Primary text, headlines |
| `black` | `#111111` | Deep black (alias for gray-900) |

### Print Specifications

For physical materials requiring precise color matching:

| Color | Hex | CMYK | PMS |
|-------|-----|------|-----|
| Primary Purple | `#6021E6` | 76/80/0/0 | 2097 C |
| Depth Purple | `#290080` | 100/100/0/50 | 2685 C |
| Black | `#111111` | 75/68/67/90 | — |
| White | `#FFFFFF` | 0/0/0/0 | — |
| Orange | `#FF6039` | 0/62/78/0 | Orange 021 C |

> **Note:** Print CMYK values are approximate. Always verify with your print vendor using PMS spot colors for critical brand applications.

---

## Typography

### Font Families

ENRG uses two typefaces, each for its appropriate context:

#### Brand & Marketing: Plus Jakarta Sans

```css
font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
```

- **Source:** [Google Fonts](https://fonts.google.com/specimen/Plus+Jakarta+Sans) | [Fontshare](https://www.fontshare.com/fonts/plus-jakarta-sans)
- **Weights:** Light (300), Regular (400), Medium (500), SemiBold (600), Bold (700)
- **Use for:** Website, marketing materials, external-facing documents, presentations

#### Tools & Applications: Inter

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
```

- **Source:** [Google Fonts](https://fonts.google.com/specimen/Inter)
- **Use for:** Internal tools, Discovery Guide, validators, dashboards

Inter is the industry standard for SaaS tools — used by Linear, Notion, Figma, and Vercel. It's optimized for screens with excellent legibility at small sizes.

### Type Scale

| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `text-xs` | 12px | 1.5 (18px) | Captions, metadata, timestamps |
| `text-sm` | 13px | 1.5 (19.5px) | Secondary text, notes, hints |
| `text-base` | 15px | 1.5 (22.5px) | Body text, form inputs |
| `text-md` | 17px | 1.4 (23.8px) | Subheadings, card titles |
| `text-lg` | 20px | 1.3 (26px) | Section titles |
| `text-xl` | 24px | 1.2 (28.8px) | Page titles |

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Regular | 400 | Body text |
| Medium | 500 | Subtle emphasis, labels |
| Semibold | 600 | Headings, buttons |
| Bold | 700 | Strong emphasis |

### Text Styling

- **Uppercase labels:** `font-size: text-xs`, `font-weight: 600`, `letter-spacing: 0.5px`
- **Links:** Purple color, no underline by default, underline on hover
- **Monospace:** `'Monaco', 'Menlo', monospace` for code/JSON only

---

## Iconography

### Brand Icons: iMaterial Icons Light

The primary icon set for ENRG brand materials.

- **Style:** Sleek, minimal, light-weight strokes
- **Source:** [ui8.net/mosquitoes/products/imaterial-pro-icons](https://ui8.net/mosquitoes/products/imaterial-pro-icons)
- **Use for:** Marketing materials, website, presentations

### Tool Icons

For internal tools and validators, use:

- **Inline SVG icons** — Custom icons embedded directly in HTML
- **Unicode symbols** — For simple indicators (checkmarks, arrows, bullets)
- **No emoji** — Use icons or text symbols instead (see `.cursorrules`)

---

## Spacing

Based on an 8px grid system. Use consistently for rhythm and alignment.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Tight gaps, icon margins |
| `--space-2` | 8px | Inline spacing, small gaps |
| `--space-3` | 12px | Component internal padding |
| `--space-4` | 16px | Standard padding |
| `--space-5` | 20px | Card header padding |
| `--space-6` | 24px | Card body padding, section gaps |
| `--space-8` | 32px | Large section separators |

### Common Patterns

- **Card padding:** `--space-5` header, `--space-6` body
- **Button padding:** `--space-3` vertical, `--space-4` horizontal
- **Input padding:** `--space-3` all sides
- **Section gaps:** `--space-6` between major sections
- **Inline icon gap:** `--space-2` between icon and text

### Spacing Application Guide

**Card Padding (Responsive):**
```css
.card {
  padding: var(--space-4); /* 16px mobile */
}

@media (min-width: 768px) {
  .card {
    padding: var(--space-6); /* 24px desktop */
  }
}
```

**Section Margins:**
```css
.section {
  margin-bottom: var(--space-12); /* 48px between sections */
}

.subsection {
  margin-bottom: var(--space-8); /* 32px between subsections */
}
```

**Component Spacing:**
```css
/* Button groups */
.button-group {
  gap: var(--space-2); /* 8px between buttons */
}

/* Form fields */
.form-field {
  margin-bottom: var(--space-4); /* 16px between fields */
}

/* List items */
.list-item {
  padding: var(--space-3) 0; /* 12px vertical spacing */
}

/* Icon + text */
.icon-text {
  gap: var(--space-2); /* 8px between icon and label */
}
```

**Stack Spacing (Vertical Rhythm):**
```css
.stack > * + * {
  margin-top: var(--space-4); /* 16px default vertical rhythm */
}

.stack-tight > * + * {
  margin-top: var(--space-2); /* 8px tight spacing */
}

.stack-loose > * + * {
  margin-top: var(--space-6); /* 24px loose spacing */
}
```

---

## Border Radii

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | Tags, small chips, tooltips |
| `--radius-md` | 6px | Buttons, inputs, dropdowns |
| `--radius-lg` | 8px | Cards, panels |
| `--radius-xl` | 12px | Large panels, modals |
| `--radius-pill` | 100px | Pill buttons, badges, full-round elements |

---

## Shadows

Subtle shadows create depth without heaviness.

| Token | Light Mode | Dark Mode |
|-------|------------|-----------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | `0 1px 2px rgba(0,0,0,0.4)` |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.07)` | `0 4px 6px rgba(0,0,0,0.5)` |

**Usage:**
- Cards: `--shadow-sm`
- Dropdowns, modals: `--shadow-md`
- Dark mode shadows are stronger to maintain visibility

---

## Layout Rules

### Grid Balance

Grids must resolve to balanced rows. **Never orphan items** — a single item on the final row looks unfinished.

| Items | Columns | Result |
|-------|---------|--------|
| 4 | 2 | 2+2 |
| 6 | 3 | 3+3 or 2+2+2 |
| 10 | 5 | 5+5 |

If content count doesn't divide evenly, either adjust the column count or make the final item span full width.

### Surface Styling

**Glass effects are part of ENRG's premium aesthetic.**

Glass/translucency signals "modern, expensive, tech-forward" and is used on the public website. Apply contextually:

| Context | Treatment |
|---------|-----------|
| **Marketing/hero sections** | Glass encouraged — low density, emotional impact |
| **Navigation (sticky headers)** | Glass encouraged — subtle blur, premium feel |
| **Modals/overlays** | Glass allowed — enhances layering |
| **Data-dense interfaces** | Solid preferred — readability over aesthetics |

**Implementation:**
- Use `backdrop-filter: blur(12px)` with semi-transparent backgrounds
- Ensure text maintains 4.5:1 contrast ratio against blurred content
- Provide solid fallback for browsers without support

### Touch Targets

All interactive elements must meet minimum touch target sizes:

| Platform | Minimum Size |
|----------|-------------|
| iOS | 44×44pt |
| Android | 48×48dp |
| Web (general) | 44×44px |

Use `min-height: 44px; min-width: 44px;` on buttons and interactive elements.

---

## Layout Dimensions

| Element | Value |
|---------|-------|
| **Header Height** | 56px |
| **Toolbar Height** | 56px |
| **Sidebar Width** | 200px |
| **Main Content Max Width** | 900px |
| **Card Max Width** | 852px (900px - padding) |

---

## Component Patterns

### Buttons

**Primary Button**
- Background: `--purple` (light) / `--purple-400` (dark)
- Text: White
- Padding: `--space-3` vertical, `--space-4` horizontal
- Border radius: `--radius-md`
- Hover: `--purple-700` (light) / `--purple-300` (dark)

**Secondary Button**
- Background: White / Surface
- Border: 1px solid `--border-color`
- Text: `--gray-700`
- Hover: `--gray-50` background

**Danger Button**
- Default: Subtle gray (not red)
- Hover: Red background, white text
- Use for destructive actions only

**Icon Button**
- Size: 36px × 36px
- Background: `--gray-100` / `--gray-800`
- Border radius: `--radius-md`
- Centered icon

**Ghost Button**
- Background: `transparent`
- Border: 1px solid `--purple`
- Text: `--purple`
- Padding: `--space-3` vertical, `--space-4` horizontal
- Border radius: `--radius-md`
- Hover: `--purple-pale` background, `--purple-dark` border and text

```css
.btn-ghost {
  background: transparent;
  border: 1px solid var(--purple-primary);
  color: var(--purple-primary);
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
}
.btn-ghost:hover {
  background: var(--purple-pale);
  border-color: var(--purple-dark);
  color: var(--purple-dark);
}
```

**Disabled States**

All button variants support disabled state:

```css
.btn:disabled,
.btn[aria-disabled="true"] {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
```

- Opacity: 0.5
- Cursor: `not-allowed`
- No hover states
- `pointer-events: none` to prevent interaction

### Cards

```
┌─────────────────────────────────────┐
│ Header (--space-5 padding)          │
│ Title + subtitle + optional actions │
├─────────────────────────────────────┤
│                                     │
│ Body (--space-6 padding)            │
│                                     │
│ Content goes here                   │
│                                     │
└─────────────────────────────────────┘
```

- Background: Surface color
- Border: 1px solid `--border-color`
- Border radius: `--radius-xl`
- Shadow: `--shadow-sm`

### Tags / Chips

**Default State**
- Background: `--gray-100`
- Text: `--gray-600`
- Border: 1px solid `--gray-200`
- Border radius: `--radius-md`
- Padding: `--space-2` vertical, `--space-4` horizontal

**Selected State**
- Background: `--black`
- Text: White
- Border: `--black`

**Count Badge**
- Background: `--purple`
- Text: White
- Border radius: `--radius-pill`
- Size: 18px height, min-width 18px

### Form Inputs

- Height: 44px (for touch targets)
- Padding: `--space-3`
- Font size: `text-base`
- Border: 1px solid `--gray-200`
- Border radius: `--radius-md`
- Focus: Purple border + `0 0 0 3px rgba(139, 92, 246, 0.1)` ring

### Navigation

**Sidebar Nav Item**
- Padding: `--space-3` vertical, `--space-4` horizontal
- Border radius: `--radius-md`
- Default: `--gray-600` text
- Hover: `--gray-50` background
- Active: `--purple-light` background, `--purple` text

### Overflow Menu

For list items with secondary actions (edit, delete, resolve), use a single overflow menu instead of multiple visible icons.

```
┌─────────────────────────────────────┐
│ Item content                    [⋮] │  <- Single trigger, appears on hover
└─────────────────────────────────────┘
         ┌────────────┐
         │ Edit       │  <- Dropdown on click
         │ Delete     │
         │ Resolve    │
         └────────────┘
```

**Structure:**
- `.overflow-menu` — Container with `position: relative`
- `.overflow-trigger` — 24x24px button, `opacity: 0` until parent hover
- `.overflow-dropdown` — Positioned below trigger, hidden until `.open`

**When to use:**
- Comment/reply actions
- List item secondary actions
- Any context where 2+ actions would create visual clutter

---

## Motion and Animation

**Principle: Transitions communicate, they don't decorate.**

Animation should tell the user *what just happened* or *where to look*. If everything animates the same way, nothing communicates.

### Allowed Transitions

| Property | Duration | Use Case |
|----------|----------|----------|
| `opacity` | 0.15s | Show/hide elements (dropdowns, tooltips, overlays) |
| `transform: translateX/Y` | 0.2-0.3s | Panel slide-in, dropdown appearance |
| `background`, `color`, `border-color` | 0.15s | Hover state changes |

### Forbidden Patterns

| Pattern | Problem |
|---------|---------|
| `transform: scale()` on hover | Adds bounce without meaning |
| Staggered animations on re-render | Should only happen on initial load |
| `transition: all` | Too broad, can cause layout jank |
| Animations longer than 0.3s | Feels sluggish |

### Examples

**Good:** Panel slides in from right on open
```css
.panel { transform: translateX(100%); transition: transform 0.3s ease; }
.panel.open { transform: translateX(0); }
```

**Good:** Dropdown fades in
```css
.dropdown { opacity: 0; visibility: hidden; transition: opacity 0.15s ease; }
.dropdown.open { opacity: 1; visibility: visible; }
```

**Bad:** Button scales on hover (decorative, not communicative)
```css
/* DON'T DO THIS */
.button:hover { transform: scale(1.05); }
```

---

## Dark Mode

Dark mode uses **clean dark grays** for backgrounds. Purple is for accents only — never tint the entire interface purple.

### Implementation

Toggle via `data-theme="dark"` attribute on `<html>`:

```css
:root[data-theme="dark"] {
  --bg: #0f0f0f;
  --bg-card: #1a1a1a;
  --bg-muted: #252525;
  --text: #f0f0f0;
  --text-muted: #888888;
  --border-color: #333333;
  --purple: #7534FF;        /* Purple 400 - primary accent */
  --purple-light: #2D1548;  /* Muted purple for backgrounds */
}
```

> **Note:** Dark mode uses Purple 400 (`#7534FF`) as the primary accent, not the muted `#9D8BC7`. This maintains vibrancy and accessibility.

### Dark Mode Color Mapping

| Element | Light | Dark |
|---------|-------|------|
| Page background | `#FFFFFF` | `#0f0f0f` |
| Card background | `#FFFFFF` | `#1a1a1a` |
| Primary text | `#111111` | `#f0f0f0` |
| Muted text | `#6B7280` | `#888888` |
| Borders | `#E5E7EB` | `#333333` |
| Primary button bg | `#290080` | `#7534FF` |
| Primary button text | `#FFFFFF` | `#FFFFFF` |
| Active nav bg | `#EDE8F5` | `#2D1548` |
| Tag selected bg | `#111111` | `#f0f0f0` |
| Tag selected text | `#FFFFFF` | `#111111` |

---

## CSS Variable Reference

Complete list of CSS variables used in `Styles.html`:

```css
:root {
  /* Colors */
  --white: #ffffff;
  --black: #111111;
  
  /* Grays */
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  
  /* Purple Scale (from ENRG.realty Brand Guidelines) */
  --purple-900: #1E005E;
  --purple-800: #290080;
  --purple-700: #3604A2;
  --purple-600: #4A10C4;
  --purple-500: #6021E6;
  --purple-400: #7534FF;
  --purple-300: #9461FF;
  --purple-200: #B38FFF;
  --purple-100: #D2BDFF;
  --purple-50: #F1EAFF;
  
  /* Semantic Purple */
  --purple: #290080;  /* Purple 800 - primary accent */
  --purple-light: #F1EAFF;
  --purple-dark: #1E005E;
  
  /* Primary Aliases (maps to purple scale) */
  --primary-50: var(--purple-50);   /* Subtle backgrounds */
  --primary-100: var(--purple-100); /* Light backgrounds */
  --primary-400: var(--purple-400); /* Dark mode accent */
  --primary-600: var(--purple-600); /* Active states */
  --primary-700: var(--purple-700); /* Text on light bg */
  
  /* Orange (Secondary Accent) */
  --orange: #FF6039;
  --orange-light: #FFEDD5;
  
  /* Semantic Colors */
  --green: #059669;
  --green-light: #d1fae5;
  --orange: #FF6039;
  --orange-light: #ffedd5;
  --red: #dc2626;
  --red-light: #fee2e2;
  
  /* Theme-aware */
  --bg: var(--white);
  --bg-card: var(--white);
  --bg-muted: var(--gray-50);
  --text: var(--black);
  --text-muted: var(--gray-500);
  --border-color: var(--gray-200);
  
  /* Typography */
  --text-xs: 12px;
  --text-sm: 13px;
  --text-base: 15px;
  --text-md: 17px;
  --text-lg: 20px;
  --text-xl: 24px;
  
  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  
  /* Borders */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-pill: 100px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.07);
  
  /* Layout */
  --sidebar-width: 200px;
  --header-height: 56px;
  --toolbar-height: 56px;
}
```

---

## Brand Guide Structure

The ENRG Brand Validator follows this information architecture:

### Foundation
- **Philosophy** — Core brand beliefs and design principles
- **Tone & Voice** — How we communicate

### Identity
- **Logo** — Usage rules and variations
- **Colors** — Purple scale, neutrals, orange accent
- **Typography** — Plus Jakarta Sans (brand), Inter (tools)

### System
- **Effects** — Border radii, shadows, spacing
- **Iconography** — Icon styles and usage

### Applications (Roadmap)
- Email Signatures
- Photography & Stock
- Motion & Video
- Print Production

### Resources (Roadmap)
- Asset Library & Downloads

---

## Related Documents

- [Brand Guidelines](./brand-guidelines.md) — Official brand standards from PDF v1.0
- [Tone and Voice](./tone-and-voice.md) — Messaging patterns and vocabulary
- [Brand Resources](./brand-resources.md) — How agents access brand assets via MAXA

---

*This design system consolidates the ENRG brand guidelines, headshot system palettes ("Midnight Violet" and "Soft Lavender"), and orange accent. It serves as the single source of truth for all ENRG visual design.*
