# Button, Badge & Interactive Element Hierarchy

**Purpose**: Prevent purple background abuse by establishing systematic decision trees for all interactive elements.

**Last Updated**: 2026-01-19

---

## Core Principle: 90/10 Neutral-Forward Design

> **Purple is for text, borders, and icons — NOT large background fills.**

- **90% of the UI**: White, gray backgrounds
- **10% of the UI**: Purple accents (text, borders, small elements)
- **Orange**: 1-3 uses per page maximum (signature moments)

**Why**: Purple backgrounds break the "expensive simplicity" principle. They create visual noise and make the interface feel "purple-themed" instead of "neutral with purple accents."

---

## Button Hierarchy Decision Tree

### Question 1: Is this the PRIMARY action on the page?

**Examples of primary actions:**
- "Create Account" on signup page
- "Submit" on a form
- "Save Changes" on settings
- "Add Comment" button in comments panel

**YES** → Use **Primary Button** (purple background)
**NO** → Go to Question 2

### Question 2: Is this a SUPPORTING action related to the main flow?

**Examples of supporting actions:**
- "Cancel" next to a "Submit" button
- "Edit" on a content card
- "View Details" on a list item

**YES** → Use **Secondary Button** (purple border, no background)
**NO** → Go to Question 3

### Question 3: Is this a UTILITY/TERTIARY action?

**Examples of utility actions:**
- "Go to pin" (navigation helper)
- "Unpin" (location management)
- "Close" / "Dismiss"
- Icon-only buttons (overflow menus, help icons)

**YES** → Use **Ghost Button** (neutral, purple on hover)

---

## Button Component Specifications

### Primary Button (RARE - 1-2 per page max)

```css
.btn-primary {
  background: var(--purple-primary);  /* Purple 800 in light mode */
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-lg);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
}

.btn-primary:hover {
  background: var(--purple-deep);  /* Darker purple */
}

.btn-primary:disabled {
  background: var(--gray-light);
  color: var(--gray-mid);
  cursor: not-allowed;
}
```

**When to use:**
- Main call-to-action
- Destructive confirmation ("Yes, Delete")
- Form submission

**When NOT to use:**
- Multiple primary buttons on same page
- Utility actions ("Go to pin", "Close")
- In lists or grids (creates visual clutter)

---

### Secondary Button (COMMON)

```css
.btn-secondary {
  background: transparent;
  color: var(--purple-primary);
  border: 1px solid var(--purple-primary);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-lg);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: var(--bg-elevated);  /* Subtle gray, NOT purple */
}

.btn-secondary:disabled {
  border-color: var(--gray-light);
  color: var(--gray-mid);
  cursor: not-allowed;
}
```

**When to use:**
- Supporting actions near primary button
- "Edit", "Delete", "View More" actions
- Modal action buttons (alongside primary)

**When NOT to use:**
- As the ONLY button on a page (use primary instead)
- Utility actions (use ghost button)

---

### Ghost Button (MOST COMMON - DEFAULT)

```css
.btn-ghost {
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border);
  padding: 0.5rem 1rem;
  border-radius: var(--radius-md);
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
}

.btn-ghost:hover {
  background: var(--bg-elevated);  /* IMPORTANT: Gray, NOT purple */
  border-color: var(--purple-primary);
  color: var(--purple-primary);
}

.btn-ghost:disabled {
  color: var(--gray-light);
  border-color: var(--gray-pale);
  cursor: not-allowed;
}
```

**When to use:**
- Default for all utility actions
- "Go to pin", "Unpin", "Close", "Cancel"
- Tertiary actions in lists/grids
- Icon-only buttons

**Key difference from secondary**: More subtle, smaller, no purple text until hover

---

### Icon Button (Utility variant of ghost)

```css
.icon-btn {
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--gray-mid);
  border-radius: var(--radius-md);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
}

.icon-btn:hover {
  background: var(--bg-elevated);  /* IMPORTANT: Gray, NOT purple-pale */
  color: var(--purple-primary);
}

.icon-btn svg {
  width: 16px;
  height: 16px;
}
```

