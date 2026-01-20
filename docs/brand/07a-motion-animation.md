# Motion & Animation

> **Audience:** Designers and developers implementing ENRG brand interfaces.

*Last Updated: January 2026*

---

## Core Principle

**Transitions communicate, they don't decorate.**

Motion in ENRG interfaces serves a functional purpose — providing feedback, guiding attention, and clarifying relationships between elements. Animation is never purely decorative.

---

## Allowed Transitions

| Property | Duration | Easing | Use Case |
|----------|----------|--------|----------|
| `opacity` | 0.15s | ease | Show/hide elements (dropdowns, overlays, tooltips) |
| `transform: translateX/Y` | 0.2-0.3s | ease | Panel slide-in, dropdown appearance, modal entry |
| `background` | 0.15s | ease | Hover state changes on buttons and cards |
| `color` | 0.15s | ease | Text color changes on hover |
| `border-color` | 0.15s | ease | Focus states, hover borders |
| `box-shadow` | 0.2s | ease | Card elevation changes, depth shifts |

---

## Duration Guidelines

| Duration | Use Case |
|----------|----------|
| **0.15s** | Fast feedback (hover states, color changes) |
| **0.2s** | Standard transitions (card lifts, shadows) |
| **0.3s** | Larger movements (panel slides, modal entry) |

**Rule:** Never exceed 0.3s. Longer durations feel sluggish and harm perceived performance.

---

## Code Examples

### ✅ Good: Card Hover with Shadow

```css
.card {
  background: var(--bg-surface);
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
  transform: translateY(-2px);
}
```

**Why:** Subtle lift provides clear interactive feedback. Duration is fast enough to feel responsive.

---

### ✅ Good: Dropdown Fade-In

```css
.dropdown {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.15s ease, visibility 0.15s ease;
}

.dropdown.open {
  opacity: 1;
  visibility: visible;
}
```

**Why:** Fast fade feels snappy. Visibility prevents interaction with hidden element.

---

### ❌ Bad: Scale Bounce on Hover

```css
.button {
  transition: transform 0.3s ease;
}

.button:hover {
  transform: scale(1.05);
}
```

**Why:** Scale adds bounce without meaning. Communicates nothing useful, only decorative distraction.

---

### ❌ Bad: Transition All

```css
.element {
  transition: all 0.3s;
}
```

**Why:** Too broad — can cause layout jank by transitioning properties that shouldn't animate (width, height, position). Be explicit about what transitions.

---

### ❌ Bad: Staggered Animations on Re-Render

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.list-item {
  animation: fadeInUp 0.3s ease;
  animation-delay: calc(var(--index) * 0.05s);
}
```

**Why:** Staggered animations are acceptable on **initial page load only**. Re-running them on every re-render (e.g., React state change) is jarring and feels broken.

**Fix:** Only apply animation on mount, not on subsequent renders:
```css
.list-item.initial-load {
  animation: fadeInUp 0.3s ease;
  animation-delay: calc(var(--index) * 0.05s);
}
```

---

## Forbidden Patterns

| Pattern | Problem |
|---------|---------|
| `transform: scale()` on hover | Adds bounce without meaning |
| Staggered animations on re-render | Should only happen on initial load |
| `transition: all` | Too broad, can cause layout jank |
| Animations longer than 0.3s | Feels sluggish, harms perceived performance |
| Rotating elements continuously | Distracting, accessibility concern |
| Multiple simultaneous animations | Overwhelming, unclear focus |

---

## Motion Sensitivity

Respect user preferences for reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Why:** Users with vestibular disorders can experience discomfort from motion. Respecting this preference is an accessibility requirement.

---

## When NOT to Animate

**Skip animation for:**
- Immediate feedback actions (checkbox check, radio button select)
- Loading states under 200ms (avoid flash of loading state)
- Destructive actions (delete should feel instant, not smooth)
- Text content (never animate body text in/out)

---

## Related Documents

- [Design System](./07-design-system.md) — Complete CSS specifications
- [Accessibility](./07b-accessibility.md) — Motion sensitivity and user preferences

---

*ENRG.realty*
