# ENRG Typography

> **Audience:** Designers, developers, and anyone creating ENRG content.

*Last Updated: January 2026*

---

## Two Typefaces

ENRG uses two typefaces, each for its appropriate context:

| Typeface | Context | Download |
|----------|---------|----------|
| **Plus Jakarta Sans** | Brand materials, marketing, website | [Google Fonts](https://fonts.google.com/specimen/Plus+Jakarta+Sans) |
| **Inter** | Internal tools, dashboards, documentation | [Google Fonts](https://fonts.google.com/specimen/Inter) |

---

## Plus Jakarta Sans (Brand)

The primary typeface for all external-facing materials.

```css
font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
```

**Character:** Simple, clean, legible. Bold and modern, classic and friendly.

**Use for:**
- Website
- Marketing materials
- External-facing documents
- Presentations
- Agent-facing content

**Weights:**
| Weight | Value | Usage |
|--------|-------|-------|
| Light | 300 | Body text, captions, subheadings |
| Regular | 400 | Body text |
| Medium | 500 | Subtle emphasis, labels |
| SemiBold | 600 | Headings, titles, buttons |
| Bold | 700 | Key statements, strong emphasis |

**Download:**
- [Google Fonts](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
- [Fontshare](https://www.fontshare.com/fonts/plus-jakarta-sans)

---

## Inter (Tools)

The secondary typeface for internal applications.

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
```

Inter is the industry standard for SaaS tools — used by Linear, Notion, Figma, and Vercel. It's optimized for screens with excellent legibility at small sizes.

**Use for:**
- Internal tools
- Discovery Guide
- Validators
- Dashboards
- Documentation

---

## Type Scale

| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `text-xs` | 12px | 1.5 (18px) | Captions, metadata, timestamps |
| `text-sm` | 13px | 1.5 (19.5px) | Secondary text, notes, hints |
| `text-base` | 15px | 1.5 (22.5px) | Body text, form inputs |
| `text-md` | 17px | 1.4 (23.8px) | Subheadings, card titles |
| `text-lg` | 20px | 1.3 (26px) | Section titles |
| `text-xl` | 24px | 1.2 (28.8px) | Page titles |

---

## Type Hierarchy

From the original ENRG.realty Brand Guidelines:

### Official Type Hierarchy (Brand Guidelines v1.0)

| Level | Weight | Case | Line Height | Letter Spacing |
|-------|--------|------|-------------|----------------|
| **Headline Large** | SemiBold (600) | ALL CAPS | 100% | 0 |
| **Headline Small** | SemiBold (600) | ALL CAPS | 120% | 0 |
| **Subheadline** | SemiBold (600) | ALL CAPS | 140% | 0 |
| **Large Body Text** | Medium (500) | Sentence case | 140% | -1% |
| **Regular Body Text** | Regular (400) | Sentence case | 140% | -1% |

> **Note:** Headlines in the original brand guidelines use ALL CAPS. Implementation may use sentence case for internal tools to improve readability. The type scale below shows practical sizing for web applications.

### Code Examples

**Headline Large:**
```css
.headline-large {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1.0;
  letter-spacing: 0;
}
```

**Large Body Text:**
```css
.body-large {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.01em;
}
```

**Regular Body Text:**
```css
.body-regular {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: -0.01em;
}
```

---

## Text Styling

### Uppercase Labels
```css
font-size: 12px;       /* text-xs */
font-weight: 600;      /* semibold */
letter-spacing: 0.5px;
text-transform: uppercase;
```

### Links
- Color: Purple (not orange)
- No underline by default
- Underline on hover

### Monospace
```css
font-family: 'Monaco', 'Menlo', monospace;
```
Use for code/JSON only.

---

## Logo Typography

The "realty" portion of the wordmarks uses **Helvetica Neue LT Std**.

---

## Callouts & Testimonials

Callouts and testimonials capture attention and emphasize key messages. Using black bars behind text creates a bold and distinguished presentation.

---

## Related Documents

- [Colors](./04-colors.md) — Color values for text
- [Design System](./07-design-system.md) — Full CSS variable reference

---

*ENRG.realty*
