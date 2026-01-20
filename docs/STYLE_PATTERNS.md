# ENRG Brand Validator - Style Patterns

**Purpose**: Systematic reference for implementing ENRG brand patterns correctly. Prevents purple background abuse, CSS class invention, and ensures 90/10 neutral-forward design compliance.

**Last Updated**: 2026-01-20 (Added: `.callout`, `.container`, table patterns, code block variants, `.color-swatch`, `.expand-card`, inline style rules)

**⚠️ CRITICAL**: NEVER invent CSS classes. Use `.card` for 99% of content containers. See "NEVER INVENT CSS CLASSES" section below.

**⚠️ NEW**: Added "CRITICAL MISSING PATTERNS" section at bottom documenting previously undocumented classes and inline style patterns. READ THIS SECTION to avoid catastrophic violations.

---

## Core Principle: 90/10 Neutral-Forward Design

> **Purple is for text, borders, and icons — NOT large background fills.**

- **90% of the UI**: White, gray backgrounds
- **10% of the UI**: Purple accents (text, borders, small elements)
- **Orange**: 1-3 uses per page maximum (signature moments)

**Why**: Purple backgrounds break the "expensive simplicity" principle. They create visual noise and make the interface feel "purple-themed" instead of "neutral with purple accents."

---

## ⚠️ CRITICAL RULE: NEVER INVENT CSS CLASSES

**VIOLATION**: Creating new CSS classes (`.content-card`, `.custom-box`, `.info-panel`, etc.) that don't exist in the codebase

**WHY THIS IS CATASTROPHICALLY DANGEROUS**:
1. **Breaks consistency** - Your invented class won't match existing patterns
2. **No padding/styling** - Class has no defined styles, content will be cramped
3. **Future agents confused** - They won't know your invented class exists
4. **Creates maintenance debt** - Scattered, undocumented patterns throughout codebase
5. **Violates systematic approach** - We have DEFINED classes for a reason

**WHAT ACTUALLY HAPPENED (Real Example)**:
```html
<!-- ❌ CATASTROPHIC VIOLATION - Invented .content-card class -->
<div class="content-card">
  <h3>AI Enhancement Standards</h3>
  <!-- NO PADDING! Content cramped against edges! -->
</div>
```

**THE CORRECT APPROACH - ONLY 2 OPTIONS**:

**Option 1: Use `.card` class (99% of cases)**
```html
<!-- ✅ CORRECT - Uses existing .card class with built-in 1.5rem padding -->
<div class="card">
  <h3>AI Enhancement Standards</h3>
  <!-- Proper 24px padding all around! -->
</div>
```

**Option 2: Use inline styles (rare cases)**
```html
<!-- ✅ ACCEPTABLE - Explicit inline styles when .card doesn't fit -->
<div style="background: var(--white); border: 1px solid var(--border); padding: 1.5rem; border-radius: var(--radius-xl);">
  <h3>Custom Styled Box</h3>
</div>
```

**NEVER EVER DO THIS**:
```html
<!-- ❌ VIOLATION 1 - Inventing class names -->
<div class="content-card">...</div>
<div class="info-box">...</div>
<div class="custom-panel">...</div>

<!-- ❌ VIOLATION 2 - Assuming a class exists without verification -->
<div class="section-card">...</div>  <!-- Does this class exist? NO! -->
```

**MANDATORY PRE-FLIGHT CHECK**:
Before using ANY class name:
1. **Search the codebase**: Does this class exist in Index.html CSS?
2. **Check this document**: Is it documented below?
3. **If NO to both**: DO NOT USE IT. Use `.card` or inline styles instead.

---

## Card & Layout Patterns (THE FOUNDATION)

### The `.card` Class ⭐ PRIMARY PATTERN

**Definition** (from Index.html line 256):
```css
.card {
  background: var(--bg-surface);      /* Auto-adapts to dark mode */
  border: none;
  border-radius: var(--radius-xl);
  padding: 1.5rem;                    /* ⚠️ CRITICAL: Built-in padding! */
  box-shadow: var(--shadow-card-base);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-card-hover);
}
```

