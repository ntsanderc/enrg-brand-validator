# View Mode System Implementation

**Date:** January 17, 2026
**Feature:** Dual-mode viewer (Reviewer vs Resource)
**Platform:** Google Apps Script (Vanilla HTML/CSS/JS)

---

## Overview

The ENRG Brand Validator now supports two distinct viewing modes to serve different audiences and use cases:

### 1. Reviewer Mode (Default)
**Purpose:** Leadership reviews proposed brand guidelines with full decision context

**Visible Content:**
- ✅ All brand guideline sections
- ✅ Roadmap section (progress tracking)
- ✅ Brand Decisions Archive (decision history)
- ✅ Comments UI (collaboration panel)
- ✅ Comment markers on sections
- ✅ "TBD" navigation items (pending features)

**Use Case:** Active review cycle, feedback gathering, iteration toward final approval

---

### 2. Resource Mode
**Purpose:** Clean, approved guidelines for day-to-day reference

**Visible Content:**
- ✅ All approved brand guideline sections
- ❌ Roadmap section (hidden)
- ❌ Brand Decisions Archive (hidden)
- ❌ Comments UI (hidden)
- ❌ Comment markers (hidden)
- ❌ "TBD" navigation items (hidden)

**Use Case:** Post-approval reference, daily design/development work, clean documentation

---

## User Experience

### Switching Modes

1. Click **three-dot menu** in header (nav overflow)
2. Click **"Reviewer Mode"** or **"Resource Mode"** button
3. Mode switches instantly (no page reload)
4. Choice is **saved automatically** in browser localStorage

### Visual Indicators

**Reviewer Mode Button:**
- Icon: Document with checkmarks (review icon)
- Label: "Reviewer Mode"
- Shows when in Reviewer mode

**Resource Mode Button:**
- Icon: Open book (reference icon)
- Label: "Resource Mode"
- Shows when in Resource mode

### Persistence

- **First visit:** Defaults to Reviewer mode
- **Subsequent visits:** Remembers last selected mode
- **localStorage key:** `enrg-view-mode`
- **Values:** `"reviewer"` or `"resource"`

---

## Technical Implementation

### CSS Changes (Lines 136-150)

```css
/* View Mode Toggle - Resource mode hides reviewer-only content */
:root[data-view-mode="resource"] #roadmap,
:root[data-view-mode="resource"] #analysis,
:root[data-view-mode="resource"] .comments-wrapper,
:root[data-view-mode="resource"] .comment-marker,
:root[data-view-mode="resource"] .nav-tbd,
:root[data-view-mode="resource"] a[href="#roadmap"]:not(.nav-tbd),
:root[data-view-mode="resource"] a[href="#analysis"] {
  display: none !important;
}

/* Hide Resources dropdown divider if only TBD items remain */
:root[data-view-mode="resource"] .nav-dropdown .nav-dropdown-divider:last-of-type {
  display: none !important;
}

/* View mode icon toggle */
:root[data-view-mode="reviewer"] .icon-reviewer { display: block; }
:root[data-view-mode="reviewer"] .icon-resource { display: none; }
:root[data-view-mode="resource"] .icon-reviewer { display: none; }
:root[data-view-mode="resource"] .icon-resource { display: block; }
```

### HTML Changes (Lines 1421-1425)

Added toggle button to nav overflow menu:

```html
<button id="navViewModeToggle" onclick="toggleViewMode(); closeNavMenu();">
  <svg class="icon-reviewer" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
  <svg class="icon-resource" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none;">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
  <span id="navViewModeLabel">Reviewer Mode</span>
</button>
```

### JavaScript Changes (Lines 6512-6547)

Added three functions for mode management:

```javascript
// View Mode Toggle (Reviewer vs Resource)
function toggleViewMode() {
  var html = document.documentElement;
  var currentMode = html.getAttribute('data-view-mode');
  var newMode = currentMode === 'resource' ? 'reviewer' : 'resource';
  html.setAttribute('data-view-mode', newMode);
  localStorage.setItem('enrg-view-mode', newMode);
  updateViewModeLabel(newMode);
}

function updateViewModeLabel(mode) {
  var label = document.getElementById('navViewModeLabel');
  var btn = document.getElementById('navViewModeToggle');
  if (label) {
    // Show current mode
    label.textContent = mode === 'reviewer' ? 'Reviewer Mode' : 'Resource Mode';
  }
  if (btn) {
    var reviewerIcon = btn.querySelector('.icon-reviewer');
    var resourceIcon = btn.querySelector('.icon-resource');
    if (reviewerIcon && resourceIcon) {
      reviewerIcon.style.display = mode === 'reviewer' ? 'block' : 'none';
      resourceIcon.style.display = mode === 'resource' ? 'block' : 'none';
    }
  }
}

// Initialize view mode from localStorage (default to reviewer)
function initViewMode() {
  var savedMode = localStorage.getItem('enrg-view-mode');
  var mode = savedMode || 'reviewer'; // Default to reviewer mode
  document.documentElement.setAttribute('data-view-mode', mode);
  // Update label after DOM is ready
  setTimeout(function() { updateViewModeLabel(mode); }, 0);
}
initViewMode();
```

---

## Content Hidden in Resource Mode

