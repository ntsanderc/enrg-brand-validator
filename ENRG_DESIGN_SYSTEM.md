# ENRG Design System Quick Reference

> **Copy this file into every new ENRG project** for instant access to brand guidelines.

*Last Updated: January 2026*

---

## 📋 COMPLETE CSS VARIABLES (Copy This Entire Block)

```css
/**
 * ENRG Design System Tokens
 * Version: 1.0 | January 2026
 * Source: https://github.com/ntsanderc/enrg-brand-validator
 *
 * Copy this entire :root block into your project's main CSS file.
 */

:root {
  /* ═══════════════════════════════════════════════════════════════
     PURPLE SCALE - Primary Brand Color
     Two-Purple System: 500 = Hero (logos), 800 = Depth (UI)
     ═══════════════════════════════════════════════════════════════ */
  --purple-950: #1E005E;
  --purple-900: #240072;
  --purple-800: #290080;  /* Depth - dark backgrounds, buttons */
  --purple-700: #3604A2;
  --purple-600: #4A10C4;
  --purple-500: #6021E6;  /* Hero - logos, headlines, marketing */
  --purple-400: #7534FF;
  --purple-300: #9461FF;
  --purple-200: #B38FFF;  /* Dark mode primary */
  --purple-100: #D2BDFF;
  --purple-50:  #F0EAFE;

  /* ═══════════════════════════════════════════════════════════════
     ORANGE SCALE - Signature Accent (Use Sparingly!)
     Reserved for: The dot, high-emphasis CTAs, "New" badges
     ═══════════════════════════════════════════════════════════════ */
  --orange-950: #551000;
  --orange-900: #771902;
  --orange-800: #993008;
  --orange-700: #BB4110;
  --orange-600: #DD541A;
  --orange-500: #FF6039;  /* Brand orange - the dot */
  --orange-400: #FF8060;
  --orange-300: #FF9F87;
  --orange-200: #FFBFAE;
  --orange-100: #FFDFD5;
  --orange-50:  #FEEEEA;

  /* ═══════════════════════════════════════════════════════════════
     NEUTRAL GRAYS - Foundation (90% of your UI)
     ═══════════════════════════════════════════════════════════════ */
  --white:     #FFFFFF;
  --gray-50:   #F9FAFB;
  --gray-100:  #F3F4F6;
  --gray-200:  #E5E7EB;
  --gray-300:  #D1D5DB;
  --gray-400:  #9CA3AF;
  --gray-500:  #6B7280;
  --gray-600:  #4B5563;
  --gray-700:  #374151;
  --gray-800:  #1F2937;
  --gray-900:  #111827;
  --black:     #111111;  /* Softer than pure black */

  /* ═══════════════════════════════════════════════════════════════
     SEMANTIC COLORS
     ═══════════════════════════════════════════════════════════════ */
  --success:        #10B981;
  --success-light:  #D1FAE5;
  --success-dark:   #34D399;
  --error:          #F43F5E;
  --error-light:    #FFE4E6;
  --error-dark:     #FB7185;
  --warning:        #FF6039;  /* Uses brand orange */
  --warning-light:  #FFEDD5;

  /* ═══════════════════════════════════════════════════════════════
     SEMANTIC ALIASES (Theme-Aware)
     ═══════════════════════════════════════════════════════════════ */
  --color-primary:    var(--purple-800);
  --color-primary-hover: var(--purple-700);
  --color-accent:     var(--orange-500);
  --color-text:       var(--black);
  --color-text-secondary: var(--gray-700);
  --color-text-muted: var(--gray-500);
  --color-border:     var(--gray-200);
  --color-bg:         var(--white);
  --color-bg-elevated: var(--gray-50);
  --color-bg-surface: var(--white);

  /* ═══════════════════════════════════════════════════════════════
     TYPOGRAPHY - Type Scale
     ═══════════════════════════════════════════════════════════════ */
  --text-xs:   12px;  /* Captions, metadata */
  --text-sm:   13px;  /* Secondary text, labels */
  --text-base: 15px;  /* Body text */
  --text-md:   17px;  /* Subheadings */
  --text-lg:   20px;  /* Section titles */
  --text-xl:   24px;  /* Page titles */
  --text-2xl:  32px;  /* Hero headings */
  --text-3xl:  40px;  /* Display headings */

  /* ═══════════════════════════════════════════════════════════════
     TYPOGRAPHY - Font Weights
     ═══════════════════════════════════════════════════════════════ */
  --font-light:    300;
  --font-regular:  400;
  --font-medium:   500;
  --font-semibold: 600;
  --font-bold:     700;

  /* ═══════════════════════════════════════════════════════════════
     TYPOGRAPHY - Line Heights
     ═══════════════════════════════════════════════════════════════ */
  --leading-tight:  1.2;   /* Headings */
  --leading-snug:   1.3;   /* Subheadings */
  --leading-normal: 1.5;   /* Body text */
  --leading-relaxed: 1.6;  /* Long-form content */
  --leading-loose:  1.8;   /* Spacious text */

  /* ═══════════════════════════════════════════════════════════════
     TYPOGRAPHY - Font Stacks
     ═══════════════════════════════════════════════════════════════ */
  --font-brand: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-tools: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono:  'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace;

  /* ═══════════════════════════════════════════════════════════════
     SPACING - 8px Base Grid
     ═══════════════════════════════════════════════════════════════ */
  --space-0:   0;
  --space-px:  1px;
  --space-0-5: 2px;
  --space-1:   4px;
  --space-2:   8px;
  --space-3:   12px;
  --space-4:   16px;
  --space-5:   20px;
  --space-6:   24px;
  --space-8:   32px;
  --space-10:  40px;
  --space-12:  48px;
  --space-16:  64px;
  --space-20:  80px;
  --space-24:  96px;
  --space-32:  128px;

  /* ═══════════════════════════════════════════════════════════════
     BORDER RADII
     ═══════════════════════════════════════════════════════════════ */
  --radius-none: 0;
  --radius-sm:   4px;
  --radius-md:   6px;
  --radius-lg:   8px;
  --radius-xl:   12px;
  --radius-2xl:  16px;
  --radius-full: 9999px;
  --radius-pill: 100px;

  /* ═══════════════════════════════════════════════════════════════
     SHADOWS - Semantic Elevation
     ═══════════════════════════════════════════════════════════════ */
  --shadow-xs:      0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-sm:      0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  --shadow-md:      0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg:      0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl:      0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-2xl:     0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --shadow-card:    0 1px 3px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04);
  --shadow-dropdown: 0 8px 24px rgba(0, 0, 0, 0.12);
  --shadow-modal:   0 24px 80px rgba(0, 0, 0, 0.3);

  /* ═══════════════════════════════════════════════════════════════
     TRANSITIONS - Motion Timing
     ═══════════════════════════════════════════════════════════════ */
  --duration-instant: 0ms;
  --duration-fast:    100ms;
  --duration-normal:  200ms;
  --duration-slow:    300ms;
  --duration-slower:  500ms;
  --ease-linear:      linear;
  --ease-in:          cubic-bezier(0.4, 0, 1, 1);
  --ease-out:         cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out:      cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce:      cubic-bezier(0.68, -0.55, 0.265, 1.55);

  /* ═══════════════════════════════════════════════════════════════
     BREAKPOINTS (for reference - use in @media queries)
     ═══════════════════════════════════════════════════════════════ */
  --breakpoint-sm:  640px;
  --breakpoint-md:  768px;
  --breakpoint-lg:  1024px;
  --breakpoint-xl:  1280px;
  --breakpoint-2xl: 1536px;

  /* ═══════════════════════════════════════════════════════════════
     Z-INDEX SCALE
     ═══════════════════════════════════════════════════════════════ */
  --z-below:    -1;
  --z-base:     0;
  --z-raised:   10;
  --z-dropdown: 100;
  --z-sticky:   200;
  --z-overlay:  300;
  --z-modal:    400;
  --z-popover:  500;
  --z-toast:    600;
  --z-tooltip:  700;

  /* ═══════════════════════════════════════════════════════════════
     LAYOUT DIMENSIONS
     ═══════════════════════════════════════════════════════════════ */
  --header-height:   56px;
  --toolbar-height:  56px;
  --sidebar-width:   200px;
  --content-max:     1200px;
  --content-narrow:  800px;
  --content-wide:    1400px;
}

/* ═══════════════════════════════════════════════════════════════════
   DARK MODE OVERRIDES
   Add [data-theme="dark"] to <html> or use @media (prefers-color-scheme: dark)
   ═══════════════════════════════════════════════════════════════════ */
:root[data-theme="dark"],
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --color-primary:    var(--purple-200);
    --color-text:       #F0F0F0;
    --color-text-secondary: #CCCCCC;
    --color-text-muted: #888888;
    --color-border:     #333333;
    --color-bg:         #0F0F0F;
    --color-bg-elevated: #252525;
    --color-bg-surface: #1A1A1A;

    /* Adjusted semantic colors for dark backgrounds */
    --success:      #34D399;
    --success-light: #064E3B;
    --error:        #FB7185;
    --error-light:  #4C1D24;

    /* Enhanced shadows for dark mode */
    --shadow-card:    0 1px 3px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(0, 0, 0, 0.25);
    --shadow-dropdown: 0 8px 24px rgba(0, 0, 0, 0.5);
    --shadow-modal:   0 24px 80px rgba(0, 0, 0, 0.6);
  }
}

/* ═══════════════════════════════════════════════════════════════════
   UTILITY CLASSES (Optional - Include if using utility-first approach)
   ═══════════════════════════════════════════════════════════════════ */

/* Typography */
.font-brand { font-family: var(--font-brand); }
.font-tools { font-family: var(--font-tools); }
.font-mono  { font-family: var(--font-mono); }

/* Text Colors */
.text-primary { color: var(--color-primary); }
.text-accent  { color: var(--color-accent); }
.text-muted   { color: var(--color-text-muted); }

/* Backgrounds */
.bg-primary   { background: var(--color-primary); }
.bg-accent    { background: var(--color-accent); }
.bg-elevated  { background: var(--color-bg-elevated); }
.bg-surface   { background: var(--color-bg-surface); }

/* Focus State (Accessibility) */
.focus-ring:focus {
  outline: 2px solid var(--purple-500);
  outline-offset: 2px;
}
```

