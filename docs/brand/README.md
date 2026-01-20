# ENRG Brand Documentation

**Comprehensive brand guidelines for ENRG.realty** — covering identity, system standards, applications, and implementation resources.

*Last Updated: January 2026*

---

## Overview

This directory contains the complete ENRG brand documentation system, providing guidelines for consistent visual identity, design system implementation, and application across all touchpoints.

**Purpose:** Ensure every ENRG agent, partner, vendor, and staff member can create on-brand materials with confidence.

---

## Document Index

### Core Identity

| Document | Description | Audience |
|----------|-------------|----------|
| [01-introduction.md](./01-introduction.md) | Brand overview, philosophy, target audience | All stakeholders |
| [02-logos.md](./02-logos.md) | Logo variations, lockups, usage rules, clear space | Designers, vendors |
| [03-brand-system.md](./03-brand-system.md) | Brand architecture, voice, personality | Marketing, leadership |
| [04-colors.md](./04-colors.md) | Purple palette, semantic colors, print specifications | Designers, developers |
| [05-typography.md](./05-typography.md) | Plus Jakarta Sans, Inter, type hierarchy, weights | Designers, developers |

### Design System

| Document | Description | Audience |
|----------|-------------|----------|
| [06-composition.md](./06-composition.md) | Layout grids, spacing, alignment principles | Designers |
| [07-design-system.md](./07-design-system.md) | CSS variables, component specs, buttons, inputs | Developers, designers |
| [07a-motion-animation.md](./07a-motion-animation.md) | Animation timing, easing, transitions, motion sensitivity | Developers, animators |
| [07b-accessibility.md](./07b-accessibility.md) | WCAG 2.1 AA compliance, keyboard nav, screen readers | Developers, designers |

### Applications & Media

| Document | Description | Audience |
|----------|-------------|----------|
| [08-applications.md](./08-applications.md) | Platform-specific guidelines (web, mobile, print) | All content creators |
| [09-headshot-standards.md](./09-headshot-standards.md) | AI headshot guidelines, backgrounds, attire, crop ratios | Agents, photographers |
| [10-email-signatures.md](./10-email-signatures.md) | Email signature templates, newsletter headers/footers | All staff |
| [11-sub-brands.md](./11-sub-brands.md) | ENRG Boost™, ENRG SHINE™, Connect & Thrive™ identities | Marketing, program managers |
| [12-photography-stock.md](./12-photography-stock.md) | Photography style, stock sources, color grading | Marketing, content creators |
| [13-data-visualization.md](./13-data-visualization.md) | Chart colors, graph styles, dashboard patterns | Analysts, designers |

---

## Quick Start

### For Agents