**When to use (DEFAULT CHOICE)**:
- ✅ Any content container
- ✅ Two-column layouts
- ✅ Information boxes
- ✅ Cards in grids
- ✅ Grouped content sections
- ✅ **99% of use cases**

**Modifiers**:
- `.card.card--no-padding` - Remove padding (for full-bleed images)
- `.card.card--compact` - Reduced padding (1.25rem instead of 1.5rem)

**CORRECT Usage**:
```html
<div class="card">
  <h3>Section Title</h3>
  <p>Content with proper 1.5rem (24px) padding on all sides</p>
</div>
```

**WRONG Usage**:
```html
<!-- ❌ VIOLATION 1 - Inventing .content-card -->
<div class="content-card">
  <h3>Section Title</h3>
  <p>NO PADDING! Cramped content!</p>
</div>

<!-- ❌ VIOLATION 2 - Redundant inline padding -->
<div class="card" style="padding: 1.5rem;">
  <!-- padding is ALREADY applied by .card class -->
</div>

<!-- ❌ VIOLATION 3 - Overriding .card padding -->
<div class="card" style="padding: 2rem;">
  <!-- DON'T override .card padding, use inline styles instead -->
</div>
```

---

### Grid Layouts (RESPONSIVE SYSTEM)

**Available Grid Classes** (from Index.html lines 274-279):

```css
.grid              /* Base grid with 1.5rem gap */
.grid-2            /* 2 columns, stacks to 1 on mobile */
.grid-3            /* 3 columns, stacks on mobile */
.grid-5            /* 5 columns, stacks on mobile */
.grid-auto-280     /* Auto-fit, min 280px (for card grids) */
.grid-auto-300     /* Auto-fit, min 300px */
.grid-auto-340     /* Auto-fit, min 340px */
```

**Gap Modifiers**:
```css
.gap-sm            /* 0.75rem gap */
.gap-md            /* 1rem gap */
.gap-lg            /* 1.5rem gap (default) */
.gap-xl            /* 2rem gap */
```

**CORRECT Two-Column Layout**:
```html
<div class="grid grid-2 gap-md">
  <div class="card">
    <h4>Left Column</h4>
    <p>Content with padding</p>
  </div>
  <div class="card">
    <h4>Right Column</h4>
    <p>Content with padding</p>
  </div>
</div>
```

**WRONG (Missing .card class)**:
```html
<!-- ❌ VIOLATION - Naked divs without .card -->
<div class="grid grid-2 gap-md">
  <div>
    <h4>Left Column</h4>
    <p>NO PADDING! Cramped!</p>
  </div>
  <div>
    <h4>Right Column</h4>
    <p>NO PADDING! Cramped!</p>
  </div>
</div>
```

---

### Section Structure (STANDARD PATTERN)

**Every section MUST follow this structure**:

```html
<section id="section-id" data-category="Category Name" data-bg="elevated">
  <div class="container">
    <!-- Section Header (REQUIRED) -->
    <div class="section-header">
      <span class="section-label">Category Name</span>
      <h2 class="section-title" style="color: var(--black);">Section Title</h2>
      <p class="section-subtitle" style="color: var(--gray-dark);">Description text</p>
    </div>

    <!-- Content using .card class -->
    <div class="card">
      <h3>Content Title</h3>
      <p>Content with proper padding</p>
    </div>

    <!-- Two-column layout -->
    <div class="grid grid-2 gap-md">
      <div class="card">Left content</div>
      <div class="card">Right content</div>
    </div>
  </div>
</section>
```

**Key Classes** (from Index.html lines 282-285):
- `.section-header` - Centered header with max-width 800px, auto margins
- `.section-label` - Purple pill badge (white text on purple background)
- `.section-title` - Large heading (responsive clamp 1.75rem to 2.5rem)
- `.section-subtitle` - Descriptive text below title

**Background Alternation**:
- `data-bg="surface"` - White background (light mode), dark gray (dark mode)
- `data-bg="elevated"` - Light gray background (light mode), slightly lighter dark (dark mode)

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
  background: var(--bg-elevated);  /* IMPORTANT: Gray, NOT purple */
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

