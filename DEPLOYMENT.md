# ENRG Brand Validator - Deployment Guide

Deploy the Brand Validator as a Google Apps Script web app with collaborative commenting.

---

## Prerequisites

- Google Workspace account (for your organization)
- Access to Google Apps Script (script.google.com)
- A Google Sheet for storing comments (created automatically on first use)

---

## Files to Deploy

| File | Purpose |
|------|---------|
| `Code.gs` | Backend logic: web app entry point, user auth, comment CRUD operations |
| `Index.html` | Frontend: complete brand validator UI with design system, colors, typography, tone & voice |

---

## Step-by-Step Deployment

### 1. Create a New Apps Script Project

1. Go to [script.google.com](https://script.google.com)
2. Click **New project**
3. Rename the project to `ENRG Brand Validator`

### 2. Add the Code Files

**Code.gs:**
1. The default `Code.gs` file is already open
2. Delete any placeholder code
3. Copy and paste the entire contents of `Code.gs` from this folder

**Index.html:**
1. Click the **+** button next to "Files"
2. Select **HTML**
3. Name it `Index` (not `Index.html` - Apps Script adds the extension)
4. Copy and paste the entire contents of `Index.html` from this folder

### 3. Save the Project

Press `Ctrl+S` (or `Cmd+S` on Mac) to save all files.

### 4. Deploy as Web App

1. Click **Deploy** > **New deployment**
2. Click the gear icon next to "Select type" and choose **Web app**
3. Configure the deployment:

| Setting | Value |
|---------|-------|
| **Description** | `ENRG Brand Validator v1.0` |
| **Execute as** | `User accessing the web app` |
| **Who has access** | `Anyone within [your organization]` |

4. Click **Deploy**
5. **Authorize** the app when prompted:
   - Click "Review Permissions"
   - Select your Google account
   - Click "Allow"

### 5. Copy the Web App URL

After deployment, you'll see a **Web app URL**. Copy this - it's your validator's live URL.

Example: `https://script.google.com/a/macros/enrg.realty/s/AKfycb.../exec`

---

## Testing the Deployment

1. Open the Web app URL in your browser
2. Verify all sections load:
   - Logo picker (interactive dropdowns)
   - Color palette (purple scale, coral, core neutrals, semantic)
   - Typography (dual-font strategy)
   - Iconography (brand icons, tool icons, no-emoji rule)
   - Tone & Voice (do/don't examples)
   - Anti-patterns
   - To Develop roadmap
3. Test the commenting system:
   - Click "Comments" button in the nav
   - Click anywhere on the page to add a comment
   - Verify comment appears and saves

---

## Comment Storage

Comments are stored in a Google Sheet automatically created in your Google Drive:
- **Sheet name:** `ENRG Brand Validator Comments`
- **Tab name:** `Brand Validator Feedback`
- **Columns:** id, x, y, sectionId, comment, author, timestamp, resolved, resolvedBy, resolvedAt

To find the sheet:
1. Go to [drive.google.com](https://drive.google.com)
2. Search for `ENRG Brand Validator Comments`

---

## Updating the Deployment

After making changes to the code:

1. Save your changes (`Ctrl+S`)
2. Click **Deploy** > **Manage deployments**
3. Click the **pencil icon** to edit your deployment
4. Update the **Version** dropdown to "New version"
5. Add a description (e.g., `v1.1 - Added photography section`)
6. Click **Deploy**

The URL stays the same - users will automatically get the latest version.

---

## Sharing with Stakeholders

Share the Web app URL directly:
```
https://script.google.com/a/macros/enrg.realty/s/[YOUR-DEPLOYMENT-ID]/exec
```

Anyone in your organization can:
- View the brand guidelines
- Add comments for feedback
- Resolve comments when addressed

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Authorization required" | Click through the auth flow; app needs permission to access Sheets |
| Comments not saving | Check that the user is logged into a Google account |
| Page loads blank | Check browser console for errors; verify Index.html is named correctly |
| Logo images not loading | Logos are hosted on Google Drive; verify the Drive folder is accessible |

---

## Source Documents

The validator displays content from 19 markdown files in `docs/brand/`:
- Brand foundation (philosophy, positioning, tone & voice)
- Visual identity (logo, colors, typography, design system)
- Specialized guides (headshots, email signatures, sub-brands)
- Resources (brand assets, marketing tools, applications)

All source files are included in the validator folder for portability.

---

*Last updated: January 2026*

