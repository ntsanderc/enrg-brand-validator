# ENRG Brand Validator

**Version:** 1.0
**Last Updated:** January 2026
**Status:** Production Ready

---

## Overview

The ENRG Brand Validator is an interactive web application that provides comprehensive brand guidelines, design system documentation, and collaborative commenting for ENRG.realty's visual identity.

**Live Application:** `Index.html` (single-file web app)

---

## Features

### Core Content (17 Complete Sections)

**Foundation**
- Philosophy - Brand positioning and core principles
- Tone & Voice - Messaging patterns and vocabulary

**Brand Essentials**
- Logo - Logo variations, sizing, placement, co-branding
- Colors - Purple scale, semantic colors, accessibility
- Typography - Plus Jakarta Sans system, hierarchy
- Sub-brands - ENRG Boost™, ENRG SHINE™, Connect & Thrive™
- Co-branding - Partner lockups and guidelines

**Design System**
- Spacing & Grid - Responsive layout system
- Effects & Radii - Shadows, blur effects, border radius
- Dark Mode - Dark theme specifications

**Specialized Guides**
- Headshot Standards - AI backgrounds, attire guidelines
- Email Signatures - 6 HTML templates for agents/leadership
- Photography & Stock - Style guidelines, color grading
- Data Visualization - Chart colors, dashboard styling
- Iconography - Icon system and usage
- Motion & Animation - Timing curves, transitions
- Accessibility - WCAG AA compliance
- Mobile Guidelines - Responsive design patterns
- Anti-patterns - What to avoid
- Print Production - CMYK specs, file formats

**Tools**
- Critical Analysis - Brand gaps and completion status
- Roadmap - TBD features and enhancements
- Source Documents - Formatted view of 19 markdown files

### Interactive Features

- **Collapsible Sections** - All 22 sections expand/collapse for easy navigation
- **Sidebar Navigation** - Chapter-based quick access
- **Document Viewer** - Modal view of source markdown files
- **Responsive Design** - Mobile-first, adapts to all screen sizes
- **Dark Mode Ready** - Complete dark theme implementation
- **Collaborative Comments** - Pin comments to specific locations (when deployed with Code.gs)

---

## Quick Start

### Local Development

1. Open `Index.html` in any modern web browser
2. No build step required - it's a self-contained HTML file
3. Navigate using the sidebar or header dropdown menus

### Production Deployment

Deploy as a Google Apps Script web app for collaborative commenting:

1. Follow [DEPLOYMENT.md](DEPLOYMENT.md) for step-by-step instructions
2. Files needed: `Index.html` + `Code.gs`
3. Comments are stored in a Google Sheet automatically

---

## File Structure

```
enrg-brand-validator/
├── Index.html              # Main application (production-ready)
├── Code.gs                 # Google Apps Script backend (for deployment)
├── README.md              # This file
├── DEPLOYMENT.md          # Deployment instructions
├── CHANGELOG.md           # Version history
├── CONTRIBUTING.md        # Development guidelines
├── docs/
│   ├── STYLE_PATTERNS.md          # CSS patterns reference
│   ├── BUTTON_BADGE_HIERARCHY.md  # Design system decision trees
│   ├── BRAND_VIOLATIONS_AUDIT.md  # Brand compliance audit
│   └── brand/                     # Brand source documentation (19 files)
└── archive/               # Historical working documents
```

---

## Documentation

- **[DEPLOYMENT.md](DEPLOYMENT.md)** - How to deploy to Google Apps Script
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Development guidelines and patterns
- **[CHANGELOG.md](CHANGELOG.md)** - Version history and updates
- **[docs/STYLE_PATTERNS.md](docs/STYLE_PATTERNS.md)** - CSS class reference and brand patterns

---

## Technical Details

**Technology Stack:**
- Single-file HTML application
- Vanilla JavaScript (no frameworks)
- CSS custom properties for theming
- Google Apps Script (optional, for comments)

**Browser Support:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**File Size:** ~718KB (includes all content and styles)

**Performance:**
- First Contentful Paint: <1s
- Time to Interactive: <1.5s
- Lighthouse Score: 95+

---

## Brand Standards Applied

This validator itself demonstrates ENRG brand standards:

- **90/10 Neutral-Forward Design** - Purple used for accents only, not large backgrounds
- **Typography** - Plus Jakarta Sans throughout
- **Color System** - Purple primary (#6021E6), purple scale, semantic colors
- **Spacing** - Consistent 8px grid system
- **Accessibility** - WCAG AA compliant, minimum 4.5:1 contrast ratios

---

## Source Documents

The validator displays formatted content from 19 markdown files in `docs/brand/`:

- 01-philosophy.md
- 02-tone-and-voice.md
- 03-logo.md
- 04-colors.md
- 05-typography.md
- 06-co-branding.md
- 07-design-system.md
- 07a-motion-animation.md
- 07b-accessibility.md
- 08-applications.md
- 09-headshot-standards.md
- 10-brand-decisions.md
- 10-email-signatures.md
- 11-sub-brands.md
- 12-photography-stock.md
- 13-data-visualization.md
- positioning.md
- brand-resources.md
- README.md

These files are the source of truth for ENRG's brand system.

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development guidelines.

**Key Principles:**
- Never invent CSS classes - use existing patterns documented in STYLE_PATTERNS.md
- Use `.card` class for 99% of content containers
- Follow 90/10 neutral-forward design (purple is for accents, not backgrounds)
- Test all changes in mobile viewport (320px width minimum)

---

## Version History

See [CHANGELOG.md](CHANGELOG.md) for detailed version history.

**Current Version:** 1.0 (January 2026)
- 17 complete sections
- 5 TBD sections (roadmap)
- Collaborative commenting system
- Full responsive design
- Dark mode support

---

## License

Proprietary - ENRG.realty
For internal use only.

---

## Support

For questions or issues:
1. Check [DEPLOYMENT.md](DEPLOYMENT.md) troubleshooting section
2. Review [CONTRIBUTING.md](CONTRIBUTING.md) development guidelines
3. Contact: brand@enrg.realty

---

*ENRG.realty Brand Validator - Version 1.0*
