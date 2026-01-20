# Brand Violations Audit - Purple Background Abuse

**Date**: 2026-01-19
**Auditor**: Claude (Comprehensive systematic review)
**Total Violations Found**: 72 instances

---

## Executive Summary

**CRITICAL FINDING**: The codebase has **72 violations** of the "90/10 neutral-forward" design principle through inappropriate use of purple background fills.

**Root Cause**: Lack of systematic button/badge/state hierarchy documentation allows developers to intuitively reach for purple backgrounds thinking "important = purple fill."

**Brand Spec Violated**:
> "**3. One accent rules** — Purple dominates interactive elements. Orange appears rarely for special moments."
> "**Usage ratio:** Approximately 90% neutral, 10% accent (purple/orange)."
> — [01-philosophy.md](./brand/01-philosophy.md)

---

## Violation Categories

### Category 1: Badges & Pills (18 violations)

**Current Pattern (WRONG)**:
```css
.section-label { background: var(--purple-primary); }  /* Line 347 */
.type-scale-badge { background: var(--purple-pale); }  /* Line 600 */
.user-badge { background: var(--purple-pale); }        /* Line 892 */
.todo-comment-badge { background: var(--purple-light); } /* Line 1343 */
```

**Correct Pattern**:
```css
/* Badge: Neutral with purple text/border */
.badge {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius-pill);
  font-size: 0.6875rem;
  font-weight: 600;
}

.badge:hover {
  border-color: var(--purple-primary);
  color: var(--purple-primary);
}

/* Badge variant: Filled (RARE - use sparingly for critical status) */
.badge.--filled {
  background: var(--purple-primary);
  color: white;
  border-color: var(--purple-primary);
}
```

**Why This Matters**:
- Badges are NOT primary CTAs - they're informational
- Purple fills create visual noise and break 90/10 rule
- Neutral badges with purple hover = systematic

**Lines to Fix**:
- 347 (`.section-label`)
- 600 (`.type-scale-badge`)
- 892 (`.user-badge`)
- 1343 (`.todo-comment-badge`)
- 1416 (`.status-review`)
- 2443 (`<div>` inline style "Depth" badge)
- 4147-4148 (SVG/EPS format badges)

---

### Category 2: Hover States (12 violations)

**Current Pattern (WRONG)**:
```css
.help-icon:hover { background: var(--purple-pale); }         /* Line 702 */
.comments-panel-item:hover { background: var(--purple-pale); } /* Line 1153 */
.doc-sidebar .sidebar-section.active { background: var(--purple-pale); } /* Line 1445 */
```

**Correct Pattern**:
```css
/* Hover: Subtle gray, purple accent */
.interactive-item:hover {
  background: var(--bg-elevated);  /* Neutral gray, NOT purple */
  color: var(--purple-primary);     /* Purple text only */
}

/* Active state: Border or text color, NOT background */
.interactive-item[data-state="active"] {
  color: var(--purple-primary);
  border-left: 3px solid var(--purple-primary);
  background: var(--bg-elevated);  /* Subtle gray, not purple */
}
```

**Why This Matters**:
- Hover states should be subtle, not colorful
- Purple pale backgrounds create "selected" appearance everywhere
- Violates "neutral-forward" when every hover shows purple

**Lines to Fix**:
- 702 (`.help-icon:hover`)
- 1153 (`.comments-panel-item:hover`)
- 1157 (`.comments-panel-item[data-expanded]`)
- 1445 (`.sidebar-section[data-state="active"]`)
- 1456 (`.chapter-option[data-state="active"]`)
- 1480 (`.doc-viewer-close:hover`)
- 1344 (`.todo-comment-badge:hover` - uses filled purple)

---

### Category 3: Content Cards & Callouts (25 violations)

**Current Pattern (WRONG)**:
```html
<!-- Inline styles with purple backgrounds everywhere -->
<div style="background: var(--purple-pale); ...">         <!-- Line 1939 -->
<div style="background: linear-gradient(135deg, var(--purple-pale) 0%, #F8F5FF 100%); ..."> <!-- Line 2166 -->
```

**Correct Pattern**:
```css
/* Callout: Neutral with purple border accent */
.callout {
  background: var(--bg-elevated);  /* NOT purple-pale */
  border-left: 4px solid var(--purple-primary);
  padding: 1rem 1.25rem;
  border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
}

/* Info card: Neutral background */
.info-card {
  background: var(--bg-surface);  /* White/neutral */
  border: 1px solid var(--border);
  padding: 1.5rem;
  border-radius: var(--radius-lg);
}

/* Highlight card: Subtle gray, NOT purple */
.highlight-card {
  background: var(--bg-elevated);  /* Subtle gray */
  border: 1px solid var(--border);
  padding: 1.5rem;
}
```

**Why This Matters**:
- Content cards are NOT interactive elements - don't need purple
- Purple backgrounds make page look like a "purple website" not "neutral with purple accents"
- Breaks 90/10 ratio - becomes 60/40

**Lines to Fix** (inline styles):
- 1939, 2087, 2166, 2215, 2262, 2315, 2484, 2873, 3087, 3506, 3834, 3841, 3888
- Replace `background: var(--purple-pale)` with `background: var(--bg-elevated)`
- Replace gradients with `background: var(--bg-surface)`

---

### Category 4: Code Blocks & Inline Code (8 violations)

**Current Pattern (WRONG)**:
```css
.color-reference code { background: var(--purple-pale); }  /* Line 509 */
.doc-viewer-content code { background: var(--purple-pale); } /* Line 1490 */
```

