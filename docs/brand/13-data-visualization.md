# Data Visualization

> **Audience:** Marketing team, analysts, and anyone creating charts, graphs, dashboards, or data-driven presentations.

*Last Updated: January 2026*

---

## Overview

Data visualization brings ENRG's market insights and performance metrics to life. Whether presenting to agents, leadership, or clients, effective data visualization balances aesthetic appeal with clarity and accuracy.

**Key Principle:** Clarity first, beauty second. Data should tell a story without decoration.

---

## Chart Color Palette

### Primary Data Colors

**Sequential Scale (Single-Variable Data):**

| Step | Color Name | Hex | Usage |
|------|-----------|-----|-------|
| 1 | Purple Pale | #F3F0FF | Lightest data point |
| 2 | Purple 100 | #E9D5FF | Very low values |
| 3 | Purple 200 | #DDD6FE | Low values |
| 4 | Purple 300 | #C4B5FD | Below average |
| 5 | Purple 400 | #A78BFA | Average |
| 6 | Purple 500 | #8B5CF6 | Above average |
| 7 | Purple 600 | #7C3AED | High values |
| 8 | Purple 700 | #6D28D9 | Very high values |
| 9 | Purple 800 | #5B21B6 | Highest data point |
| 10 | Purple 900 | #4C1D95 | Maximum extreme |

**Use Case:** Heatmaps, choropleth maps, single-metric progressions

---

### Categorical Scale (Multi-Category Data)

**6-Color Palette (Most Common):**

| Category | Color | Hex | Usage |
|----------|-------|-----|-------|
| 1 | Purple Primary | #6021E6 | Primary category or ENRG data |
| 2 | Blue | #3B82F6 | Secondary category |
| 3 | Green | #10B981 | Positive/growth indicator |
| 4 | Orange | #FF6039 | Accent/highlight (ENRG orange) |
| 5 | Gray | #6B7280 | Neutral/comparison data |
| 6 | Red | #EF4444 | Negative/decline indicator |

**Use Case:** Bar charts, pie charts, multi-line graphs, grouped categories

