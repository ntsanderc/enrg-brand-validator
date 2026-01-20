# Sub-brand Styling

> **Audience:** Marketing team, program managers, and anyone creating materials for ENRG's branded programs.

*Last Updated: January 2026*

---

## Overview

ENRG operates three signature programs, each with its own visual identity that extends the core ENRG brand. These sub-brands maintain the parent brand's purple foundation while expressing unique personality through visual metaphors and accent elements.

**Key Principle:** Unified through purple, differentiated through metaphor. All sub-brands feel like part of the ENRG family.

---

## ENRG Boost™

**Tagline:** *Infinite Levels of Agent Support*

### Visual Identity

**Concept:** A progression system that visualizes unlimited growth potential. Like a video game level-up system, ENRG Boost represents continuous advancement without a ceiling.

**Visual Metaphor:** Ascending bars, upward arrows, stacked layers — each symbolizing another level of support and achievement.

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| **Primary Purple** | #6021E6 | Base level, logo, headlines |
| **Electric Violet** | #8B5CF6 | Mid-level accent |
| **Bright Purple** | #A78BFA | High-level accent |
| **Gradient** | #6021E6 → #A78BFA | Progress bars, level indicators |

**Why This Palette:** Progression from deep purple to bright purple visualizes upward movement and achievement.

### Logo Design

**Primary Lockup:**
```
┌────────────────────────────────┐
│  ENRG                          │
│  BOOST™                        │
│  [Ascending bar icon]          │
│  Infinite Levels of Support    │
└────────────────────────────────┘
```

**Icon:** Three ascending bars (short, medium, tall) in gradient purple. The tallest bar has an upward arrow, suggesting infinite continuation.

**Typography:**
- "ENRG" — Plus Jakarta Sans, SemiBold (600), Purple 500
- "BOOST™" — Plus Jakarta Sans, Bold (700), Purple 800, ALL CAPS
- Tagline — Plus Jakarta Sans, Regular (400), Gray 600, 13px

### Visual Elements

**Level Badges:**

**Level 1-5:** Bronze to Silver progression
```css
.level-badge {
  background: linear-gradient(135deg, #6021E6 0%, #7C3AED 100%);
  border: 2px solid #8B5CF6;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 20px;
}
```

**Level 6-10:** Silver to Gold progression
```css
.level-badge {
  background: linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%);
  border: 2px solid #C4B5FD;
}
```

**Level 11+:** Diamond/Platinum (brightest)
```css
.level-badge {
  background: linear-gradient(135deg, #A78BFA 0%, #DDD6FE 100%);
  border: 2px solid white;
  box-shadow: 0 4px 12px rgba(96, 33, 230, 0.3);
}
```

**Progress Bar:**
```html
<div style="width: 100%; height: 8px; background: #E5E7EB; border-radius: 999px; overflow: hidden;">
  <div style="width: 60%; height: 100%; background: linear-gradient(90deg, #6021E6 0%, #A78BFA 100%); border-radius: 999px;"></div>
</div>
```

### Usage Examples

**Business Card:**
- Front: Agent name, ENRG Boost logo, current level badge
- Back: "Unlock infinite support. Your growth has no ceiling."

**Digital Badge (for email signatures, social media):**
- Circular badge with level number
- "ENRG Boost Level 7" beneath

**Marketing Materials:**
- Use ascending bar motif as background element
- Progress bars to show agent advancement
- Level callouts in headlines ("Join 500+ agents at Level 5+")

---

## ENRG SHINE™

**Tagline:** *Equity Ownership Tiers*

### Visual Identity

**Concept:** A five-tier equity ownership program represented by ascending gemstone/prism metaphors. Each tier reflects increasing equity stakes and leadership responsibility.

**Visual Metaphor:** Faceted gems, prisms, light refraction — symbolizing clarity, value, and brilliance.

### Color Palette

| Tier | Color | Hex | Gemstone Metaphor |
|------|-------|-----|-------------------|
| **Tier 1** | Silver | #D1D5DB | Clear Quartz |
| **Tier 2** | Sapphire | #3B82F6 | Blue Sapphire |
| **Tier 3** | Amethyst | #8B5CF6 | Purple Amethyst |
| **Tier 4** | Violet | #6021E6 | Royal Violet Diamond |
| **Tier 5** | Platinum | #F3F4F6 with #6021E6 core | Iridescent Opal |

**Why This Palette:** Progression from neutral silver to vibrant purple to prestigious platinum. Tier 5 combines silver and purple to represent the highest achievement.

### Logo Design

**Primary Lockup:**
```
┌────────────────────────────────┐
│  ENRG                          │
│  SHINE™                        │
│  [Faceted gem icon]            │
│  Equity Ownership Tiers        │
└────────────────────────────────┘
```

**Icon:** Five-sided faceted gem (pentagon) with light refraction lines radiating outward. Gradient from purple at center to lighter edges.