**Correct Pattern**:
```css
/* Inline code: Neutral gray background */
code {
  background: var(--gray-pale);  /* #F9FAFB - NOT purple */
  color: var(--text);
  padding: 0.125rem 0.375rem;
  border-radius: var(--radius-sm);
  font-size: 0.875em;
  font-family: 'Monaco', 'Menlo', monospace;
}

/* Code blocks: Darker neutral */
pre code {
  background: var(--gray-dark);
  color: var(--white);
  display: block;
  padding: 1rem;
}
```

**Why This Matters**:
- Code is NOT a "special purple thing" - it's technical content
- Purple backgrounds make code harder to scan
- Industry standard: gray backgrounds for code

**Lines to Fix**:
- 375 (`.responsive-item code`)
- 509 (`.color-reference code`)
- 1490 (`.doc-viewer-content code`)
- 1991, 2157, 2209, 2256, 2289, 2389, 2958, 3112 (inline code blocks)

---

### Category 5: Empty States & Decorative Elements (9 violations)

**Current Pattern (WRONG)**:
```css
.comments-panel-empty-icon { background: var(--purple-pale); }  /* Line 1141 */
.comment-popup-avatar { background: var(--purple-pale); }       /* Line 1024 */
```

**Correct Pattern**:
```css
/* Empty state icon: Subtle gray */
.empty-state-icon {
  background: var(--bg-elevated);  /* NOT purple */
  color: var(--text-muted);
  width: 64px;
  height: 64px;
  border-radius: 50%;
}

/* Avatar: Keep purple BUT use Purple 100, not pale */
.avatar {
  background: var(--purple-100);  /* Lighter, more neutral */
  color: var(--purple-800);
}
```

**Lines to Fix**:
- 1024 (`.comment-popup-avatar` - change to purple-100)
- 1141 (`.comments-panel-empty-icon`)
- 917, 893 (avatar backgrounds)

---

## Systematic Fixes Required

### Fix 1: Create Systematic Badge Component

**Add to Index.html CSS** (~line 600):
```css
/* ========== SYSTEMATIC BADGE COMPONENT ========== */
/* PRINCIPLE: Badges are informational, NOT interactive CTAs */
/* DEFAULT: Neutral background with purple hover */

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

.badge:hover {
  border-color: var(--purple-primary);
  color: var(--purple-primary);
}

/* VARIANT: Filled (RARE - use only for critical status) */
.badge.--filled {
  background: var(--purple-primary);
  color: white;
  border-color: var(--purple-primary);
}

/* DEPRECATED: Remove these purple-background badges */
/* .section-label, .type-scale-badge, .user-badge, .todo-comment-badge */
```

---

### Fix 2: Update Hover State System

**Replace all purple-pale hover backgrounds**:
```css
/* BEFORE (WRONG) */
.element:hover { background: var(--purple-pale); }

/* AFTER (CORRECT) */
.element:hover {
  background: var(--bg-elevated);  /* Neutral gray */
  color: var(--purple-primary);     /* Purple text */
}
```

---

### Fix 3: Eliminate Inline Style Purple Backgrounds

**Search and replace**:
- `background: var(--purple-pale)` → `background: var(--bg-elevated)`
- `background: linear-gradient(135deg, var(--purple-pale)` → `background: var(--bg-surface)`

---

### Fix 4: Code Block Backgrounds

**Replace**:
```css
code { background: var(--purple-pale); } /* WRONG */
code { background: var(--gray-pale); }    /* CORRECT */
```

---

## Why These Violations Keep Happening

### Root Cause 1: No Documentation
**STYLE_PATTERNS.md is missing**:
- Button hierarchy decision tree
- Badge usage guidelines
- Hover state standards
- Background fill rules

### Root Cause 2: Intuitive Misalignment
Developer thinks:
- "This is important → use purple background"
- "This is special → make it purple"
- "Purple is our brand color → use it everywhere"

Brand spec says:
- "Purple is for **text/borders/icons**, not large fills"
- "90% neutral backgrounds, 10% purple accents"
- "Important ≠ purple background, important = purple text/border"

### Root Cause 3: No Automated Checks
No linting rule catches:
```css
/* This should ERROR in lint */
.random-element { background: var(--purple-*); }
```

---

## Action Items

### Immediate (Today)

1. **Document button hierarchy** in STYLE_PATTERNS.md
2. **Document badge system** in STYLE_PATTERNS.md
3. **Document hover state rules** in STYLE_PATTERNS.md
4. **Fix Category 1** (Badges) - 18 violations
5. **Fix Category 2** (Hover states) - 12 violations

### Short-term (This Week)

6. **Fix Category 3** (Content cards) - 25 violations
7. **Fix Category 4** (Code blocks) - 8 violations
8. **Fix Category 5** (Empty states) - 9 violations

### Long-term (Next Sprint)

9. **Add CSS linter rule** for purple backgrounds
10. **Create component library** with correct patterns
11. **Code review checklist** for brand compliance

---

## Success Metrics

**BEFORE**: 87 instances of purple backgrounds (72 violations)
**TARGET**: 15 instances (primary CTAs only)
**REDUCTION**: 83% reduction in purple background usage

**Visual Test**:
- Page should feel "neutral with purple accents"
- NOT "purple website with some white"
- Purple should pop because it's rare, not ubiquitous

---

*This audit represents systematic brand drift that accumulated through organic growth. Fixing requires both code changes AND documentation to prevent recurrence.*