**WRONG Pattern (NEVER DO THIS)**:
```css
/* ❌ VIOLATION - Purple background on hover */
.icon-btn:hover {
  background: var(--purple-pale);  /* BREAKS 90/10 RULE */
}
```

---

## Badge Hierarchy Decision Tree

### Question 1: Is this badge indicating CRITICAL status that requires immediate attention?

**Examples:**
- "ERROR" badge on failed action
- "NEW" badge on unread items (max 1-2 instances)

**YES** → Use **Filled Badge** (purple background) - RARE
**NO** → Use **Default Badge** (neutral with purple hover)

### Question 2: Is this badge INTERACTIVE (clickable)?

**Examples:**
- Comment count badge that opens comment panel
- Filter badge that toggles filter

**YES** → Add hover state
**NO** → Static badge (no hover)

---

## Badge Component Specifications

### Default Badge (ALWAYS START HERE)

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius-pill);
  font-size: 0.6875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  transition: all 0.15s ease;
}

/* Interactive variant */
.badge.--interactive {
  cursor: pointer;
}

.badge.--interactive:hover {
  border-color: var(--purple-primary);
  color: var(--purple-primary);
}
```

**When to use:**
- Status indicators (count badges, labels)
- Category tags
- Format indicators (SVG, PDF, etc.)

---

### Filled Badge (RARE - Use sparingly)

```css
.badge.--filled {
  background: var(--purple-primary);
  color: white;
  border-color: var(--purple-primary);
}

.badge.--filled:hover {
  background: var(--purple-deep);
}
```

**When to use (MAX 1-2 per page)**:
- "NEW" indicator on unread notification
- "ERROR" / "CRITICAL" status
- Special promotional badge

**When NOT to use:**
- Regular status badges (use default)
- Format indicators (SVG, EPS)
- Count badges (comments, replies)

---

### WRONG Badge Patterns (NEVER DO THIS)

```css
/* ❌ VIOLATION 1: Purple background for regular badge */
.type-scale-badge {
  background: var(--purple-pale);  /* WRONG - use transparent */
}

/* ❌ VIOLATION 2: Purple background for comment count */
.todo-comment-badge {
  background: var(--purple-light);  /* WRONG - use transparent */
}

/* ❌ VIOLATION 3: Purple background for section label */
.section-label {
  background: var(--purple-primary);  /* WRONG - only for critical badges */
}
```

---

## Hover State Specifications

### Principle: Hover states should be SUBTLE, not colorful

**CORRECT Pattern**:
```css
.interactive-element {
  background: transparent;
  color: var(--text);
}

