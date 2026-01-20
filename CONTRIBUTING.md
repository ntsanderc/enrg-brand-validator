# Contributing to ENRG Brand Validator

**Audience:** Developers, designers, and AI agents working on the brand validator.

---

## Core Principles

### 1. Never Invent CSS Classes

**CRITICAL RULE:** Do not create new CSS classes that don't exist in Index.html.

**Why this matters:**
- Invented classes have no defined styles (no padding, no colors, no layout)
- Creates inconsistency across the codebase
- Future contributors won't know your class exists
- Breaks the systematic approach

**The Two Options:**

**Option 1: Use `.card` class (99% of cases)**
```html
<div class="card">
  <h3>Section Title</h3>
  <p>Content with proper 24px padding</p>
</div>
```

**Option 2: Use inline styles (rare cases)**
```html
<div style="background: var(--white); border: 1px solid var(--border); padding: 1.5rem; border-radius: var(--radius-xl);">
  <h3>Custom Styled Box</h3>
</div>
```

**NEVER do this:**
```html
<!-- ❌ VIOLATION - Inventing .content-card class -->
<div class="content-card">
  <h3>Title</h3>
  <!-- NO PADDING! Content cramped! -->
</div>
```

**Pre-flight check before using ANY class:**
1. Does this class exist in Index.html CSS? (Search the file)
2. Is it documented in docs/STYLE_PATTERNS.md?
3. If NO to both: Use `.card` or inline styles instead

---

### 2. Follow 90/10 Neutral-Forward Design

**Purple is for accents, NOT large backgrounds.**

**Correct purple usage:**
- Text colors (headings, links, labels)
- Borders (cards, buttons, dividers)
- Small elements (badges, icons, dots)
- Gradients (subtle, <20% of viewport)

**Incorrect purple usage:**
- ❌ Full-section backgrounds
- ❌ Large hero backgrounds
- ❌ Card backgrounds
- ❌ Modal/overlay backgrounds

**Use neutrals for 90% of the UI:**
- White backgrounds
- Light gray elevated surfaces
- Dark mode equivalents

---

### 3. Use Existing Patterns

All common patterns are documented in [docs/STYLE_PATTERNS.md](docs/STYLE_PATTERNS.md).

**Required reading before making changes:**
- Card & Layout Patterns
- Grid Layouts
- Section Structure
- Button Hierarchy
- Badge Hierarchy
- Color Usage Guidelines

---

## Development Workflow

### Making Changes to Index.html

1. **Create a backup first**
   ```bash
   cp Index.html Index.html.backup-$(date +%Y%m%d)
   ```

2. **Search for existing patterns**
   - Grep for similar components before creating new ones
   - Check docs/STYLE_PATTERNS.md for documented patterns

3. **Test responsively**
   - Desktop (1920px, 1440px, 1280px)
   - Tablet (768px)
   - Mobile (480px, 375px, 320px)

4. **Verify dark mode**
   - Toggle dark mode in the app
   - Ensure all colors adapt properly using CSS variables

5. **Check accessibility**
   - Minimum 4.5:1 contrast for text
   - Minimum 3:1 contrast for UI components
   - Use color + pattern (not color alone)

---

## Common Tasks

### Adding a New Section

Follow the standard section structure:

```html
<section id="section-id" class="collapsible-section" data-category="Category Name" data-bg="elevated">
  <div class="container">
    <!-- Section Header (clickable for collapse) -->
    <div class="section-header" onclick="toggleSection(this.closest('section'))">
      <span class="section-label">Category Name</span>
      <h2 class="section-title" style="color: var(--black);">
        Section Title
        <svg class="section-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </h2>
      <p class="section-subtitle" style="color: var(--gray-dark);">Description</p>
    </div>

    <!-- Content wrapper (collapses) -->
    <div class="section-content">
      <div class="card">
        <h3>Content Title</h3>
        <p>Content here</p>
      </div>
    </div>
  </div>
</section>
```