### Sections (2 sections, ~3,647 lines)
- **Roadmap** (`#roadmap`, 405 lines) - Project progress, pending features
- **Brand Decisions Archive** (`#analysis`, 3,242 lines) - Historical decision context

### UI Elements
- **Comments panel** (`.comments-wrapper`) - Collaboration sidebar
- **Comment markers** (`.comment-marker`) - In-line feedback dots
- **TBD nav items** (`.nav-tbd`) - Pending features in navigation
- **Direct nav links** - Links to `#roadmap` and `#analysis` in Resources dropdown

### Navigation Changes
- Resources dropdown hides Roadmap and Critical Analysis links
- TBD items (Data Viz, Email Sigs, Photography, Motion, Figma, Canva, Assets) hidden
- Dividers adjusted automatically when items are hidden

---

## Benefits

### For Leadership (Reviewer Mode)
- **Full context:** See why decisions were made
- **Progress tracking:** Roadmap shows completion status
- **Collaboration:** Comments enable feedback loop
- **Decision validation:** Archive shows alternatives considered

### For Daily Users (Resource Mode)
- **Clean interface:** No clutter from project management
- **Fast reference:** Just the approved guidelines
- **Professional:** No WIP indicators or comments
- **Focused:** Only essential brand standards visible

### For the Organization
- **Single source of truth:** One file serves both needs
- **No duplication:** No need to maintain separate docs
- **Automatic updates:** Resource mode always shows latest approved content
- **Simple migration:** When ready, Resource mode becomes the final intranet site

---

## File Size Impact

**Added to Index.html:**
- CSS: 18 lines (view mode visibility rules)
- HTML: 9 lines (toggle button)
- JavaScript: 35 lines (toggle functions)
- **Total: 62 lines added** (~0.9% increase)

**No external dependencies** - Pure vanilla implementation

---

## Browser Compatibility

✅ **Chrome/Edge:** Full support (localStorage, CSS attribute selectors)
✅ **Firefox:** Full support
✅ **Safari:** Full support (including iOS)
✅ **Mobile browsers:** Fully responsive

**Minimum requirements:**
- localStorage support (IE8+)
- CSS attribute selectors (IE7+)
- DOM manipulation (all modern browsers)

---

## Testing Checklist

### Functionality
- [x] Toggle switches between modes correctly
- [x] Mode persists across page reloads
- [x] Default to Reviewer mode on first visit
- [x] Comments UI hidden in Resource mode
- [x] Roadmap section hidden in Resource mode
- [x] Analysis section hidden in Resource mode
- [x] TBD nav items hidden in Resource mode
- [x] Button label updates correctly
- [x] Button icon swaps correctly

### Visual
- [x] No layout shift when switching modes
- [x] Navigation dropdowns adjust properly
- [x] Resource mode feels clean (no gaps from hidden content)
- [x] Icons clear and recognizable

### Cross-Browser
- [x] Chrome: All features work
- [x] Firefox: All features work
- [x] Safari: All features work
- [x] Mobile Safari: Touch interactions work
- [x] Mobile Chrome: Touch interactions work

### Dark Mode
- [x] Toggle works in dark mode
- [x] Icons visible in both themes
- [x] Button styles adapt to theme

---

## Future Enhancements (Optional)

### Possible Additions (still GAS-compatible)

1. **Export Resource Mode as Static HTML**
   - Button to download clean version
   - Strips all Reviewer-only content
   - Implementation: 40 lines of JS

2. **Mode-Specific Search Scope**
   - Reviewer mode: Search all content
   - Resource mode: Search only visible sections
   - Implementation: 15 lines of JS

3. **Analytics Tracking**
   - Log mode switches
   - Track which mode is used more
   - Implementation: 10 lines of JS (with Google Analytics)

4. **Keyboard Shortcut**
   - `Cmd/Ctrl + Shift + M` to toggle modes
   - Implementation: 8 lines of JS

5. **Mode Indicator Badge**
   - Small badge in header showing current mode
   - More visible than menu item alone
   - Implementation: 5 lines HTML + 10 lines CSS

---

## Success Metrics

### Before View Mode System:
- ❌ Single view served both reviewers and reference users
- ❌ Roadmap/archive clutter for daily users
- ❌ No way to preview "final" guidelines
- ❌ Comments always visible (even post-approval)

### After View Mode System:
- ✅ Dual-purpose: Review tool + Reference manual
- ✅ Clean Resource mode for daily use
- ✅ Leadership sees full context (Reviewer mode)
- ✅ Simple toggle, saved preference
- ✅ Zero external dependencies
- ✅ Single file architecture preserved

---

## Conclusion

The View Mode system successfully transforms the ENRG Brand Validator into a **dual-purpose platform**:

1. **During Development:** Reviewer mode provides full context for leadership approval
2. **Post-Approval:** Resource mode becomes the clean, reference-only guidelines

**Key Achievement:** Both experiences live in a single GAS-compatible HTML file, with zero performance impact and automatic mode persistence.

The validator now serves the complete lifecycle: **draft → review → iterate → approve → reference**.

---

## Documentation

- **Implementation details:** This document
- **UI patterns:** [STYLE_PATTERNS.md](STYLE_PATTERNS.md#view-mode-system) (lines 9-51)
- **All improvements:** [IMPROVEMENTS_IMPLEMENTED.md](IMPROVEMENTS_IMPLEMENTED.md)
