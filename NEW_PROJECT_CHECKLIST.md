# ENRG New Project Setup Checklist

Use this checklist when starting any new ENRG project to ensure brand consistency from day one.

---

## 📋 Pre-Development Setup

### Step 1: Copy Design System Files

Copy these files from the [enrg-brand-validator](https://github.com/ntsanderc/enrg-brand-validator) repo:

- [ ] `ENRG_DESIGN_SYSTEM.md` → Copy to project root
- [ ] `.cursorrules` → Copy to project root (for Cursor/AI assistants)
- [ ] `docs/brand/` → Copy entire folder (optional, for full reference)

**Quick command:**
```bash
curl -o ENRG_DESIGN_SYSTEM.md https://raw.githubusercontent.com/ntsanderc/enrg-brand-validator/main/ENRG_DESIGN_SYSTEM.md
curl -o .cursorrules https://raw.githubusercontent.com/ntsanderc/enrg-brand-validator/main/.cursorrules
```

---

## 🎨 Design Tokens Setup

### Step 2: Add CSS Variables

Create `styles/tokens.css` (or equivalent) with ENRG design tokens:

```css
:root {
  /* Purple Scale */
  --purple-900: #1E005E;
  --purple-800: #290080;  /* UI primary (light mode) */
  --purple-700: #3604A2;
  --purple-600: #4A10C4;
  --purple-500: #6021E6;  /* Brand purple */
  --purple-400: #7534FF;
  --purple-300: #9461FF;
  --purple-200: #B38FFF;  /* UI primary (dark mode) */
  --purple-100: #D2BDFF;
  --purple-50:  #F1EAFF;

  /* Orange (use sparingly!) */
  --orange: #FF6039;

  /* Neutrals */
  --white:   #FFFFFF;
  --gray-50:  #F9FAFB;
  --gray-100: #F3F4F6;
  --gray-200: #E5E7EB;
  --gray-300: #D1D5DB;
  --gray-400: #9CA3AF;
  --gray-500: #6B7280;
  --gray-600: #4B5563;
  --gray-700: #374151;
  --gray-900: #111111;

  /* Semantic */
  --success: #10B981;
  --error: #F43F5E;

  /* Spacing (8px base) */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-6:  24px;
  --space-8:  32px;
  --space-12: 48px;
  --space-16: 64px;

  /* Typography */
  --font-brand: 'Plus Jakarta Sans', sans-serif;
  --font-tool:  'Inter', sans-serif;

  --text-xs:   12px;
  --text-sm:   13px;
  --text-base: 15px;
  --text-md:   17px;
  --text-lg:   20px;
  --text-xl:   24px;

  /* Border radius */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #111111;
    --bg-secondary: #1E1E1E;
    --text-primary: #FFFFFF;
    --text-secondary: #9CA3AF;
    --ui-primary: var(--purple-200);  /* Lighter purple for dark mode */
  }
}
```

### Step 3: Load Fonts

Add to `<head>` or `_document.tsx`:

```html
<!-- Marketing/Brand Projects: Use Plus Jakarta Sans -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- Internal Tools: Use Inter -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

---

## 🚀 Project Configuration

### Step 4: Update package.json

- [ ] Set project name with `enrg-` prefix (e.g., `enrg-discovery-guide`)
- [ ] Add description mentioning ENRG.realty
- [ ] Set repository URL under `ntsanderc` or organization

### Step 5: Create .gitignore

```gitignore
# Dependencies
node_modules/

# Environment variables
.env
.env.local

# Build outputs
dist/
build/
.next/

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
```

### Step 6: Add README.md

Include:
- [ ] Project description
- [ ] Link to ENRG Brand Validator: https://github.com/ntsanderc/enrg-brand-validator
- [ ] Note about design system: "See `ENRG_DESIGN_SYSTEM.md` for brand guidelines"

---

## ✅ Brand Compliance Checklist

### Typography
- [ ] Using Plus Jakarta Sans (brand) OR Inter (tools) — not both mixed
- [ ] Font weights: 300, 400, 500, 600, 700 only
- [ ] Base font size: 15px for body text
- [ ] Line heights: 1.5 for body, 1.2-1.3 for headings

### Colors
- [ ] Primary buttons use Purple 800 (`#290080`)
- [ ] Orange usage ≤3 instances per page (high-emphasis CTAs only)
- [ ] 90% neutral (white/gray), 10% accent (purple/orange)
- [ ] All text meets 4.5:1 contrast ratio
- [ ] Dark mode uses Purple 200 (`#B38FFF`) for interactive elements

### Spacing
- [ ] Using 8px base unit (increments: 4, 8, 16, 24, 32, 48)
- [ ] Card padding: 24px minimum
- [ ] Section gaps: 48px minimum
- [ ] Layouts feel spacious (generous white space)

### Components
- [ ] Buttons have 12px vertical, 24px horizontal padding
- [ ] Border radius: 8px (buttons), 12px (cards)
- [ ] Focus indicators: 2px purple outline with offset
- [ ] Cards have subtle shadow: `0 1px 3px rgba(0,0,0,0.1)`

### Accessibility
- [ ] All interactive elements keyboard accessible
- [ ] Visible focus indicators on all focusable elements
- [ ] ARIA labels where needed
- [ ] Semantic HTML (proper heading hierarchy)
- [ ] Alt text for all images
- [ ] Form inputs have visible labels (not placeholder-only)

### Content
- [ ] No emojis in UI or marketing copy
- [ ] No aggressive language ("dominate," "crush")
- [ ] No corporate speak ("synergy," "paradigm shift")
- [ ] Clear, obvious labels (no mystery navigation)
- [ ] Tone: confident but not arrogant

---

## 🧪 Testing Checklist

Before launching:

### Visual Testing
- [ ] Test in both light and dark modes
- [ ] Test on mobile (320px), tablet (768px), desktop (1024px+)
- [ ] Verify generous white space (doesn't feel cramped)
- [ ] Confirm purple dominates, orange appears ≤3x per page
- [ ] Check that layouts use 90% neutral, 10% accent

### Accessibility Testing
- [ ] Tab through all interactive elements
- [ ] Test with screen reader (VoiceOver on Mac, NVDA on Windows)
- [ ] Verify all contrast ratios with WebAIM Contrast Checker
- [ ] Test keyboard shortcuts (Enter, Escape, Arrow keys)
- [ ] Verify focus indicators are visible

### Brand Compliance
- [ ] Run through [ENRG Brand Validator](https://script.google.com/a/macros/enrg.realty/s/AKfycbyvK0IyB9xGbn2eAKl1-ZiAIoYUB6K_fmRAmXt_GfuHOlrXM2aS8S82ktYYZVlMzi838w/exec)
- [ ] Check that no brand violations are present (see `.cursorrules`)
- [ ] Verify font choices (Plus Jakarta Sans OR Inter, not mixed)

---

## 📚 Quick Reference Links

- **Design System:** `ENRG_DESIGN_SYSTEM.md` in project root
- **Brand Validator:** https://github.com/ntsanderc/enrg-brand-validator
- **Web App:** https://script.google.com/a/macros/enrg.realty/s/AKfycbyvK0IyB9xGbn2eAKl1-ZiAIoYUB6K_fmRAmXt_GfuHOlrXM2aS8S82ktYYZVlMzi838w/exec
- **AI Rules:** `.cursorrules` (already in project root)

---

## 🎯 Quick Wins

Copy-paste these common patterns:

### Primary Button
```tsx
<button
  className="bg-[#290080] text-white px-6 py-3 rounded-lg font-semibold
             hover:bg-[#3604A2] transition-colors
             focus:outline focus:outline-2 focus:outline-[#6021E6] focus:outline-offset-2"
>
  Label
</button>
```

### Card
```tsx
<div
  className="bg-white border border-gray-200 rounded-xl p-6
             shadow-sm hover:shadow-md transition-shadow"
>
  Content
</div>
```

### Link
```tsx
<a
  href="#"
  className="text-[#290080] underline hover:text-[#3604A2]
             focus:outline focus:outline-2 focus:outline-[#6021E6]"
>
  Link text
</a>
```

---

**Remember:** Premium through simplicity. When in doubt, add white space and choose purple over orange.

*ENRG.realty — Boutique support. Virtual freedom. National power.*