**Typography:**
- "ENRG" — Plus Jakarta Sans, SemiBold (600), Purple 500
- "SHINE™" — Plus Jakarta Sans, Bold (700), Purple 800, ALL CAPS
- Tagline — Plus Jakarta Sans, Regular (400), Gray 600, 13px

### Tier Badges

**Tier 1: Clear Quartz (Entry)**
```css
.tier-badge-1 {
  background: linear-gradient(135deg, #F3F4F6 0%, #D1D5DB 100%);
  border: 2px solid #9CA3AF;
  color: #4B5563;
}
```

**Tier 2: Blue Sapphire**
```css
.tier-badge-2 {
  background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
  border: 2px solid #60A5FA;
  color: white;
}
```

**Tier 3: Purple Amethyst**
```css
.tier-badge-3 {
  background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);
  border: 2px solid #A78BFA;
  color: white;
}
```

**Tier 4: Royal Violet Diamond**
```css
.tier-badge-4 {
  background: linear-gradient(135deg, #6021E6 0%, #5B21B6 100%);
  border: 2px solid #8B5CF6;
  color: white;
  box-shadow: 0 4px 12px rgba(96, 33, 230, 0.4);
}
```

**Tier 5: Iridescent Opal (Pinnacle)**
```css
.tier-badge-5 {
  background: linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 50%, #F3F4F6 100%);
  border: 3px solid #6021E6;
  color: #6021E6;
  box-shadow: 0 0 24px rgba(96, 33, 230, 0.3), inset 0 0 20px rgba(96, 33, 230, 0.1);
}
```

### Visual Elements

**Tier Icons:**
Each tier has a unique faceted gem icon:
- Tier 1: Simple 3-facet triangle
- Tier 2: 4-facet square diamond
- Tier 3: 5-facet pentagon
- Tier 4: 6-facet hexagon
- Tier 5: Complex multi-facet brilliant cut (12+ facets)

**Light Refraction Effect:**
```css
.shine-effect {
  position: relative;
  overflow: hidden;
}

.shine-effect::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%);
  transform: rotate(45deg);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(100%) rotate(45deg); }
}
```

### Usage Examples

**Tier Announcement:**
- Email header with faceted gem background
- "Congratulations on reaching Tier 3: Purple Amethyst"

**Equity Dashboard:**
- Visual tier progression chart
- Current tier highlighted with gem icon
- Path to next tier shown with progress bar

**Marketing Materials:**
- Use gemstone metaphors in copy
- "Own a piece of the brilliance — ENRG SHINE equity tiers"

---

## Connect & Thrive™

**Tagline:** *Recruitment & Community Program*

### Visual Identity

**Concept:** A network/connection system that emphasizes community, growth, and mutual support. Visual elements suggest nodes connecting, vines growing, or roots spreading.

**Visual Metaphor:** Connected dots/nodes, branching vines, interlocking circles — representing agents bringing in new talent and creating a thriving network.

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| **Primary Purple** | #6021E6 | Core nodes, logo, headlines |
| **Purple 600** | #7C3AED | Secondary connections |
| **Green Accent** | #10B981 | Growth, "Thrive" element (optional) |
| **Purple + Green Gradient** | #6021E6 → #10B981 | Connect (purple) to Thrive (green) |

**Why This Palette:** Purple maintains ENRG brand continuity. Optional green accent represents growth and community vitality (nature metaphor).

**Note:** Green is *optional*. Can remain entirely purple-focused if preferred.

### Logo Design

**Primary Lockup (Purple Only):**
```
┌────────────────────────────────┐
│  CONNECT & THRIVE™             │
│  [Connected nodes icon]        │
│  by ENRG.realty                │
│  Recruitment & Community       │
└────────────────────────────────┘
```

**Icon:** Three interlocking circles or connected nodes forming a triangle. Center circle is Purple 500, surrounding circles are Purple 300, with connecting lines in Purple 200.

**Typography:**
- "CONNECT & THRIVE™" — Plus Jakarta Sans, SemiBold (600), Purple 800, Title Case
- "by ENRG.realty" — Plus Jakarta Sans, Regular (400), Purple 500, 13px
- Tagline — Plus Jakarta Sans, Regular (400), Gray 600, 11px

### Visual Elements

**Connection Network Diagram:**
```
      ●────●────●
      │    │    │
      ●────●────●
      │    │    │
      ●────●────●
```
Each node represents an agent. Connecting lines show recruitment relationships. Central node is highlighted (recruiter), surrounding nodes are recruits.

**Growth Vine Pattern:**
```css
.vine-pattern {
  background-image: url('data:image/svg+xml,...'); /* Subtle vine SVG pattern */
  background-size: 200px 200px;
  background-repeat: repeat;
  opacity: 0.05;
}
```
Used as subtle background element on recruitment materials.