**Google Fonts Import:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

---

## 🎯 Core Brand Philosophy

**Premium without pretension. Confidence without arrogance.**

### The 90/10 Rule
- **90% neutral** (whites, grays) - Foundation
- **10% accent** (purple, rare orange) - Punctuation

### Seven Design Principles

1. **Neutral-forward design** — 90% white and gray. Purple appears sparingly.
2. **White space is a feature** — Generous padding. Cramped layouts feel cheap.
3. **One accent rules** — Purple dominates. Orange appears rarely.
4. **Obvious > clever** — Clear labels, familiar patterns.
5. **Progressive disclosure** — Start simple, reveal on demand.
6. **Dark mode is first-class** — Both themes are intentional.
7. **Accessible by default** — Minimum 4.5:1 contrast ratio.

---

## 🎨 Colors

### Primary Purples (The Two-Purple System)

| Color | Hex | Role |
|-------|-----|------|
| **Purple 500** (Hero) | `#6021E6` | Logos, headlines, marketing CTAs, branded moments |
| **Purple 800** (Depth) | `#290080` | Dark backgrounds, UI surfaces, buttons in light mode |

**Rule of thumb:** Purple 500 for brand expression, Purple 800 for UI depth.

### Purple Scale (Full Figma Palette)

```css
--purple-950: #1E005E;  /* Deepest purple, near-black */
--purple-900: #240072;  /* Deep backgrounds */
--purple-800: #290080;  /* Depth purple - dark backgrounds, UI */
--purple-700: #3604A2;  /* Hover states on dark surfaces */
--purple-600: #4A10C4;  /* Active states */
--purple-500: #6021E6;  /* Hero purple - logos, headlines */
--purple-400: #7534FF;  /* Vibrant highlights (use sparingly) */
--purple-300: #9461FF;  /* Soft purple accents */
--purple-200: #B38FFF;  /* Light highlights, dark mode buttons */
--purple-100: #D2BDFF;  /* Very light backgrounds */
--purple-50:  #F0EAFE;  /* Subtle backgrounds, hover states */
```

