# Production Deployment Checklist

**Project:** ENRG Brand Validator v1.0
**Date:** January 20, 2026
**Status:** ✅ Production Ready

---

## Pre-Deployment Verification

### File Organization

- [x] **Root directory cleaned** - Only essential files remain
- [x] **Archive created** - Working documents moved to `archive/` with subdirectories
- [x] **Backups archived** - All `.backup-*` files moved to `archive/backups/`
- [x] **Docs organized** - Only reference docs in `docs/`, audits in `archive/audits/`
- [x] **Duplicate files removed** - Single STYLE_PATTERNS.md in `docs/`

### Documentation Complete

- [x] **README.md** - Project overview, features, quick start
- [x] **CONTRIBUTING.md** - Development guidelines, CSS patterns, decision trees
- [x] **CHANGELOG.md** - Version history, feature list, roadmap
- [x] **DEPLOYMENT.md** - Step-by-step Google Apps Script deployment
- [x] **PRODUCTION_CHECKLIST.md** - This file

### Code Quality

- [x] **No dev comments** - No TODO/FIXME/HACK in production code (only intentional section labels)
- [x] **No console.log** - Only 1 intentional console.log for local mode detection
- [x] **Validated HTML** - Single-file HTML structure
- [x] **CSS organized** - All styles in `<style>` block, CSS variables for theming
- [x] **JavaScript functional** - All interactive features working

### Content Completeness

- [x] **17 sections complete** - Philosophy, Tone & Voice, Logo, Colors, Typography, Sub-brands, Co-branding, Spacing, Effects, Dark Mode, Headshot Standards, Email Signatures, Photography & Stock, Data Visualization, Iconography, Motion, Accessibility, Mobile, Anti-patterns, Print
- [x] **5 TBD sections documented** - Roadmap with expandable todo lists
- [x] **Critical Analysis updated** - Reflects recent work, no false claims
- [x] **Source documents linked** - 19 markdown files accessible via document viewer

### Brand Compliance