**Community Badge:**
```css
.community-badge {
  background: linear-gradient(135deg, #6021E6 0%, #8B5CF6 100%);
  border-radius: 12px;
  padding: 16px 24px;
  color: white;
  text-align: center;
}

.community-badge-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 8px;
  /* Three interlocking circles SVG */
}

.community-badge-text {
  font-weight: 600;
  font-size: 16px;
}
```

### Usage Examples

**Recruitment Flyer:**
- Hero headline: "Connect with Purpose. Thrive Together."
- Network diagram showing recruitment tree
- Call-to-action: "Join the network"

**Agent Referral Card:**
- Front: Connect & Thrive logo, agent's name
- Back: "I'm growing my network. Join me at ENRG."

**Community Event Materials:**
- Use connected nodes pattern as background
- Highlight community stats ("500+ agents, 1200+ connections")

---

## Sub-brand Lockup Guidelines

### When to Use Sub-brand Logo

**Use sub-brand logo:**
- Materials exclusively about that program (e.g., ENRG Boost level-up announcement)
- Program-specific events or communications
- Internal program dashboards and tracking

**Use ENRG parent brand logo:**
- General marketing materials
- Agent websites and business cards (unless exclusively Boost/SHINE focused)
- External-facing corporate communications

### Co-branding Hierarchy

**Primary:**
```
ENRG.realty
[Sub-brand name]
```

**Example:**
```
ENRG.realty
ENRG Boost™
```

**Never:**
```
ENRG Boost™
by ENRG.realty  ← Don't put parent brand as secondary
```

### Lockup Sizing

- Sub-brand logo should be *same size or slightly smaller* than ENRG parent logo
- Minimum clear space: 1× the height of the sub-brand logo
- Sub-brand logo should not dominate ENRG parent brand in co-branded materials

---

## Typography Across Sub-brands

All sub-brands use **Plus Jakarta Sans** to maintain family unity.

| Element | Weight | Case | Size |
|---------|--------|------|------|
| **Program Name** | Bold (700) | ALL CAPS or Title Case | 24-32px |
| **Tagline** | Regular (400) | Sentence case | 13-15px |
| **Body Copy** | Regular (400) | Sentence case | 15px |
| **Tier/Level Labels** | SemiBold (600) | ALL CAPS | 11-12px |

---

## Sub-brand Usage Matrix

| Sub-brand | Primary Use | Secondary Use | Avoid Using For |
|-----------|-------------|---------------|-----------------|
| **ENRG Boost™** | Agent training materials, level-up announcements, support program communications | Internal dashboards, agent portals | Client-facing listing materials |
| **ENRG SHINE™** | Equity owner communications, leadership materials, tier announcements | Recruitment materials for equity program | General agent marketing |
| **Connect & Thrive™** | Recruitment campaigns, community events, referral programs | New agent onboarding, networking events | Transaction-specific materials |

---

## Color Accent Recommendations

### If using Green accent for Connect & Thrive™

**ENRG Green:**
- Hex: #10B981 (Emerald 500)
- Usage: "Thrive" element, growth indicators, community vitality
- Pair with Purple 500 (#6021E6) for "Connect & Thrive" split

**Green Usage Guidelines:**
- Use sparingly (10-20% of design)
- Never replace purple as primary color
- Use for growth metaphors only (plants, upward arrows, progress)

### Staying Purple-Only (Recommended)

All three sub-brands can remain entirely within the purple palette:
- **ENRG Boost:** Purple 500 → Purple 300 gradient (progression)
- **ENRG SHINE:** Purple 800 → Purple 200 + Platinum (luxury)
- **Connect & Thrive:** Purple 500 + Purple 300 (network nodes)

**Benefits:**
- Stronger brand unity
- Simpler production (fewer colors to manage)
- More cohesive visual family

---

## File Naming Conventions

```
SubBrand_{ProgramName}_{AssetType}_{Version}.{ext}

Examples:
SubBrand_Boost_Logo_Primary_v1.svg
SubBrand_SHINE_Tier3Badge_v2.png
SubBrand_ConnectThrive_RecruitmentFlyer_v1.pdf
```

---

## QC Checklist

Before releasing sub-brand materials:

- [ ] Sub-brand logo uses correct colors from palette
- [ ] Plus Jakarta Sans is used consistently
- [ ] Parent ENRG brand is visible (co-branded appropriately)
- [ ] Visual metaphor (bars, gems, nodes) is clear
- [ ] Tier/level indicators are accurate
- [ ] Trademark symbol (™) is present on first usage
- [ ] Purple is primary color (green is accent only, if used)
- [ ] Design feels consistent with ENRG parent brand
- [ ] Clear space around logos is maintained
- [ ] File is named using convention

---

## Related Documents

- [Logos](./02-logos.md) — Parent brand logo specifications
- [Colors](./04-colors.md) — Purple palette and color system
- [Typography](./05-typography.md) — Plus Jakarta Sans usage
- [Applications](./08-applications.md) — Marketing material guidelines

---

*ENRG.realty*