### Orange Scale (Full Figma Palette)

```css
--orange-950: #551000;  /* Deepest orange */
--orange-900: #771902;  /* Deep orange accents */
--orange-800: #993008;  /* Dark orange */
--orange-700: #BB4110;  /* Medium-dark orange */
--orange-600: #DD541A;  /* Active orange states */
--orange-500: #FF6039;  /* Brand orange - the dot, special CTAs */
--orange-400: #FF8060;  /* Light orange accents */
--orange-300: #FF9F87;  /* Soft orange */
--orange-200: #FFBFAE;  /* Very light orange */
--orange-100: #FFDFD5;  /* Subtle orange tint */
--orange-50:  #FEEEEA;  /* Lightest orange background */
```

**Orange usage:** 1-3 times per page maximum
- High-emphasis CTAs (Apply Now, Schedule Call)
- The signature dot element
- "New" badges, special moments
- **NOT for:** standard buttons, links, navigation (use purple)

### Neutral Grays (Foundation)

```css
--white:   #FFFFFF;  /* Page backgrounds, cards */
--gray-50:  #F9FAFB;  /* Subtle backgrounds, hover */
--gray-100: #F3F4F6;  /* Secondary backgrounds */
--gray-200: #E5E7EB;  /* Light borders, dividers */
--gray-300: #D1D5DB;  /* Border emphasis */
--gray-400: #9CA3AF;  /* Disabled text */
--gray-500: #6B7280;  /* Muted text, placeholders */
--gray-600: #4B5563;  /* Tertiary text */
--gray-700: #374151;  /* Secondary text */
--gray-900: #111111;  /* Primary text, headlines */
```

