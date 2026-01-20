# ENRG Color Palette

> **Audience:** Designers, developers, and anyone using ENRG brand colors.

*Last Updated: January 2026*

---

## Color Philosophy

ENRG uses a **neutral-heavy palette** where whites and grays dominate the canvas:

- **Whites and grays** form the foundation (page backgrounds, cards, text)
- **Purple 500** (#6021E6) is the hero purple — logos, headlines, marketing CTAs
- **Purple 800** (#290080) provides depth — dark backgrounds, UI surfaces
- **Orange** appears rarely as a signature element — the dot, special accents

**Usage ratio:** Approximately 90% neutral, 10% accent (purple/orange).

---

## The Two-Purple System

ENRG uses two complementary purples with distinct roles:

| Purple | Hex | PMS | Role |
|--------|-----|-----|------|
| **Purple 500** | #6021E6 | 2097 C | Hero purple — logos, headlines, marketing CTAs, branded moments |
| **Purple 800** | #290080 | 2685 C | Depth purple — dark backgrounds, overlays, UI surfaces |

**Rule of thumb:** Purple 500 for brand expression, Purple 800 for UI depth.

### Which Purple When?

| Context | Hex | When to Use |
|---------|-----|-------------|
| **Hero Moments** | #6021E6 (Purple 500) | Logos, headlines, marketing CTAs, branded callouts |
| **UI Depth** | #290080 (Purple 800) | Dark backgrounds, overlays, deep surfaces |
| **UI Primary (Light)** | #290080 (Purple 800) | Buttons, links, focus states in light mode |
| **UI Primary (Dark)** | #B38FFF (Purple 200) | Buttons, links, focus states in dark mode |
| **Logo Background** | #6021E6 (Purple 500) | Logo lockups on purple backgrounds |
| **Print Primary** | #6021E6 (Purple 500) | Physical materials |

---

## Primary Colors

| Color | HEX | RGB | CMYK | PMS |
|-------|-----|-----|------|-----|
| **Purple** | #6021E6 | 96 / 33 / 230 | 76 / 80 / 0 / 0 | 2097 C |
| **Black** | #111111 | 17 / 17 / 17 | 75 / 68 / 67 / 90 | — |
| **White** | #FFFFFF | 255 / 255 / 255 | 0 / 0 / 0 / 0 | — |

---

## Orange: The Signature Accent

| Color | HEX | RGB | CMYK | PMS |
|-------|-----|-----|------|-----|
| **Orange** | #FF6039 | 255 / 96 / 57 | 0 / 77 / 82 / 0 | Orange 021 C |

Orange serves a specific, intentional role — it's a **signature element**, not a utility color.

**The Orange Dot Pattern:**
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

**Target usage:** Orange should appear 1-3 times per page, maximum.

---

## Purple Scale

Complete purple palette from the ENRG.realty Brand Guidelines:

| Shade | HEX | Usage |
|-------|-----|-------|
| Purple 900 | #1E005E | Near-black with purple soul, deep accents |
| Purple 800 | #290080 | **Depth purple** — dark backgrounds, UI surfaces |
| Purple 700 | #3604A2 | Hover states on dark surfaces |
| Purple 600 | #4A10C4 | Active states |
| Purple 500 | #6021E6 | **Hero purple** — logos, headlines, marketing CTAs |
| Purple 400 | #7534FF | Vibrant highlights (use sparingly) |
| Purple 300 | #9461FF | Soft purple accents |
| Purple 200 | #B38FFF | Light highlights |
| Purple 100 | #D2BDFF | Very light backgrounds |
| Purple 50 | #F1EAFF | Subtle backgrounds, hover states |

---

## Orange Scale

| Shade | HEX |
|-------|-----|
| Orange 900 | #551100 |
| Orange 800 | #771902 |
| Orange 700 | #99270A |
| Orange 600 | #BB3716 |
| Orange 500 | #DD4A26 |
| Orange 400 | #FF6039 (Brand) |
| Orange 300 | #FF8465 |
| Orange 200 | #FFA792 |
| Orange 100 | #FFCBBE |
| Orange 50 | #FFEFEB |

---

## Neutral Grays

The foundation of the ENRG palette. In a **neutral-forward design**, whites and grays are the primary colors.

| Shade | HEX | Usage |
|-------|-----|-------|
| White | #FFFFFF | Page backgrounds, card surfaces |
| Gray 50 | #F9FAFB | Subtle backgrounds, hover states |
| Gray 100 | #F3F4F6 | Secondary backgrounds |
| Gray 200 | #E5E7EB | Light borders, dividers |
| Gray 300 | #D1D5DB | Border emphasis |
| Gray 400 | #9CA3AF | Disabled text |
| Gray 500 | #6B7280 | Muted text, placeholders |
| Gray 600 | #4B5563 | Tertiary text |
| Gray 700 | #374151 | Secondary text |
| Gray 900 | #111111 | Primary text, headlines |

---

## Semantic Colors

| Role | Light Mode | Dark Mode | Usage |
|------|------------|-----------|-------|
| **Success** | #10B981 | #34D399 | Positive states, checkmarks, confirmations |
| **Error** | #F43F5E | #FB7185 | Destructive actions, validation errors |

---

## Print Specifications

For physical materials requiring precise color matching:

| Color | Hex | CMYK | PMS |
|-------|-----|------|-----|
| Primary Purple | #6021E6 | 76/80/0/0 | 2097 C |
| Depth Purple | #290080 | 100/100/0/50 | 2685 C |
| Black | #111111 | 75/68/67/90 | — |
| White | #FFFFFF | 0/0/0/0 | — |
| Orange | #FF6039 | 0/62/78/0 | Orange 021 C |

> **Note:** Print CMYK values are approximate. Always verify with your print vendor using PMS spot colors for critical brand applications.

---

## Gradients: Sparing Use

Gradients are permitted but must be used sparingly. They add depth and premium feel to hero moments — not everyday containers.

### When to Use

- Hero banners and brand promise statements
- High-impact containers needing visual weight
- Depth elements requiring premium feel

### Never Use

- Body content areas or standard cards
- Navigation elements or form inputs
- Rainbow, multi-hue, or distracting patterns

### Approved Gradient Recipes

**Primary Hero Gradient:**
```css
background: linear-gradient(135deg, #290080 0%, #4A1D6A 50%, #2D1040 100%);
```
Use for: Marketing hero sections, branded headers

**Subtle Depth Overlay:**
```css
background: #6021E6;
position: relative;
```
```css
/* Add as pseudo-element */
background: radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.08) 0%, transparent 50%);
```
Use for: Adding dimension to purple surfaces

**Rule:** Gradients must be monochromatic (purple-to-deeper-purple only). 135-degree angle is standard. Subtle light overlays are permitted for added depth and dimension.

---

## Card Patterns: Borderless with Shadow

Cards use the **Borderless with Shadow** pattern. No borders, soft layered shadows, and subtle hover lift for premium feel.

### Base State

```css
.card {
  background: var(--bg-surface);
  border: none;
  border-radius: 12px;
  padding: 1.75rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04);
}
```

### Hover State

```css
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1), 0 8px 24px rgba(0,0,0,0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
```

**Why this pattern:** Borderless cards with layered shadows feel more modern and premium than bordered cards. The subtle hover lift provides clear interactive feedback without being distracting.

---

## Icon Button Patterns: Hover States

Icon buttons use **colorless hover states** by default. Red is the **only exception**, reserved exclusively for destructive actions.

### Default Hover (Non-Destructive)

```css
.icon-btn:hover {
  background: var(--gray-pale);
  color: var(--gray-dark);
}
```

Use for: Edit, resolve, settings, close, etc.

### Destructive Hover

```css
.icon-btn-delete:hover {
  background: var(--red-light);
  color: var(--red);
}
```

Use for: Delete, remove, destroy actions only

**Philosophy:** When red is the only color in the UI, it becomes a genuine warning signal rather than competing with other semantic colors. Do NOT use green for "success" actions or purple for "edit" — colorless is cleaner.

---

## Dark Mode Colors

Dark mode uses Purple 400 (#7534FF) as the primary accent for better visibility.

| Element | Light | Dark |
|---------|-------|------|
| Page background | #FFFFFF | #0f0f0f |
| Card background | #FFFFFF | #1a1a1a |
| Primary text | #111111 | #f0f0f0 |
| Muted text | #6B7280 | #888888 |
| Borders | #E5E7EB | #333333 |
| Primary button bg | #290080 | #7534FF |
| Active nav bg | #EDE8F5 | #2D1548 |

---

## Related Documents

- [Logo](./03-logo.md) — Logo color options
- [Design System](./07-design-system.md) — Full CSS variable reference

---

*ENRG.realty*