**8-Color Extended Palette (If Needed):**
Add:
- Teal (#14B8A6)
- Amber (#F59E0B)

---

### Semantic Colors

| Meaning | Color | Hex | Usage |
|---------|-------|-----|-------|
| **Positive** | Green | #10B981 | Growth, increase, success |
| **Negative** | Red | #EF4444 | Decline, decrease, alerts |
| **Neutral** | Gray | #6B7280 | Baseline, comparison |
| **Highlight** | Orange | #FF6039 | Key data point, attention |
| **Primary** | Purple | #6021E6 | Main metric, ENRG data |

---

## Chart Types & Styling

### Bar Charts

**Vertical Bars (Column Chart):**

```css
.bar-chart {
  background: white;
  border-radius: 8px;
  padding: 24px;
}

.bar {
  fill: #6021E6; /* Purple Primary */
  transition: fill 0.2s ease;
}

.bar:hover {
  fill: #7C3AED; /* Purple 600 - lighter on hover */
}

.bar-label {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13px;
  font-weight: 500;
  fill: #374151; /* Gray 700 */
}
```

**Horizontal Bars:**
- Use when category labels are long
- Better for comparisons (easier to scan left-to-right)

**Styling Guidelines:**
- Bar width: 40-60% of available space (not too thick or thin)
- Bar spacing: 20-40% of bar width
- Corner radius: 4px on top corners
- Drop shadow: Subtle (0 2px 4px rgba(0,0,0,0.1))

---

### Line Charts

**Single Line:**

```css
.line {
  stroke: #6021E6;
  stroke-width: 3px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.line-area {
  fill: url(#gradient); /* Gradient from Purple 500 to transparent */
  opacity: 0.2;
}

.data-point {
  fill: white;
  stroke: #6021E6;
  stroke-width: 2px;
  r: 5px;
}
```

**Multi-Line (Comparison):**
- Line 1 (ENRG): Purple (#6021E6), 3px
- Line 2 (Comparison): Gray (#6B7280), 2px, dashed
- Line 3+ (If needed): Blue (#3B82F6), Green (#10B981)

**Styling Guidelines:**
- Line weight: 2-3px (readable but not chunky)
- Data points: Show on hover, not always visible (reduces clutter)
- Grid lines: Light gray (#E5E7EB), 1px, subtle
- Area fill: Optional, use gradient with low opacity (10-20%)

---

### Pie & Donut Charts

**When to Use:**
- Showing parts of a whole (percentages)
- Maximum 5-6 slices (more becomes unreadable)
- Consider bar chart if comparison is more important than proportion

**Styling:**

```css
.pie-slice {
  stroke: white;
  stroke-width: 2px;
}

.pie-slice-1 { fill: #6021E6; } /* Purple Primary */
.pie-slice-2 { fill: #3B82F6; } /* Blue */
.pie-slice-3 { fill: #10B981; } /* Green */
.pie-slice-4 { fill: #FF6039; } /* Orange */
.pie-slice-5 { fill: #6B7280; } /* Gray */

.pie-label {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  fill: white;
}

.pie-percentage {
  font-size: 18px;
  font-weight: 700;
}
```

**Donut Chart (Preferred):**
- Hole size: 50-60% of total diameter
- Center text: Total value or primary metric
- Easier to read than full pie

---

### Heatmaps

**Use Case:** Geographic data, correlation matrices, time-series intensity

**Color Scale:**
- Use sequential purple scale (Purple 100 → Purple 900)
- Ensure sufficient contrast between steps
- Include legend with clear labels

**Grid:**
- Border: 1px white (#FFFFFF)
- Cell size: Uniform (square or rectangular based on data)
- Labels: Outside grid, not inside cells

---

### Scatter Plots

**Styling:**

```css
.scatter-point {
  fill: #6021E6;
  fill-opacity: 0.6;
  r: 6px;
}

.scatter-point:hover {
  fill-opacity: 1;
  r: 8px;
}

.trend-line {
  stroke: #FF6039; /* Orange for attention */
  stroke-width: 2px;
  stroke-dasharray: 5, 5;
}
```

**Guidelines:**
- Point size: 4-8px (readable but not overwhelming)
- Opacity: 60-80% if points overlap
- Trend line: Optional, use dashed line in accent color

---

## Typography for Data Viz

### Chart Titles

```css
.chart-title {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #111827; /* Gray 900 */
  line-height: 1.3;
  margin-bottom: 8px;
}
```

### Axis Labels

```css
.axis-label {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #6B7280; /* Gray 500 */
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
```

### Data Labels

```css
.data-label {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #374151; /* Gray 700 */
}

.data-value {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #111827; /* Gray 900 */
}
```

### Legend

```css
.legend {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: #4B5563; /* Gray 600 */
}

.legend-swatch {
  width: 16px;
  height: 16px;
  border-radius: 2px;
  display: inline-block;
  margin-right: 6px;
}
```

---

## Infographic Elements

### Stat Callouts

**Large Number Display:**

```html
<div style="text-align: center; padding: 24px; background: linear-gradient(135deg, #6021E6 0%, #8B5CF6 100%); border-radius: 12px; color: white;">
  <div style="font-size: 48px; font-weight: 700; line-height: 1; margin-bottom: 8px;">$2.4M</div>
  <div style="font-size: 14px; font-weight: 400; opacity: 0.9;">Average Sale Price</div>
  <div style="font-size: 13px; font-weight: 500; margin-top: 8px; color: #10B981;">↑ 12% YoY</div>
</div>
```

### Icon + Stat Pair

```html
<div style="display: flex; align-items: center; gap: 16px;">
  <div style="width: 56px; height: 56px; background: #F3F0FF; border-radius: 12px; display: flex; align-items: center; justify-content: center;">
    <!-- Icon SVG here -->
  </div>
  <div>
    <div style="font-size: 28px; font-weight: 700; color: #6021E6;">347</div>
    <div style="font-size: 13px; color: #6B7280;">Active Agents</div>
  </div>
</div>
```

### Progress Bars

```html
<div style="margin-bottom: 12px;">
  <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
    <span style="font-size: 13px; font-weight: 600; color: #374151;">Q1 Goal Progress</span>
    <span style="font-size: 13px; font-weight: 700; color: #6021E6;">82%</span>
  </div>
  <div style="width: 100%; height: 8px; background: #E5E7EB; border-radius: 999px; overflow: hidden;">
    <div style="width: 82%; height: 100%; background: linear-gradient(90deg, #6021E6 0%, #8B5CF6 100%); border-radius: 999px;"></div>
  </div>
</div>
```

---

## Dashboard Widget Styling

### KPI Card

```html
<div style="background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); border: 1px solid #E5E7EB;">
  <div style="font-size: 13px; font-weight: 600; color: #6B7280; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Total Sales Volume</div>
  <div style="font-size: 32px; font-weight: 700; color: #111827; line-height: 1; margin-bottom: 4px;">$12.8M</div>
  <div style="font-size: 13px; font-weight: 500; color: #10B981;">↑ 24% from last month</div>
</div>
```

### Sparkline

**Tiny line chart for quick trends (no axes, minimal styling):**

```css
.sparkline {
  stroke: #6021E6;
  stroke-width: 2px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}
```

- Width: 60-100px
- Height: 24-32px
- No grid lines, no labels
- Shows trend at a glance

---

## Accessibility Considerations

### Color Contrast

**Ensure WCAG AA compliance:**
- Text on colored backgrounds: 4.5:1 minimum contrast
- UI components (bars, lines): 3:1 minimum contrast with background

**Test combinations:**
- Purple 500 (#6021E6) on white: 6.2:1 ✅ AAA
- Purple 800 (#290080) on white: 8.9:1 ✅ AAA
- Orange (#FF6039) on white: 3.1:1 ✅ AA (large text only)

### Never Rely on Color Alone

**Always pair color with:**
- Patterns (stripes, dots, hatching)
- Labels (text annotations)
- Icons (arrows, symbols)

**Example:**
```
❌ Red bar = decline, Green bar = growth (color only)
✅ Red bar + ↓ icon = decline, Green bar + ↑ icon = growth
```

### Alt Text for Charts

```html
<img src="chart.png" alt="Bar chart showing Q4 sales by region. West region leads with $4.2M, followed by East at $3.1M, South at $2.8M, and North at $2.3M.">
```

---

## Chart Anti-Patterns (Avoid These)

### ❌ 3D Charts

**Problem:**
- Distorts data (perspective makes comparison difficult)
- Adds unnecessary decoration
- Looks dated

**Fix:** Use flat 2D charts

---

### ❌ Dual-Axis Charts

**Problem:**
- Can mislead by scaling axes differently
- Visually confusing

**Fix:** Use two separate charts side-by-side

---

### ❌ Excessive Decoration

**Problem:**
- Gradients, shadows, textures distract from data
- Chartjunk reduces clarity

**Fix:** Minimal styling, focus on data

---

### ❌ Too Many Categories

**Problem:**
- Pie charts with 10+ slices
- Bar charts with 20+ bars
- Unreadable, overwhelming

**Fix:** Group small categories into "Other", or use different chart type

---

### ❌ Truncated Y-Axis

**Problem:**
- Starting Y-axis at non-zero can exaggerate differences
- Misleading visualization

**Fix:** Start Y-axis at zero for bar charts (line charts can start at logical minimum)

---

## Tools & Recommendations

### Preferred Tools

| Tool | Use Case | Pros | Cons |
|------|----------|------|------|
| **Google Sheets** | Quick charts, presentations | Easy, collaborative | Limited customization |
| **Excel** | Complex data analysis | Powerful, familiar | Charts can look dated |
| **Tableau** | Dashboards, interactive viz | Professional, interactive | Expensive, learning curve |
| **Figma** | Custom infographics | Full design control | Manual, time-consuming |
| **D3.js** | Web-based custom viz | Highly customizable | Requires coding |
| **Chart.js** | Web dashboards | Lightweight, easy | Limited chart types |

### Chart Export Settings

**For Print:**
- Format: PDF or PNG (300 DPI)
- Size: Actual print size (e.g., 8.5×11" for full page)
- Color space: CMYK (for professional printing)

**For Web:**
- Format: PNG or SVG
- Size: 2× actual display size (for retina screens)
- Optimize: Compress PNG (<500KB ideal)

**For Presentations:**
- Format: PNG or SVG
- Size: 1920×1080px (standard HD slide)
- Background: Transparent (if overlaying on slide)

---

## Data Visualization Checklist

Before publishing a chart:

- [ ] Chart type is appropriate for data (bar vs. line vs. pie)
- [ ] Colors use ENRG brand palette (purple primary)
- [ ] Text is readable (font size, color contrast)
- [ ] Axes are labeled clearly
- [ ] Legend is present (if needed)
- [ ] Data is accurate and sourced
- [ ] Y-axis starts at zero (for bar charts)
- [ ] No 3D effects or unnecessary decoration
- [ ] Accessible (alt text, color + pattern, contrast)
- [ ] Consistent with other ENRG visualizations

---

## Related Documents

- [Colors](./04-colors.md) — Purple palette and semantic colors
- [Typography](./05-typography.md) — Font specifications
- [Accessibility](./07b-accessibility.md) — WCAG compliance guidelines

---

*ENRG.realty*
