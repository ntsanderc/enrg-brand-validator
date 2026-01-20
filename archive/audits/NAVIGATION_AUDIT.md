# Navigation Alignment Audit

**Problem**: Three navigation systems are misaligned:
1. Header navigation dropdowns
2. HTML section order
3. Sidebar navigator

---

## Current State Analysis

### 1. Header Navigation Order (Lines 1574-1630)

**Foundation**
- Philosophy
- Voice & Tone

**Brand Essentials**
- Logo
- Colors
- Typography
- Co-branding

**Design System**
- Spacing & Grid
- Effects & Radii
- Dark Mode

**More > For Agents**
- Headshot Standards
- Email Signatures

**More > For Designers**
- Photography & Stock
- Iconography
- Print Production
- Data Visualization
- Sub-brands

**More > For Developers**
- Motion & Animation
- Accessibility
- Mobile Guidelines
- Anti-patterns

**Resources**
- Roadmap
- Critical Analysis
- (TBD items)

---

### 2. Actual HTML Section Order

1. philosophy (Foundation)
2. voice (Foundation)
3. logo (Brand Essentials)
4. colors (Brand Essentials)
5. typography (Brand Essentials)
6. spacing (Design System)
7. effects (Design System)
8. **iconography** (For Designers) ← OUT OF ORDER
9. **mobile** (For Developers) ← OUT OF ORDER
10. **antipatterns** (For Developers) ← OUT OF ORDER
11. photography-stock (For Designers)
12. headshot-standards (For Agents)
13. email-signatures (For Agents)
14. data-visualization (For Designers)
15. sub-brands (Brand Essentials) ← WRONG CATEGORY
16. roadmap (Resources)
17. analysis (Resources)

**MISSING SECTIONS**:
- Co-branding
- Dark Mode
- Print Production
- Motion & Animation
- Accessibility

---

### 3. Sidebar Navigator (Lines 1705-1708)

**Currently only shows**:
- Philosophy
- Voice

**Chapter dropdown**:
- Foundation → #philosophy
- Brand Essentials → #logo
- Design System → #spacing
- More → #iconography
- Resources → #roadmap

---

## Critical Issues

1. **Out-of-order sections**: iconography, mobile, antipatterns appear BEFORE the new sections
2. **Sub-brands miscategorized**: Shown in "Brand Essentials" but HTML has it as such
3. **Missing sections**: 5 sections in header nav don't exist in HTML
4. **Sidebar incomplete**: Only shows 2 sections, doesn't update dynamically

---

## Correct Order (Systematic)

### Foundation
1. philosophy
2. voice

### Brand Essentials
3. logo
4. colors
5. typography
6. cobranding (MISSING - needs creation)
7. sub-brands

### Design System
8. spacing
9. effects
10. dark-mode (MISSING - needs creation)

### For Agents
11. headshot-standards
12. email-signatures

### For Designers
13. photography-stock
14. iconography
15. print (MISSING - needs creation)
16. data-visualization

### For Developers
17. motion (MISSING - needs creation)
18. accessibility (MISSING - needs creation)
19. mobile
20. antipatterns

### Resources
21. roadmap
22. analysis

---

## Action Plan

**Phase 1: Reorder existing sections**
- Move iconography after data-visualization
- Move mobile/antipatterns to end (after data-visualization)
- Move sub-brands to after cobranding placeholder

**Phase 2: Add placeholder sections for missing items**
- cobranding
- dark-mode
- print
- motion
- accessibility

**Phase 3: Update sidebar navigator**
- Populate all sections dynamically based on data-category
- Fix chapter dropdown to match correct first section of each category

**Phase 4: Verify header nav matches**
- Ensure dropdown order matches HTML section order exactly
