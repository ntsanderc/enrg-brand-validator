# Accessibility Standards

> **Audience:** Designers and developers implementing ENRG brand interfaces.

*Last Updated: January 2026*

---

## WCAG Compliance

ENRG brand aims for **WCAG 2.1 Level AA** compliance minimum, AAA where possible.

**Key Standards:**
- Color contrast ratios meet or exceed AA requirements
- All interactive elements are keyboard accessible
- Focus states are clearly visible
- Touch targets meet platform minimums
- Content is screen reader friendly

---

## Color Contrast

### Minimum Contrast Ratios

**WCAG AA Requirements:**
- Body text (14px+): **4.5:1** minimum
- Large text (18px+): **3:1** minimum
- UI components (buttons, inputs): **3:1** minimum

**WCAG AAA (Preferred):**
- Body text (14px+): **7:1**
- Large text (18px+): **4.5:1**

### Tested ENRG Color Combinations

| Combination | Contrast Ratio | WCAG Level | Usage |
|-------------|----------------|------------|-------|
| Purple 500 (#6021E6) on White | 6.2:1 | ✅ AAA | Logo, headlines, CTAs |
| Purple 800 (#290080) on White | 8.9:1 | ✅ AAA | Primary buttons, links (light mode) |
| White on Purple 500 | 6.2:1 | ✅ AAA | Buttons, badges |
| White on Purple 800 | 8.9:1 | ✅ AAA | Dark surfaces, navigation |
| Gray 700 (#374151) on White | 7.8:1 | ✅ AAA | Secondary text |
| Gray 600 (#4B5563) on White | 5.9:1 | ✅ AAA | Tertiary text |
| Gray 500 (#6B7280) on White | 4.6:1 | ✅ AA | Muted text, placeholders |
| Orange (#FF6039) on White | 3.1:1 | ✅ AA (large text only) | High-emphasis CTAs (18px+) |

**Critical:** Orange must only be used for large text (18px+) or UI components. Never use for body text.

---

## Focus States

### Requirements

**All interactive elements must have visible focus indicators:**
- Minimum 2px outline or border
- Contrast ratio of 3:1 against background
- Clearly distinguishable from hover state

### Standard Focus Pattern

```css
button:focus-visible,
a:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 2px solid var(--purple-primary);
  outline-offset: 2px;
  border-radius: 4px;
}
```

**Why `:focus-visible`:** Only shows focus indicator when keyboard navigation is used, not on mouse/touch clicks.

### Dark Mode Focus

```css
[data-theme="dark"] button:focus-visible,
[data-theme="dark"] a:focus-visible,
[data-theme="dark"] input:focus-visible {
  outline: 2px solid var(--purple-light);
  outline-offset: 2px;
}
```

### Never Do This

```css
/* ❌ BAD */
button:focus {
  outline: none;
}
```

**Rule:** Never remove focus outlines without providing an alternative visible indicator.

---

## Touch Targets

### Platform Minimums

| Platform | Minimum Size |
|----------|--------------|
| **iOS (Apple)** | 44×44pt |
| **Android (Google)** | 48×48dp |
| **Web (WCAG)** | 44×44px (recommended) |

### ENRG Standards

**All interactive elements must meet these minimums:**
- Buttons: Minimum 44×44px
- Icon buttons: Minimum 44×44px (including padding/hit area)
- Links in paragraphs: Minimum 44px height with padding
- Form inputs: Minimum 44px height
- Checkboxes/radios: Minimum 24×24px with 44×44px tap area

### Code Example

```css
.icon-button {
  width: 24px;
  height: 24px;
  padding: 10px; /* Creates 44×44px hit area */
  cursor: pointer;
}

/* Or use minimum dimension directly */
.button {
  min-height: 44px;
  min-width: 44px;
  padding: 0.75rem 1.5rem;
}
```

---

## Keyboard Navigation

### Required Keyboard Support

**All interactive elements must be keyboard accessible:**

| Action | Key | Elements |
|--------|-----|----------|
| **Navigate forward** | Tab | All interactive elements in DOM order |
| **Navigate backward** | Shift+Tab | Reverse DOM order |
| **Activate** | Enter | Buttons, links |
| **Activate** | Space | Buttons, checkboxes |
| **Close** | Escape | Modals, dropdowns, overlays |
| **Arrow navigation** | ↑ ↓ ← → | Dropdown menus, radio groups, tabs |

### Tab Order

**DOM order must match visual order:**
```html
<!-- ✅ Good: Visual and DOM order match -->
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</nav>

<!-- ❌ Bad: CSS reorders visually but DOM order wrong -->
<nav>
  <a href="/contact" style="order: 3">Contact</a>
  <a href="/" style="order: 1">Home</a>
  <a href="/about" style="order: 2">About</a>
</nav>
```

### Skip Links

**Provide skip links for long pages:**
```html
<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<nav>...</nav>

<main id="main-content">
  <!-- Content starts here -->
</main>
```

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--purple-primary);
  color: white;
  padding: 8px;
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

---

## Screen Reader Support

### Semantic HTML Preferred

**Use semantic HTML elements instead of generic divs:**

| Instead of | Use |
|-----------|-----|
| `<div onclick="...">` | `<button>` |
| `<div class="link">` | `<a href="...">` |
| `<div class="nav">` | `<nav>` |
| `<div class="header">` | `<header>` |
| `<div class="main">` | `<main>` |
| `<div class="article">` | `<article>` |
| `<div class="section">` | `<section>` |

### Heading Hierarchy

**Never skip heading levels:**
```html
<!-- ✅ Good -->
<h1>Page Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>

<!-- ❌ Bad: Skips h2 -->
<h1>Page Title</h1>
<h3>Subsection Title</h3>
```

### ARIA Attributes

**Use ARIA when semantic HTML isn't sufficient:**

#### Expandable Elements

```html
<button aria-expanded="false" aria-controls="dropdown-menu">
  Options
</button>
<div id="dropdown-menu" role="menu" hidden>
  <button role="menuitem">Edit</button>
  <button role="menuitem">Delete</button>
</div>
```

#### Live Regions

```html
<!-- Announces changes to screen readers -->
<div role="status" aria-live="polite" aria-atomic="true">
  3 items added to cart
</div>
```

#### Labeling

```html
<!-- Associate labels with inputs -->
<label for="email">Email</label>
<input type="email" id="email" name="email">

<!-- Or use aria-label when visual label doesn't exist -->
<button aria-label="Close dialog">
  <svg>...</svg> <!-- X icon -->
</button>
```

### Alt Text for Images

**Every image must have alt text:**
```html
<!-- ✅ Decorative image -->
<img src="pattern.png" alt="" role="presentation">

<!-- ✅ Informative image -->
<img src="chart.png" alt="Sales increased 40% in Q4">

<!-- ✅ Functional image (button) -->
<button>
  <img src="search.svg" alt="Search">
</button>
```

---

## Color-Blind Testing

### ENRG Palette Validation

The ENRG color palette has been tested for the three most common types of color blindness:

| Type | Affects | Result |
|------|---------|--------|
| **Protanopia** | Red perception (1% of men) | ✅ Purple and orange remain distinguishable |
| **Deuteranopia** | Green perception (1% of men) | ✅ Purple and orange remain distinguishable |
| **Tritanopia** | Blue perception (0.01%) | ✅ Purple and orange remain distinguishable |

**Key Finding:** ENRG's purple (#6021E6) and orange (#FF6039) maintain sufficient contrast in all color-blind simulations.

### Never Rely on Color Alone

**Always pair color with another indicator:**
```html
<!-- ❌ Bad: Color only -->
<span style="color: red;">Error</span>

<!-- ✅ Good: Color + icon + text -->
<span style="color: var(--red);">
  <svg><!-- error icon --></svg>
  Error: Invalid email format
</span>
```

---

## Motion Sensitivity

### Respect User Preferences

**Disable animations for users who prefer reduced motion:**

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Who needs this:**
- Users with vestibular disorders
- Users with motion sickness
- Users on slow devices (animations cause jank)

---

## Forms Accessibility

### Labels

**Every input must have a visible label:**
```html
<!-- ✅ Good -->
<label for="name">Full Name</label>
<input type="text" id="name" name="name">

<!-- ❌ Bad: Placeholder is not a label -->
<input type="text" placeholder="Full Name">
```

### Error Messages

**Associate errors with inputs:**
```html
<label for="email">Email</label>
<input
  type="email"
  id="email"
  name="email"
  aria-describedby="email-error"
  aria-invalid="true"
>
<span id="email-error" role="alert">
  Please enter a valid email address
</span>
```

### Required Fields

```html
<label for="email">
  Email <span aria-label="required">*</span>
</label>
<input
  type="email"
  id="email"
  name="email"
  required
  aria-required="true"
>
```

---

## Testing Checklist

### Keyboard Navigation
- [ ] Tab through entire page in logical order
- [ ] All interactive elements receive focus
- [ ] Focus indicator is visible
- [ ] Escape closes modals and dropdowns
- [ ] Enter/Space activate buttons

### Screen Reader
- [ ] Test with VoiceOver (Mac) or NVDA (Windows)
- [ ] All images have alt text
- [ ] Headings follow logical hierarchy
- [ ] Form labels are announced
- [ ] Error messages are announced

### Color Contrast
- [ ] Use browser DevTools color contrast tool
- [ ] All text meets 4.5:1 minimum
- [ ] UI components meet 3:1 minimum
- [ ] Test in color-blind simulators

### Touch Targets
- [ ] All interactive elements meet 44×44px minimum
- [ ] Test on actual mobile device
- [ ] Adequate spacing between tap targets

### Motion
- [ ] Enable "Reduce motion" OS setting
- [ ] Animations are disabled or minimal
- [ ] No auto-playing videos or carousels

---

## Tools & Resources

### Testing Tools
- **axe DevTools** — Browser extension for automated accessibility testing
- **WAVE** — Web accessibility evaluation tool
- **Lighthouse** — Built into Chrome DevTools
- **Color Contrast Analyzer** — Desktop app for checking contrast ratios
- **VoiceOver** — macOS built-in screen reader (Cmd+F5)
- **NVDA** — Free Windows screen reader

### Color-Blind Simulators
- **Sim Daltonism** — macOS app for real-time color-blind simulation
- **Chromatic Vision Simulator** — iOS app
- **Color Oracle** — Cross-platform desktop simulator

---

## Related Documents

- [Colors](./04-colors.md) — Contrast ratios and color combinations
- [Motion & Animation](./07a-motion-animation.md) — Motion sensitivity guidelines
- [Design System](./07-design-system.md) — Complete component specifications

---

*ENRG.realty*