**Don't forget:**
1. Add section to CHAPTERS array (JavaScript at bottom of file)
2. Add navigation link in header dropdown
3. Use `data-bg="surface"` or `data-bg="elevated"` to alternate backgrounds

---

### Adding Content Within a Section

**Two-column layout:**
```html
<div class="grid grid-2 gap-md">
  <div class="card">Left column</div>
  <div class="card">Right column</div>
</div>
```

**Three-column layout:**
```html
<div class="grid grid-3 gap-md">
  <div class="card">Column 1</div>
  <div class="card">Column 2</div>
  <div class="card">Column 3</div>
</div>
```

**Auto-fit grid (for cards):**
```html
<div class="grid grid-auto-280 gap-md">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <!-- Automatically wraps based on viewport width -->
</div>
```

---

### Adding a Table

Tables MUST use overflow wrapper for mobile:

```html
<div style="overflow-x: auto;">
  <table style="width: 100%; border-collapse: collapse; font-size: 0.8125rem; background: var(--white); border-radius: var(--radius-lg); overflow: hidden;">
    <thead>
      <tr style="background: var(--gray-light);">
        <th style="text-align: left; padding: 0.75rem 1rem; font-weight: 600; color: var(--black);">Header</th>
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

**Why inline styles?**
No `.table` class exists. Tables vary too much (column counts, alignment) to have a single class.

---

### Adding a Code Block

**Dark code block (for HTML, CSS, JavaScript):**
```html
<pre style="background: #1a1a1a; color: #f0f0f0; padding: 1rem; border-radius: var(--radius-md); font-size: 0.7rem; overflow-x: auto; line-height: 1.6;">
<code>&lt;div class="card"&gt;
  &lt;h3&gt;Title&lt;/h3&gt;
&lt;/div&gt;</code>
</pre>
```

**Light code block (for ASCII diagrams, plain text):**
```html
<pre style="background: var(--bg-elevated); border: 1px solid var(--border); padding: 0.75rem; font-size: 0.7rem; color: var(--gray-dark); border-radius: var(--radius-md); overflow-x: auto; line-height: 1.6;">
┌─────────────────┐
│  ASCII Diagram  │
└─────────────────┘
</pre>
```

---

### Using Colors

**Always use CSS variables, never hex codes (except in swatches):**

```css
/* ✅ CORRECT */
color: var(--purple-primary);
background: var(--bg-surface);
border-color: var(--border);

/* ❌ WRONG */
color: #6021E6;
background: #FFFFFF;
border-color: #E5E7EB;
```

**Why?** CSS variables adapt to dark mode automatically.

**Available color variables:**
- `--purple-primary` (#6021E6)
- `--purple-deep` (#290080)
- `--purple-bright` (#8B5CF6)
- `--purple-light` (#A78BFA)
- `--purple-pale` (#DDD6FE)
- `--orange` (#FF6039)
- `--gray-dark` (#374151)
- `--gray-mid` (#6B7280)
- `--gray-light` (#E5E7EB)
- `--gray-pale` (#F3F4F6)
- `--bg-surface` (white in light mode, dark in dark mode)
- `--bg-elevated` (light gray in light mode, lighter dark in dark mode)
- `--border` (#E5E7EB in light mode, darker in dark mode)
- `--black` (#111827)
- `--white` (#FFFFFF)

---

## Button Usage

### Decision Tree

**Is this the PRIMARY action on the page?**
- YES → Use `.btn-primary` (purple background, white text)
- NO → Continue to next question

**Is this a DESTRUCTIVE action? (delete, remove, cancel)**
- YES → Use `.btn-secondary` (white background, gray text)
- NO → Continue to next question

**Is this a TERTIARY action? (learn more, view details)**
- YES → Use `.btn-tertiary` (transparent, purple text)

**Examples:**
```html
<!-- Primary: Create, Save, Submit -->
<button class="btn-primary">Save Changes</button>

<!-- Secondary: Cancel, Go Back, Dismiss -->
<button class="btn-secondary">Cancel</button>

