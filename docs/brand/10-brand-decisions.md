# Brand Evolution

**ENRG Brand System — Decisions & Rationale**

*January 2026*

---

## What This Document Is

This document records the evolution of the ENRG brand from the original v1.0 PDF guidelines to the current implementation. It explains what changed, why, and provides historical context for future brand stewards.

---

## The Two-Purple System

The brand uses two purple values for different purposes:

| Purple | Hex | Role |
|--------|-----|------|
| **Purple 500** | #6021E6 | Hero purple — logos, headlines, marketing CTAs, branded moments |
| **Purple 800** | #290080 | Depth purple — dark backgrounds, overlays, UI depth |

**Rationale:**
- Purple 500 is the original PDF brand purple — vibrant, energetic, distinctive
- Purple 800 provides premium depth for dark surfaces and creates visual hierarchy
- The two work together: 500 for vibrancy, 800 for sophistication

This is not a deviation from the PDF — it's an extension. The PDF established Purple 500 as the brand color. Purple 800 fills a role the PDF didn't address: dark UI surfaces.

---

## Orange: The Signature Dot

Orange (#FF6039) serves a specific, intentional role in the ENRG brand:

**The dot in wordmark files vs. the orange dot brand element:**
- In wordmark asset files (`wordmark-*.png`), the dot is rendered in the same color as the text (black or white)
- The "orange dot" is a **brand concept** — when used as a decorative accent in design and marketing, the dot appears in orange

**As a brand element, orange is used for:**
- High-emphasis CTAs (Apply Now, Schedule a Call)
- Special badges and promotional highlights
- Decorative accents where the dot appears as a visual signature
- The rare moment that needs to "pop" against purple

**Not used for:**
- Standard navigation
- Body text links
- General buttons

This aligns with the PDF intent: *"Orange should be used sparingly and intentionally, ensuring it always stands out."*

The website demonstrates this perfectly: deep purple dominates, with orange appearing sparingly as a distinctive accent.

---

## Typography: Two Typefaces

| Typeface | Context |
|----------|---------|
| **Plus Jakarta Sans** | All external/marketing materials, website, agent-facing content |
| **Inter** | Internal tools, dashboards, data-dense interfaces, documentation |

**Rationale:**
- Plus Jakarta Sans is warm, distinctive, and premium — perfect for brand expression
- Inter is optimized for screen legibility at small sizes — better for dense UI
- This follows industry practice: marketing and product can have different type needs

The PDF specified only Plus Jakarta Sans because it addressed brand materials, not internal tooling. Inter is an implementation addition, not a replacement.

---

## Implementation Refinements

These refinements were made during implementation and are now policy:

### Black: #111111 (not #000000)

Pure black creates harsh contrast. Near-black (#111111) is softer and more readable. This is a standard accessibility improvement used by Apple, Google, and modern design systems.

### Gray Scale: Tailwind-aligned

The PDF grays (#666666, #EEEEEE) were replaced with a systematic scale (gray-50 through gray-900). This enables:
- Consistent theming across light/dark modes
- Predictable semantic tokens
- Better developer experience

### Glass Effects: Approved

Glass/translucency is approved for ENRG brand applications:
- Sticky navigation headers
- Modal overlays
- Hero sections with photography
- Marketing materials

Solid surfaces preferred for data-dense interfaces.

### No Emoji Policy

Emoji are not used in ENRG brand materials. This maintains professional, universal communication. Unicode symbols (checkmarks, arrows, bullets) are acceptable.

---

## Resolved Items

These items were previously flagged as needing decisions. They are now resolved:

| Item | Resolution |
|------|------------|
| Primary Purple | Purple 500 for brand, Purple 800 for depth |
| CTA Color | Purple for standard, Orange for high-emphasis |
| Inter typeface | Approved for internal tools |
| Glass effects | Approved for marketing/navigation |
| All-caps headlines | Flexible — sentence case is acceptable |
| Logo Purple | Use Purple 500 for logo contexts |

---

## What's Still Needed (Roadmap)

These are design tasks, not decisions:

- **Sub-brand identities:** ENRG Boost, SHINE, Connect & Thrive visual treatments
- **Headshot standards:** Document the existing AI headshot system
- **Co-branding templates:** "Powered by ENRG" lockup artwork
- **Photography style guide:** With real examples
- **Figma library:** Design tokens and components

---

## Related Documents

- [Brand Guidelines](./brand-guidelines.md) — Original PDF extraction + implementation notes
- [Design System](./design-system.md) — Technical implementation specs
- [Tone and Voice](./tone-and-voice.md) — Messaging patterns

---

*Last Updated: January 2026*