### Semantic Colors

```css
--success-light: #10B981;
--success-dark:  #34D399;
--error-light:   #F43F5E;
--error-dark:    #FB7185;
```

---

## 🔤 Typography

### Two Typefaces

| Typeface | Context | CSS |
|----------|---------|-----|
| **Plus Jakarta Sans** | Brand materials, marketing, website | `font-family: 'Plus Jakarta Sans', sans-serif;` |
| **Inter** | Internal tools, dashboards, documentation | `font-family: 'Inter', sans-serif;` |

### Type Scale

```css
--text-xs:   12px;  /* line-height: 1.5 */ /* Captions, metadata */
--text-sm:   13px;  /* line-height: 1.5 */ /* Secondary text */
--text-base: 15px;  /* line-height: 1.5 */ /* Body text */
--text-md:   17px;  /* line-height: 1.4 */ /* Subheadings */
--text-lg:   20px;  /* line-height: 1.3 */ /* Section titles */
--text-xl:   24px;  /* line-height: 1.2 */ /* Page titles */
```

### Font Weights

```css
--font-light:    300;  /* Body text, captions */
--font-regular:  400;  /* Body text */
--font-medium:   500;  /* Subtle emphasis */
--font-semibold: 600;  /* Headings, buttons */
--font-bold:     700;  /* Strong emphasis */
```

---

## 📐 Spacing

Use 8px base unit (0.5rem increments):

```css
--space-1:  4px;   /* 0.25rem */
--space-2:  8px;   /* 0.5rem */
--space-3:  12px;  /* 0.75rem */
--space-4:  16px;  /* 1rem */
--space-6:  24px;  /* 1.5rem */
--space-8:  32px;  /* 2rem */
--space-12: 48px;  /* 3rem */
--space-16: 64px;  /* 4rem */
--space-24: 96px;  /* 6rem */
```

**White space philosophy:** More is more. Generous padding = premium feel.

---

## 🎭 Component Patterns

### Buttons

**Primary (Purple):**
```css
background: #290080;  /* Purple 800 in light mode */
color: #FFFFFF;
padding: 12px 24px;
border-radius: 8px;
font-weight: 600;
```

**Primary (Orange) - High Emphasis Only:**
```css
background: #FF6039;  /* Use sparingly! */
color: #FFFFFF;
```

**Secondary:**
```css
background: transparent;
border: 1px solid #E5E7EB;  /* Gray 200 */
color: #111111;
```

### Cards

```css
background: #FFFFFF;
border: 1px solid #E5E7EB;  /* Gray 200 */
border-radius: 12px;
padding: 24px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
```

### Focus States

```css
outline: 2px solid #6021E6;  /* Purple 500 */
outline-offset: 2px;
```

### Black Bar Callouts (Figma Treatment)

Bold callout treatment for key statistics and statements:

```css
.callout-block {
  display: inline-block;
  background: #111111;
  color: #FFFFFF;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.4;
  padding: 1rem 1.5rem;
}
```

**Use for:** Key statistics, brand statements, pull quotes
**Don't use for:** Body text, multiple callouts per page

---

## 🎨 Iconography

### Brand Icons: iMaterial Icons Light