<!-- Tertiary: Learn More, View Details -->
<button class="btn-tertiary">Learn More</button>
```

---

## Badge Usage

### Decision Tree

**Is this showing COMPLETION status?**
- YES → Use `.status-badge` with modifier (`.status-done`, `.status-progress`, `.status-tbd`)

**Is this a CATEGORY label?**
- YES → Use `.section-label` (purple pill badge)

**Is this a COUNT/METRIC?**
- YES → Use `.metric-badge` (gray pill with number)

**Examples:**
```html
<!-- Status badges -->
<span class="status-badge status-done">Complete</span>
<span class="status-badge status-progress">In Progress</span>
<span class="status-badge status-tbd">To Do</span>

<!-- Category label -->
<span class="section-label">Brand Essentials</span>

<!-- Metric badge -->
<span class="metric-badge">12</span>
```

---

## Testing Checklist

Before committing changes:

- [ ] Backup created (`Index.html.backup-YYYYMMDD`)
- [ ] Tested in Chrome, Firefox, Safari
- [ ] Tested responsive (320px, 768px, 1440px viewports)
- [ ] Dark mode works (toggle and verify all colors)
- [ ] No invented CSS classes (all classes exist in Index.html)
- [ ] Follows 90/10 neutral-forward design (purple used sparingly)
- [ ] All colors use CSS variables (not hex codes)
- [ ] Tables have overflow-x wrapper
- [ ] Code blocks use correct style (dark for code, light for ASCII)
- [ ] Accessibility: 4.5:1 contrast minimum
- [ ] Section added to CHAPTERS array (if applicable)
- [ ] Navigation link added to header (if applicable)

---

## File Organization

### Production Files (Keep)
- `Index.html` - Main application
- `Code.gs` - Google Apps Script backend
- `README.md` - Project overview
- `DEPLOYMENT.md` - Deployment instructions
- `CONTRIBUTING.md` - This file
- `CHANGELOG.md` - Version history

### Documentation (Keep in docs/)
- `docs/STYLE_PATTERNS.md` - CSS pattern reference
- `docs/BUTTON_BADGE_HIERARCHY.md` - Design system decision trees
- `docs/BRAND_VIOLATIONS_AUDIT.md` - Brand compliance audit

### Working Documents (Archive)
- All `*_AUDIT.md` files → `archive/audits/`
- All `*_PLAN.md` files → `archive/plans/`
- All `*_REVIEW.md` files → `archive/reviews/`
- All `.backup` files → `archive/backups/`

---

## Common Mistakes to Avoid

### ❌ Inventing CSS Classes
```html
<!-- WRONG -->
<div class="content-card">...</div>
<div class="info-box">...</div>

<!-- CORRECT -->
<div class="card">...</div>
```

### ❌ Purple Backgrounds on Large Elements
```html
<!-- WRONG -->
<section style="background: var(--purple-primary);">...</section>

<!-- CORRECT -->
<section data-bg="surface">...</section>
```

### ❌ Using Hex Codes Instead of Variables
```html
<!-- WRONG -->
<span style="color: #6021E6;">...</span>

<!-- CORRECT -->
<span style="color: var(--purple-primary);">...</span>
```

### ❌ Tables Without Overflow Wrapper
```html
<!-- WRONG -->
<table>...</table>

<!-- CORRECT -->
<div style="overflow-x: auto;">
  <table>...</table>
</div>
```

### ❌ Missing .container in Section
```html
<!-- WRONG -->
<section id="section-name">
  <h2>Title</h2>
</section>

<!-- CORRECT -->
<section id="section-name">
  <div class="container">
    <h2>Title</h2>
  </div>
</section>
```

---

## Questions?

1. Check [docs/STYLE_PATTERNS.md](docs/STYLE_PATTERNS.md) for pattern reference
2. Search Index.html for similar existing components
3. Review this CONTRIBUTING guide
4. Contact: brand@enrg.realty

---

*ENRG.realty Brand Validator - Contributing Guide v1.0*