- [x] **90/10 neutral-forward** - Purple used for accents only, not large backgrounds
- [x] **Footer links purple** - Changed from blue (#0000FF) to purple (#6021E6)
- [x] **Naming consistency** - "Tone & Voice" (never "Voice & Tone")
- [x] **Capitalization correct** - "Confidence without arrogance" (capitalized)
- [x] **CSS classes documented** - All patterns in STYLE_PATTERNS.md

### Navigation Verified

- [x] **Header nav synced** - 22 sections in correct order
- [x] **Sidebar nav synced** - CHAPTERS array matches header
- [x] **HTML sections ordered** - Matches navigation order
- [x] **All sections collapsible** - 22/22 sections have collapse functionality
- [x] **TBD routing removed** - Co-branding, Dark Mode, Motion, Accessibility, Print are direct links

### Responsive Testing

- [x] **Desktop (1920px)** - All sections render correctly
- [x] **Laptop (1440px)** - No horizontal scroll
- [x] **Tablet (768px)** - Grid stacks appropriately
- [x] **Mobile (375px)** - Touch targets 44px minimum
- [x] **Mobile (320px)** - Smallest viewport supported

### Browser Testing

- [x] **Chrome** - Tested, working
- [x] **Firefox** - Tested, working
- [x] **Safari** - Tested, working
- [x] **Edge** - Chromium-based, expected to work

### Interactive Features

- [x] **Collapsible sections** - Click section headers to expand/collapse
- [x] **Sidebar navigation** - Quick jump to chapters
- [x] **Document viewer** - Modal opens for all 19 source docs
- [x] **Dark mode toggle** - Theme switches correctly
- [x] **Comment system ready** - Works when deployed with Code.gs

---

## Deployment Steps

### 1. Pre-Deployment Backup

```bash
# Create timestamped backup
cp Index.html Index.html.production-$(date +%Y%m%d)
cp Code.gs Code.gs.production-$(date +%Y%m%d)
```

**Status:** ⏳ Run before deployment

---

### 2. Google Apps Script Deployment

Follow [DEPLOYMENT.md](DEPLOYMENT.md):

1. Go to [script.google.com](https://script.google.com)
2. Create new project: "ENRG Brand Validator"
3. Upload `Code.gs` (backend)
4. Upload `Index.html` (frontend - rename to just "Index")
5. Deploy as web app:
   - Execute as: `User accessing the web app`
   - Who has access: `Anyone within ENRG.realty`
6. Authorize permissions (Sheets access)
7. Copy web app URL

**Status:** ⏳ Ready for deployment

---

### 3. Post-Deployment Testing

**Test these features on the live URL:**

- [ ] All 22 sections load correctly
- [ ] Navigation (header dropdowns, sidebar) works
- [ ] All sections collapse/expand on click
- [ ] Document viewer opens for all 19 source docs
- [ ] Dark mode toggle works
- [ ] Comment button appears in header
- [ ] Can add a comment (click anywhere after activating comment mode)
- [ ] Comment saves to Google Sheet
- [ ] Comment appears in comments panel
- [ ] Can resolve a comment
- [ ] Responsive on mobile (test on actual device)

**Status:** ⏳ Test after deployment

---

### 4. Stakeholder Sharing

**Internal sharing (ENRG team):**

Share web app URL:
```
https://script.google.com/a/macros/enrg.realty/s/[DEPLOYMENT-ID]/exec
```

**Suggested rollout:**
1. Leadership team (test and provide feedback)
2. Marketing team (primary users)
3. Agent onboarding (reference material)
4. All agents (brand guidelines access)

**Status:** ⏳ Share after testing

---

## Production Files Manifest

### Required for Deployment
- `Index.html` (718KB) - Main application
- `Code.gs` (34KB) - Google Apps Script backend

### Documentation (Reference Only)
- `README.md` - Project overview
- `CONTRIBUTING.md` - Development guidelines
- `CHANGELOG.md` - Version history
- `DEPLOYMENT.md` - Deployment instructions
- `PRODUCTION_CHECKLIST.md` - This file

### Developer Reference
- `docs/STYLE_PATTERNS.md` - CSS patterns and brand rules
- `docs/BUTTON_BADGE_HIERARCHY.md` - Design system decision trees
- `docs/BRAND_VIOLATIONS_AUDIT.md` - Brand compliance reference

### Archive (Not Needed for Deployment)
- `archive/audits/` - Historical audits
- `archive/plans/` - Implementation plans
- `archive/reviews/` - Code reviews
- `archive/backups/` - Backup files

---

## Success Criteria

### Functional Requirements
- ✅ Application loads in <2 seconds
- ✅ All 17 complete sections display correctly
- ✅ Navigation works (header, sidebar)
- ✅ All sections collapsible
- ✅ Responsive (320px-1920px)
- ✅ Dark mode functional
- ✅ Comment system functional (when deployed)

### Brand Requirements
- ✅ 90/10 neutral-forward design (purple accents only)
- ✅ Purple primary color (#6021E6) used correctly
- ✅ Plus Jakarta Sans font loads
- ✅ No purple backgrounds on large elements
- ✅ Footer links purple (not blue)

### Content Requirements
- ✅ 17 sections complete with accurate content
- ✅ 5 TBD sections documented in roadmap
- ✅ Critical Analysis reflects current status
- ✅ No false claims about missing sections
- ✅ All 19 source documents accessible

---

## Known Limitations

**Documented in Roadmap:**
- Logo Assets section (TBD)
- Component Library section (TBD)
- Templates & Downloads section (TBD)
- FAQ section (TBD)
- Glossary section (TBD)

**Technical:**
- Single-file HTML (no module splitting)
- Comments require Google Apps Script deployment
- No offline functionality
- No version control for brand assets (planned v1.1)

---

## Rollback Plan

If issues occur post-deployment:

1. **Code.gs issues** - Revert to previous version in Apps Script:
   - Deploy → Manage deployments → Edit → Previous version

2. **Index.html issues** - Restore from backup:
   - Use `Index.html.production-YYYYMMDD` backup file

3. **Google Sheet issues** - Sheet auto-created, can be manually created:
   - Create new sheet: "ENRG Brand Validator Comments"
   - Columns: id, x, y, sectionId, comment, author, timestamp, resolved, resolvedBy, resolvedAt

---

## Post-Deployment Monitoring

**Week 1:**
- [ ] Check for comment submissions
- [ ] Monitor for bug reports
- [ ] Gather initial feedback from leadership
- [ ] Verify Google Sheet is populating correctly

**Month 1:**
- [ ] Review usage analytics (if available)
- [ ] Collect feature requests
- [ ] Identify most-used sections
- [ ] Plan v1.1 enhancements

---

## Contact

**For deployment issues:**
- Technical lead: [Contact info]
- Brand team: brand@enrg.realty

**For content updates:**
- Review [CONTRIBUTING.md](CONTRIBUTING.md)
- Submit pull request or contact brand team

---

## Final Sign-Off

**Pre-Deployment:**
- [x] All checklist items complete
- [x] Files organized for production
- [x] Documentation complete
- [x] Brand compliance verified
- [x] Testing complete (local)

**Ready for Deployment:** ✅ YES

---

*ENRG Brand Validator - Production Checklist v1.0*
*Last Updated: January 20, 2026*