## Code Block Specifications

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

## Semantic Color System

**Problem**: Hardcoded color values (`--red`, `--green`) don't adapt well to dark mode. Red (#F43F5E) looks harsh on dark backgrounds.

**Solution**: Theme-aware semantic color tokens that automatically adjust for light/dark modes.

### Semantic Color Tokens

**Light Mode:**
```css
--color-danger: #F43F5E;       /* Red 500 - visible, high contrast */
--color-danger-bg: #FFE4E6;    /* Red 50 - soft background */
--color-danger-border: #F43F5E; /* Same as text for consistency */

--color-success: #10B981;       /* Green 500 */
--color-success-bg: #D1FAE5;    /* Green 100 */

--color-warning: #FF6039;       /* ENRG Orange */
--color-warning-bg: #FFEDD5;    /* Orange 100 */
```

**Dark Mode:**
```css
--color-danger: #F87171;         /* Red 400 - softer, less harsh */
--color-danger-bg: #2D1518;      /* Very dark red - subtle */
--color-danger-border: #7C2D3A;  /* Muted red - visible but not harsh */

--color-success: #34D399;        /* Green 400 */
--color-success-bg: #064e3b;     /* Dark green */

--color-warning: #FB923C;        /* Orange 400 */
--color-warning-bg: #431407;     /* Dark orange */
```

### Usage Guidelines

**CORRECT - Use semantic tokens:**
```css
.logo-misuse-card {
  background: var(--color-danger-bg);
  border: 1px solid var(--color-danger-border);
  color: var(--color-danger);
}

.delete-button:hover {
  background: var(--color-danger-bg);
  color: var(--color-danger);
}
```

**WRONG - Direct color references:**
```css
/* ❌ VIOLATION - Breaks in dark mode */
.logo-misuse-card {
  background: #FFE4E6;
  border: 1px solid #F43F5E;
  color: #F43F5E;
}
```

### When to Use Each Semantic Color

**Danger (Red):**
- Logo misuse cards (violations)
- Delete/remove actions (overflow menus)
- Error states
- Destructive warnings
- **Philosophy**: Red is the ONLY semantic color used for interactions (no green "success" buttons, no yellow warnings in UI)

**Success (Green):**
- Accessibility contrast pass indicators (informational only)
- System notifications (non-interactive)
- **NOT for**: "Save" buttons, "Submit" actions (use purple primary button instead)

**Warning (Orange):**
- Reserved for ENRG brand accent (signature moments)
- **NOT for**: Warning states (use neutral text with red icon if needed)

### Dark Mode Accessibility