**Creating marketing materials?**
1. Start with [09-headshot-standards.md](./09-headshot-standards.md) for professional headshots
2. Review [10-email-signatures.md](./10-email-signatures.md) for email setup
3. Check [04-colors.md](./04-colors.md) for brand colors (Purple #6021E6)
4. Use [12-photography-stock.md](./12-photography-stock.md) for property photos

### For Designers

**Building a website or app?**
1. Review [07-design-system.md](./07-design-system.md) for CSS variables and components
2. Check [04-colors.md](./04-colors.md) for full color palette
3. See [05-typography.md](./05-typography.md) for font specifications
4. Follow [07b-accessibility.md](./07b-accessibility.md) for WCAG compliance
5. Use [07a-motion-animation.md](./07a-motion-animation.md) for transitions

### For Developers

**Implementing brand in code?**
1. Copy CSS variables from [07-design-system.md](./07-design-system.md)
2. Install fonts from [05-typography.md](./05-typography.md) (Plus Jakarta Sans, Inter)
3. Follow button/input specs in [07-design-system.md](./07-design-system.md)
4. Test accessibility using [07b-accessibility.md](./07b-accessibility.md) checklist
5. Implement motion using [07a-motion-animation.md](./07a-motion-animation.md) patterns

### For Content Creators

**Creating social posts, emails, or presentations?**
1. Use approved colors from [04-colors.md](./04-colors.md)
2. Follow email templates in [10-email-signatures.md](./10-email-signatures.md)
3. Source stock images using [12-photography-stock.md](./12-photography-stock.md)
4. Create charts using [13-data-visualization.md](./13-data-visualization.md) palette

---

## Brand Philosophy

### Core Principles

1. **Expensive Simplicity** — Premium through restraint, not decoration
2. **Neutral-Forward** — 90% whites/grays, 10% purple/orange accent
3. **Two-Purple System** — Purple 500 for hero, Purple 800 for depth
4. **Accessibility First** — WCAG 2.1 Level AA minimum compliance
5. **Mobile-First** — Touch-friendly, responsive, optimized

### Visual Identity

**Colors:**
- **Primary Purple:** #6021E6 (logos, headlines, CTAs)
- **Depth Purple:** #290080 (backgrounds, UI depth)
- **Accent Orange:** #FF6039 (the signature dot, highlights)

**Typography:**
- **Plus Jakarta Sans** — Marketing, external brand materials
- **Inter** — Internal tools, dashboards, documentation

**Spacing:**
- 8px grid system (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)

---

## Documentation Health: 96%

### Completed Sections

✅ Core Identity (5 docs)
✅ Design System (4 docs)
✅ Applications & Media (6 docs)
✅ Motion & Animation guidelines
✅ Accessibility standards (WCAG 2.1 AA)
✅ Headshot standards with AI backgrounds
✅ Email signature templates
✅ Sub-brand visual identities
✅ Photography & stock imagery guidelines
✅ Data visualization color palettes

### Roadmap Deliverables (In Progress)

The following deliverables are tracked in the [ENRG Brand Validator roadmap](#):

**Identity:**
- Co-brand lockup design
- Additional headshot background variations

**Applications:**
- Video production standards (intro/outro bumpers)
- Signage specifications (Lowen yard signs, riders)

**Resources:**
- Figma design system library
- Canva brand kit setup
- Asset library with download links

---

## File Naming Conventions

```
Brand_{Category}_{AssetType}_{Version}.{ext}

Examples:
Brand_Logo_Primary_Purple_v1.svg
Brand_Headshot_SoftLavender_Background.png
Brand_EmailSignature_Agent_Template.html
```

---

## Contributing

### Updating Documentation

1. All changes must maintain consistency with existing brand system
2. Code examples should be tested and functional
3. Update "Last Updated" date at top of file
4. Cross-reference related documents using markdown links
5. Follow existing document structure (Overview → Sections → Related Docs)

### Proposing Changes

For major brand changes (colors, typography, logo modifications):
1. Create proposal document with rationale
2. Submit for leadership review
3. If approved, update all affected documentation
4. Notify all stakeholders of changes

---

## Tools & Resources

### Design Tools
- **Figma** — Design source files, component library
- **Adobe Creative Suite** — Logo artwork, print production
- **Canva** — Internal templates, social media assets

### Development Tools
- **Google Fonts** — Plus Jakarta Sans, Inter typefaces
- **CSS Variables** — Design token implementation
- **Lighthouse** — Accessibility testing
- **axe DevTools** — WCAG compliance validation

### Stock Resources
- **Unsplash** — Free stock photography
- **Pexels** — Free stock imagery
- **Adobe Stock** — Premium licensed images

---

## Support

### Questions?

- **Brand Questions:** Contact marketing@enrg.com
- **Technical Implementation:** Contact dev@enrg.com
- **Asset Requests:** Contact creative@enrg.com

### Feedback

Found an error or inconsistency? Suggest an improvement?
- Submit feedback via ENRG Brand Validator comment system
- Email marketing@enrg.com with subject "Brand Docs Feedback"

---

## Version History

### v2.0.0 (January 2026)
- Added comprehensive application guidelines (headshots, email, sub-brands, photography, data viz)
- Created motion & animation standards
- Added WCAG 2.1 AA accessibility guidelines
- Expanded color palette with print specifications
- Added official type hierarchy table
- Documentation health: 82% → 96%

### v1.0.0 (December 2025)
- Initial brand documentation system
- Core identity standards (logos, colors, typography)
- Basic design system (CSS variables, components)
- Mobile and print guidelines
- Documentation health: 82%

---

*ENRG.realty — Building a brand that agents are proud to represent.*