- **Source:** [UI8 - iMaterial Pro Icons](https://ui8.net/mosquitoes/products/imaterial-pro-icons)
- **Style:** Sleek, minimal, light-weight strokes
- **Use for:** Website, marketing materials, presentations

### Tool Icons: Inline SVG + Unicode

For internal tools, use custom SVG or Unicode symbols:
- ✓ checkmark (`&#10003;`)
- • bullet (`&#8226;`)
- → arrow (`&#8594;`)

### Never Use: Emojis

Emojis are **banned** across all ENRG materials. Use SVG icons or Unicode instead.

---

## 🚫 Brand Violations to Avoid

### Never Do:
1. ❌ Use emojis in UI or marketing copy
2. ❌ Use aggressive language ("dominate," "crush," "win")
3. ❌ Use corporate speak ("synergy," "paradigm shift")
4. ❌ Mix multiple accent colors on one screen
5. ❌ Use purple backgrounds with purple text (contrast!)
6. ❌ Cramped layouts with insufficient white space
7. ❌ Mystery meat navigation (unclear labels)
8. ❌ ALL CAPS FOR LONG BODY TEXT
9. ❌ Orange buttons everywhere (purple is primary!)
10. ❌ Gradient backgrounds or decorative flourishes

### Always Do:
1. ✅ Start with neutral grays, add purple sparingly
2. ✅ Use clear, obvious labels
3. ✅ Provide generous white space
4. ✅ Ensure 4.5:1 contrast ratio minimum
5. ✅ Test in both light and dark modes
6. ✅ Use Inter for tools, Plus Jakarta Sans for brand
7. ✅ Keep orange usage to 1-3 instances per page
8. ✅ Follow the 90/10 rule (neutral/accent)

---

## 🎯 Quick Decision Tree

### "What color should this be?"

1. **Is it page background?** → White (`#FFFFFF`) or Gray 50 (`#F9FAFB`)
2. **Is it body text?** → Gray 900 (`#111111`)
3. **Is it a primary button?** → Purple 800 (`#290080`)
4. **Is it a super important CTA?** → Consider orange (`#FF6039`), but purple is usually better
5. **Is it a link?** → Purple 800 (`#290080`)
6. **Is it a border?** → Gray 200 (`#E5E7EB`)
7. **Is it a logo or headline?** → Purple 500 (`#6021E6`)

### "What font should I use?"

- **Marketing website?** → Plus Jakarta Sans
- **Internal tool/dashboard?** → Inter
- **Documentation?** → Inter

### "How much spacing?"

- **Between sections?** → 48px or more (`--space-12`)
- **Between cards?** → 24px (`--space-6`)
- **Inside cards?** → 24px padding (`--space-6`)
- **Between form fields?** → 16px (`--space-4`)

---

## 📱 Responsive Breakpoints

```css
--mobile:  640px;   /* sm */
--tablet:  768px;   /* md */
--desktop: 1024px;  /* lg */
--wide:    1280px;  /* xl */
```

**Mobile-first approach:** Start with mobile layout, enhance for larger screens.

---

## ♿ Accessibility Requirements

1. **Color contrast:** Minimum 4.5:1 for body text, 3:1 for large text (18px+)
2. **Focus indicators:** Always visible, 2px outline with offset
3. **Keyboard navigation:** All interactive elements must be keyboard accessible
4. **Alt text:** All images need descriptive alt text
5. **Form labels:** Every input needs a visible label (no placeholder-only)
6. **Semantic HTML:** Use proper heading hierarchy (h1 → h2 → h3)

---

## 🔗 Full Documentation

For complete details, see the brand validator:
- **GitHub:** https://github.com/ntsanderc/enrg-brand-validator
- **Web App:** https://script.google.com/a/macros/enrg.realty/s/AKfycbyvK0IyB9xGbn2eAKl1-ZiAIoYUB6K_fmRAmXt_GfuHOlrXM2aS8S82ktYYZVlMzi838w/exec
- **Figma:** [ENRG Brand Guidelines](https://www.figma.com/design/CtHUpGbmVTPrCzPjMilArK/ENRG---Brand-Guidelines)

Individual docs:
- [Brand Philosophy](docs/brand/01-philosophy.md)
- [Tone and Voice](docs/brand/02-tone-and-voice.md)
- [Logo System](docs/brand/03-logo.md)
- [Colors](docs/brand/04-colors.md)
- [Typography](docs/brand/05-typography.md)
- [Design System](docs/brand/07-design-system.md)
- [Applications](docs/brand/08-applications.md)
- [Treatments](docs/brand/14-treatments.md) — Visual mockups from Figma
- [Iconography](docs/brand/15-iconography.md) — iMaterial Icons Light

---

*ENRG.realty — Boutique support. Virtual freedom. National power.*