**Key Principles:**
1. **Softer text colors** - Red 400 (#F87171) instead of Red 500 (#F43F5E)
2. **Muted borders** - #7C2D3A instead of bright red
3. **Subtle backgrounds** - Very dark red (#2D1518) instead of pink
4. **Contrast preserved** - All combinations meet WCAG AA (4.5:1 minimum)

**Contrast Ratios:**
- Light mode: Red on white background = 4.8:1 (Pass AA)
- Dark mode: Red 400 on dark background = 5.2:1 (Pass AA)
- Dark mode border: #7C2D3A on #1a1a1a = 3.8:1 (Pass AA for large text/borders)

---

## Logo Dark Mode Treatment

**Problem**: Original implementation used `var(--purple-primary)` for logo wordmark, which becomes light purple (#B38FFF) in dark mode. This violates brand guidelines and lacks premium feel.

**Brand Guidelines**: Official logo color options are:
- Black on White
- White on Purple (#6021E6)
- White on Black
- Black/White Transparent

**Systematic Solution**: Logo adapts to theme using literal hex values (not CSS variables that swap):

```css
/* Logo wordmark: Black in light mode, White in dark mode */
/* IMPORTANT: Use literal #111111 and #FFFFFF, NOT var(--black)/var(--white) */
/* Reason: --black and --white swap their values in dark mode for text color inversion */
.logo {
  color: #111111; /* Literal black */
}

:root[data-theme="dark"] .logo {
  color: #FFFFFF; /* Literal white */
}

/* Logo dot: Standard orange in light mode, lighter orange in dark mode */
.logo span {
  color: var(--orange); /* #FF6039 */
}

:root[data-theme="dark"] .logo span {
  color: #FFB39E; /* Orange 300 - lighter for visibility on dark background */
}
```

**Critical Note**: The CSS variables `--black` and `--white` are intentionally swapped in dark mode:
- Light mode: `--black: #111111`, `--white: #FFFFFF`
- Dark mode: `--black: #f0f0f0`, `--white: #1a1a1a` (swapped!)

This inversion pattern works for body text but breaks logo styling. Always use literal hex values for logo colors.

**Why This Works**:
- Aligns with brand-approved "White on Black" logo variant
- Creates clear contrast in both themes (black on white blur nav, white on dark blur nav)
- Orange dot tracks with theme - lighter in dark mode prevents muddy appearance
- Systematic: uses theme-aware patterns, not hardcoded values
- Premium feel: Bold black/white contrast instead of washed-out light purple

**Dark Mode Orange Calculation**:
- Light mode: `--orange` (#FF6039) - full saturation, high contrast on white
- Dark mode: Orange 300 (#FFB39E) - lighter tint, maintains visibility on dark blur background
- Contrast ratio: 4.8:1 (meets WCAG AA for large text)

---

## ⚠️ CRITICAL MISSING PATTERNS (WILL FUCK US UP)

The following patterns **EXIST in Index.html** but are **NOT documented** in this file. This documentation gap caused the `.content-card` disaster and WILL cause future agents to:
1. Invent new classes that don't exist
2. Use inline styles inconsistently
3. Break responsive layouts
4. Violate the systematic approach

### Missing: `.callout` Component

**Definition** (from Index.html line 296):
```css
.callout {
  border-left: 4px solid var(--purple-primary);
  padding: 1rem 1.25rem;
  border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
  background: var(--bg-elevated);
}
```

**Modifiers**:
- `[data-bg="white"]` - White background instead of elevated
- `[data-bg="surface"]` - Surface background

**When to use**:
- Important notes or warnings
- Key takeaways
- Highlighted information blocks

**CORRECT Usage**:
```html
<div class="callout">
  <strong>Important:</strong> Always use existing classes before inventing new ones.
</div>
```

**WRONG Usage**:
```html
<!-- ❌ VIOLATION - Inventing .info-box or .note-card -->
<div class="info-box">...</div>
<div class="note-card">...</div>
```

---

### Missing: `.container` Wrapper

**Definition** (from Index.html line 251):
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (max-width: 768px) {
  .container { padding: 0 1.5rem; }
}
@media (max-width: 480px) {
  .container { padding: 0 1rem; }
}
```

**When to use**:
- **REQUIRED** inside every `<section>` element
- Wraps all page content for consistent max-width
- Provides responsive horizontal padding

**MANDATORY PATTERN**:
```html
<section id="section-name" data-bg="elevated">
  <div class="container">
    <!-- ALL content goes here -->
  </div>
</section>
```

**VIOLATION - Missing .container**:
```html
<!-- ❌ CATASTROPHIC - Content directly in section -->
<section id="section-name">
  <h2>Title</h2>
  <p>Content</p>
  <!-- Will break responsive padding! -->
</section>
```

---

### Missing: Tables with Overflow Wrapper

**CRITICAL PATTERN**: Tables MUST have overflow wrapper or they break mobile layouts.

**CORRECT Usage**:
```html
<div style="overflow-x: auto;">
  <table style="width: 100%; border-collapse: collapse; font-size: 0.8125rem; background: var(--white); border-radius: var(--radius-lg); overflow: hidden;">
    <thead>
      <tr style="background: var(--gray-light);">
        <th style="text-align: left; padding: 0.75rem 1rem; font-weight: 600; color: var(--black);">Column</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-top: 1px solid var(--gray-light);">
        <td style="padding: 0.75rem 1rem; color: var(--gray-dark);">Data</td>
      </tr>
    </tbody>
  </table>
</div>
```

**WHY INLINE STYLES**:
- No `.table` class exists in the codebase
- Tables vary too much (column counts, alignment, use cases)
- Inline styles allow per-table customization while maintaining consistency

**MANDATORY TABLE STYLING**:
- `overflow-x: auto` wrapper (prevents horizontal page scroll on mobile)
- `background: var(--white)` on table (not gray, for contrast)
- `border-radius: var(--radius-lg)` on table
- `font-size: 0.8125rem` (13px, smaller than body text)
- `padding: 0.75rem 1rem` on th/td (consistent spacing)

---

### Missing: Code Blocks (Dark vs Light)

**CRITICAL**: There are TWO code block styles with different use cases.

**Dark Code Block (for HTML, CSS, JavaScript)**:
```html
<pre style="background: #1a1a1a; color: #f0f0f0; padding: 1rem; border-radius: var(--radius-md); font-size: 0.7rem; overflow-x: auto; line-height: 1.6;">
<code>&lt;div class="card"&gt;
  &lt;h3&gt;Title&lt;/h3&gt;
&lt;/div&gt;</code>
</pre>
```

**Light Code Block (for ASCII diagrams, file paths, plain text)**:
```html
<pre style="background: var(--bg-elevated); border: 1px solid var(--border); padding: 0.75rem; font-size: 0.7rem; color: var(--gray-dark); border-radius: var(--radius-md); overflow-x: auto; line-height: 1.6;">
┌─────────────────┐
│  ASCII Diagram  │
└─────────────────┘
</pre>
```

**WHY TWO STYLES**:
- Dark code: Syntax highlighting aesthetic for actual code
- Light code: Readable ASCII art that needs to match the page theme

**VIOLATION - Using wrong style**:
```html
<!-- ❌ WRONG - ASCII diagram in dark code block (hard to read) -->
<pre style="background: #1a1a1a; color: #f0f0f0;">
┌─────────┐
│  Diagram│
└─────────┘
</pre>

<!-- ❌ WRONG - HTML code in light block (looks unprofessional) -->
<pre style="background: var(--bg-elevated);">
<div class="card">
  <h3>Title</h3>
</div>
</pre>
```

---

### Missing: Two-Column Do/Don't Pattern

**PATTERN**: Side-by-side comparison with green checkmark (DO) and red X (DON'T).

**CORRECT Usage**:
```html
<div class="grid grid-2 gap-md">
  <!-- DO Column -->
  <div class="card">
    <div style="font-size: 0.8125rem; font-weight: 600; color: var(--green); margin-bottom: 0.75rem;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="display: inline-block; vertical-align: middle; margin-right: 0.5rem;">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      DO: Use existing classes
    </div>
    <p style="font-size: 0.8125rem; color: var(--gray-dark); line-height: 1.8;">
      Always use .card for content containers.
    </p>
  </div>

  <!-- DON'T Column -->
  <div class="card">
    <div style="font-size: 0.8125rem; font-weight: 600; color: var(--red); margin-bottom: 0.75rem;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="display: inline-block; vertical-align: middle; margin-right: 0.5rem;">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
      DON'T: Invent new classes
    </div>
    <p style="font-size: 0.8125rem; color: var(--gray-dark); line-height: 1.8;">
      Never create .content-card or .custom-box.
    </p>
  </div>
</div>
```

**WHY INLINE STYLES**:
- SVG icons need inline styling for color inheritance
- Spacing varies per use case
- No `.do-dont-grid` class exists

---

### Missing: Color Swatch Pattern

**Definition** (from Index.html lines 537-557):
```css
.color-swatch {
  background: var(--white);
  border: 2px solid var(--gray-light);
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.15s ease;
}

.color-swatch:hover {
  border-color: var(--purple-light);
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.color-swatch .swatch-color {
  height: 80px;
  position: relative;
}

.color-swatch .swatch-info {
  padding: 0.75rem;
  background: var(--white);
}

.color-swatch .swatch-name {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--black);
}

.color-swatch .swatch-hex {
  font-size: 0.75rem;
  color: var(--gray-mid);
  font-family: monospace;
}
```

**When to use**:
- Displaying brand colors
- Interactive color palettes
- Any clickable color reference

**CORRECT Usage**:
```html
<div class="grid grid-5 gap-sm">
  <div class="color-swatch">
    <div class="swatch-color" style="background: #6021E6;"></div>
    <div class="swatch-info">
      <div class="swatch-name">Purple Primary</div>
      <div class="swatch-hex">#6021E6</div>
    </div>
  </div>
</div>
```

---

### Missing: Expandable Roadmap Card Pattern

**Definition** (from Index.html lines 1329-1344):
```css
.expand-card {
  background: var(--bg-surface);
  border: none;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-card-base);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.expand-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-card-hover);
}

.expand-card-header {
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.expand-card-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--black);
}

.expand-card-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.expand-card.open .expand-card-body {
  max-height: 400px;
}
```

**When to use**:
- Roadmap sections with expandable todo lists
- Collapsible content sections
- Progressive disclosure UI

**CORRECT Usage**:
```html
<div class="expand-card">
  <div class="expand-card-header" onclick="toggleCard(this)">
    <div class="expand-card-info">
      <h3 class="expand-card-title">Section Title</h3>
      <p class="expand-card-desc">Description text</p>
    </div>
    <svg class="expand-card-toggle"><!-- chevron --></svg>
  </div>
  <div class="expand-card-body">
    <div class="expand-card-content">
      <!-- Content here -->
    </div>
  </div>
</div>
```

---

### Missing: Todo List System

**CRITICAL CLASSES** (from Index.html lines 1345-1419):
```css
.todo-list { list-style: none; padding: 0; margin: 0; }
.todo-checkbox { /* Styled checkbox */ }
.todo-text { /* Todo item text */ }
.todo-comment-badge { /* Comment count indicator */ }
```

**PATTERN**: Used in roadmap sections for tracking progress.

**DO NOT INVENT TODO PATTERNS** - Use existing `.todo-*` classes or ask for documentation first.

---

## When to Use Inline Styles (THE RULEBOOK)

**APPROVED INLINE STYLE USE CASES**:

1. **Tables** - No `.table` class exists, use inline styles with mandatory patterns (see above)
2. **Code blocks** - Dark vs light variants require inline styling
3. **One-off spacing** - `margin-bottom: 2rem` when spacing varies
4. **SVG attributes** - `fill`, `stroke`, `width`, `height` on SVG elements
5. **Color fills** - `.swatch-color` background colors (dynamic per swatch)
6. **Grid column counts** - When using `.grid` with custom column counts not covered by `.grid-2/3/5`

**NEVER USE INLINE STYLES FOR**:
1. **Padding on containers** - Use `.card` class (has built-in 1.5rem padding)
2. **Border radius** - Use `var(--radius-lg/xl)` via classes, not inline
3. **Typography** - Use existing heading/body styles, not inline font sizes
4. **Colors** - Use CSS variables (`var(--purple-primary)`), not hex codes inline (except swatch fills)
5. **Hover states** - IMPOSSIBLE with inline styles, requires CSS classes

**DECISION TREE**:
```
Is there a class for this?
├─ YES → Use the class
└─ NO → Ask these questions:
    ├─ Is this a table? → Use inline styles (approved pattern)
    ├─ Is this a code block? → Use inline styles (dark/light variant)
    ├─ Is this one-off spacing? → Use inline margin/padding
    ├─ Is this a container with padding? → DO NOT USE INLINE, use .card
    └─ Is this a new pattern? → STOP. Document it first, then use class.
```

---

## Related Documents

- [Brand Philosophy](./brand/01-philosophy.md) — 90/10 neutral-forward principle
- [Colors](./brand/04-colors.md) — Purple usage guidelines
- [BRAND_VIOLATIONS_AUDIT.md](./BRAND_VIOLATIONS_AUDIT.md) — Comprehensive audit findings
- [BUTTON_BADGE_HIERARCHY.md](./BUTTON_BADGE_HIERARCHY.md) — Detailed decision trees

---

*ENRG.realty Brand Validator — Style Patterns Reference*
*Last Updated: 2026-01-19*