.interactive-element:hover {
  background: var(--bg-elevated);  /* Subtle gray */
  color: var(--purple-primary);     /* Purple text */
}
```

**WRONG Pattern (breaks 90/10 rule)**:
```css
/* ❌ VIOLATION - Purple background on hover */
.interactive-element:hover {
  background: var(--purple-pale);  /* TOO COLORFUL */
}
```

**Why**: When every hover state shows purple background, the interface becomes "purple on interaction" instead of "neutral with purple accents."

---

## Active/Selected State Specifications

### Principle: Use purple TEXT/BORDER, not background

**CORRECT Pattern**:
```css
.sidebar-item[data-state="active"] {
  color: var(--purple-primary);
  border-left: 3px solid var(--purple-primary);
  background: var(--bg-elevated);  /* Subtle gray, NOT purple */
}
```

**WRONG Pattern**:
```css
/* ❌ VIOLATION - Purple background for active state */
.sidebar-item[data-state="active"] {
  background: var(--purple-pale);  /* TOO MUCH COLOR */
}
```

**Why**: Active states should be clear but not dominate the interface. Purple text + left border achieves this without breaking neutral-forward design.

---

## Special Cases

### Case 1: Hero/Header Gradients

**Allowed (sparingly)**:
```css
.hero-header {
  background: linear-gradient(135deg, var(--purple-800) 0%, var(--purple-900) 100%);
  /* OK - This is a hero element, not repeated UI pattern */
}
```

**NOT Allowed (content cards)**:
```css
/* ❌ VIOLATION - Gradient on regular content cards */
.content-card {
  background: linear-gradient(135deg, var(--purple-pale) 0%, #F8F5FF 100%);
}
```

---

### Case 2: Demo/Documentation Elements

**Allowed**:
```css
/* Color swatches showing purple */
.color-swatch[data-color="purple"] {
  background: var(--purple-primary);  /* OK - demonstrating the color itself */
}

/* Spacing demo boxes */
.spacing-box {
  background: var(--purple-primary);  /* OK - visual demonstration */
}
```

**Key difference**: These are showing "what purple looks like" not using purple for UI functionality.

---

### Case 3: Code Blocks

**WRONG**:
```css
/* ❌ VIOLATION - Purple background for code */
code {
  background: var(--purple-pale);
}
```

**CORRECT**:
```css
/* ✅ Neutral gray background */
code {
  background: var(--gray-pale);  /* #F9FAFB */
  color: var(--text);
  padding: 0.125rem 0.375rem;
  border-radius: var(--radius-sm);
}

/* Code blocks: Dark theme */
pre code {
  background: var(--gray-dark);
  color: var(--white);
}
```

**Why**: Code is technical content, not a "special purple thing." Industry standard is gray backgrounds.

---

## Quick Reference Decision Matrix

| Element Type | Background | Text Color | Border | Example |
|--------------|------------|------------|--------|---------|
| **Primary Button** | Purple | White | None | "Create Account" |
| **Secondary Button** | Transparent | Purple | Purple | "Edit Profile" |
| **Ghost Button** | Transparent | Gray → Purple on hover | Gray → Purple on hover | "Cancel", "Close" |
| **Icon Button** | Transparent → Gray on hover | Gray → Purple on hover | None | Overflow menu dots |
| **Badge (default)** | Transparent | Gray | Gray | Status labels |
| **Badge (filled)** | Purple (RARE) | White | Purple | "NEW" indicator |
| **Hover State** | Gray (subtle) | Purple | - | Any interactive element |
| **Active State** | Gray (subtle) | Purple | Purple left border | Sidebar navigation |
| **Code Inline** | Gray | Text color | None | Inline code snippets |

---

## Enforcement Checklist

Before committing code, verify:

- [ ] No `background: var(--purple-*)` outside primary CTAs
- [ ] Hover states use `var(--bg-elevated)` NOT `var(--purple-pale)`
- [ ] Active states use purple text/border, not background
- [ ] Badges use transparent background by default
- [ ] Code blocks use gray backgrounds
- [ ] Max 1-2 primary buttons per page
- [ ] No purple background gradients on content cards

---

## Common Violations to Avoid

### Violation 1: "Important = Purple Background"
```css
/* ❌ WRONG */
.important-badge { background: var(--purple-primary); }

/* ✅ CORRECT */
.important-badge {
  color: var(--purple-primary);
  border: 2px solid var(--purple-primary);
  font-weight: 700;
}
```

### Violation 2: "Every Hover Gets Purple"
```css
/* ❌ WRONG */
.card:hover { background: var(--purple-pale); }

/* ✅ CORRECT */
.card:hover {
  background: var(--bg-elevated);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}
```

### Violation 3: "Purple Makes It Look Polished"
```css
/* ❌ WRONG */
.callout { background: linear-gradient(var(--purple-pale), #F8F5FF); }

/* ✅ CORRECT */
.callout {
  background: var(--bg-elevated);
  border-left: 4px solid var(--purple-primary);
}
```

---

## Related Documents

- [Brand Philosophy](./brand/01-philosophy.md) — 90/10 neutral-forward principle
- [Colors](./brand/04-colors.md) — Purple usage guidelines
- [BRAND_VIOLATIONS_AUDIT.md](./BRAND_VIOLATIONS_AUDIT.md) — Comprehensive audit findings

---

*ENRG.realty Brand Validator — Button & Badge Hierarchy*
*Last Updated: 2026-01-19*
