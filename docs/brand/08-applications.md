# ENRG Applications

> **Audience:** Designers, developers, and anyone implementing ENRG brand across platforms.

*Last Updated: January 2026*

---

## Overview

This document covers how the ENRG brand applies across different contexts and platforms.

---

## Mobile Native

### iOS Design Principles

ENRG iOS applications follow Apple Human Interface Guidelines while maintaining brand identity:

| Principle | Implementation |
|-----------|----------------|
| **System Integration** | Leverage Dynamic Island, Lock Screen widgets, Focus filters |
| **Native Feel** | Use SF Symbols and system materials for consistency |
| **Touch Targets** | 44×44pt minimum for all interactive elements |
| **Typography** | Use system fonts with ENRG color palette |

### Android Design Principles

ENRG Android applications follow Material Design while maintaining brand identity:

| Principle | Implementation |
|-----------|----------------|
| **Material You** | Support dynamic color where appropriate |
| **Touch Targets** | 48×48dp minimum for all interactive elements |
| **Typography** | Use Roboto with ENRG color palette |

---

## Print Production

### Minimum Sizes

| Element | Print Minimum |
|---------|---------------|
| ENRG Logo | 30mm height |
| ENRG Symbol | 8mm height |
| Wordmark (Full/Short) | 15mm height |
| Wordmark (Tiny) | 10mm height |

### Color Specifications

Use PMS spot colors for critical brand applications:

| Color | PMS |
|-------|-----|
| Primary Purple | 2097 C |
| Depth Purple | 2685 C |
| Orange | Orange 021 C |

> Always verify with print vendor before production.

### Paper Stock

- **Business Cards:** 16pt or heavier, matte or soft-touch finish
- **Letterhead:** 24lb bond or 70lb text
- **Marketing Collateral:** 100lb gloss or matte cover

---

## Digital Applications

### Website

- Glass effects encouraged for hero sections and navigation
- Dark mode support required
- Responsive down to 320px viewport

### Email Signatures

Standard format with ENRG wordmark, agent info, and social links.

> See [Brand Resources](./09-brand-resources.md) for email signature templates.

### Social Media

| Platform | Profile Image | Cover/Banner |
|----------|---------------|--------------|
| LinkedIn | ENRG Logo (square) | Purple 800 background with wordmark |
| Instagram | ENRG Logo (square) | As needed per content |
| Facebook | ENRG Logo (square) | Purple 800 background with wordmark |

---

## Responsive Design

### Breakpoint Strategy

ENRG applications use a comprehensive mobile-first responsive strategy:

| Breakpoint | Width | Target Devices | Purpose |
|------------|-------|----------------|---------|
| **Mobile** | 375-479px | iPhone SE, small phones | Single column, compact UI |
| **Mobile Large** | 480-639px | Standard phones | Optimized phone layouts |
| **Tablet Small** | 640-767px | Large phones, small tablets | Beginning of 2-column layouts |
| **Tablet** | 768-1023px | iPad portrait, tablets | 2-column layouts, reduced spacing |
| **Desktop Small** | 1024-1279px | iPad landscape, small laptops | Multi-column content |
| **Desktop** | 1280px+ | Laptops, desktops | Full multi-column layouts |

### Responsive Patterns

#### Grid Layouts

```css
/* 3-column desktop → 2-column tablet → 1-column mobile */
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .responsive-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .responsive-grid {
    grid-template-columns: 1fr;
  }
}
```

#### Section Padding

```css
/* Reduce excessive vertical padding on smaller screens */
.section {
  padding: 5rem 0; /* 80px on desktop */
}

@media (max-width: 768px) {
  .section {
    padding: 3rem 0; /* 48px on tablet */
  }
}

@media (max-width: 480px) {
  .section {
    padding: 2rem 0; /* 32px on mobile */
  }
}
```

#### Container Padding

```css
/* Horizontal padding scales with viewport */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem; /* 32px */
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem; /* 24px */
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem; /* 16px */
  }
}
```

#### Typography Scaling

```css
/* Hero text scales down on mobile */
.hero-title {
  font-size: 1.75rem; /* 28px desktop */
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 1.375rem; /* 22px */
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.25rem; /* 20px */
  }
}
```

### Mobile-Specific Patterns

#### Touch Targets

All interactive elements must meet minimum touch target sizes:

- **iOS:** 44×44px minimum
- **Android:** 48×48px minimum
- **Web Best Practice:** 44×44px minimum

```css
button, a {
  min-height: 44px;
  min-width: 44px;
  padding: 0.75rem 1.5rem;
}
```

#### Fixed Width Elements

Avoid fixed widths; use max-width with viewport-relative fallbacks:

```css
/* ❌ Bad: Fixed width causes overflow */
.popup {
  width: 300px;
}

/* ✅ Good: Responsive with max-width */
.popup {
  width: 300px;
  max-width: calc(100vw - 32px);
}

/* ✅ Better: Full responsive at small sizes */
@media (max-width: 375px) {
  .popup {
    width: calc(100vw - 32px);
  }
}
```

#### Overflow Handling

Always handle horizontal overflow for tables and code blocks:

```css
.table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
}

table {
  min-width: 600px; /* Prevent table cramming */
}
```

### Testing Checklist

- [ ] **375px** - iPhone SE (smallest common device)
- [ ] **414px** - iPhone 14 Pro Max
- [ ] **768px** - iPad portrait
- [ ] **1024px** - iPad landscape
- [ ] **1280px** - Desktop threshold

Test each breakpoint for:
- No horizontal scrolling
- Readable text sizes
- Comfortable touch targets
- Proper grid wrapping
- Appropriate spacing

---

## Anti-Patterns

Things to avoid across all applications:

| Anti-Pattern | Why |
|--------------|-----|
| **Emoji** | Use SVG icons or Unicode symbols instead |
| **Orphaned grid items** | Single items on final row look unfinished |
| **Heavy shadows** | Keep shadows subtle; heavy shadows feel dated |
| **Purple-tinted dark mode** | Dark mode uses neutral grays, not purple backgrounds |
| **Orange for standard buttons** | Orange is reserved for signature elements only |
| **Cramped layouts** | White space is a feature, not waste |
| **Mystery navigation** | Obvious > clever; use clear labels |

---

## Platform Stack

ENRG materials are created through these platforms:

| Platform | Purpose |
|----------|---------|
| **MAXA** | Agent templates (listings, flyers, presentations) |
| **Canva** | Internal content creation, social media |
| **Figma** | Design source files, component library |
| **Lowen** | Physical signage (yard signs, riders) |

---

## Related Documents

- [Brand Resources](./09-brand-resources.md) — Platform access and templates
- [Design System](./07-design-system.md) — Technical specifications

---

*ENRG.realty*
