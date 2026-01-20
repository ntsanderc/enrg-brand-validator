# Photography & Stock Imagery

> **Audience:** Marketing team, content creators, and agents selecting imagery for ENRG materials.

*Last Updated: January 2026*

---

## Overview

Photography establishes the emotional tone of ENRG's brand. Whether original photography or curated stock imagery, all visuals should feel **modern, warm, and aspirational** — reflecting the energy and professionalism of the real estate experience.

**Key Principle:** Show real moments, not staged perfection. Authenticity over artifice.

---

## Photography Style

### Visual Character

**ENRG photography is:**
- **Modern** — Clean lines, contemporary architecture, updated interiors
- **Warm** — Natural light, golden hour tones, inviting atmospheres
- **Aspirational** — Desirable but attainable, luxury without ostentation
- **Human** — People in natural moments, genuine expressions

**ENRG photography is NOT:**
- Overly staged or artificial
- Dark, moody, or dramatic (avoid noir aesthetics)
- Cluttered or chaotic
- Dated or vintage (avoid retro filters or outdated decor)

---

## Real Estate Photography Standards

### Property Photography

**Exterior Shots:**
- Shoot during golden hour (1 hour after sunrise or before sunset) when possible
- Include landscaping and curb appeal
- Show full property facade with context (street, neighborhood feel)
- Use wide-angle lens (16-24mm) but avoid excessive distortion
- Ensure straight verticals (no leaning buildings)

**Interior Shots:**
- Natural light preferred (open curtains, blinds)
- Use HDR or bracketing for balanced exposure (avoid blown-out windows)
- Declutter and stage minimally (remove personal items)
- Shoot from corners at 4-5 feet height (eye level)
- Capture defining features (fireplace, kitchen island, architectural details)

**Room-by-Room Priorities:**
1. **Kitchen** — Most important room, multiple angles
2. **Living Room** — Show flow and layout
3. **Primary Bedroom** — Serene, inviting
4. **Bathrooms** — Clean, well-lit, updated
5. **Outdoor Spaces** — Patios, decks, yards

**Technical Settings:**
- ISO: 100-400 (minimize noise)
- Aperture: f/8-f/11 (sharp focus front-to-back)
- White Balance: Daylight (5000-5500K) or Auto with correction
- Format: RAW for editing flexibility, export JPEG for web

---

### Lifestyle & People Photography

**Agent Portraits:**
- See [Headshot Standards](./09-headshot-standards.md) for detailed guidelines
- Natural expressions, approachable
- Business professional attire
- AI-enhanced backgrounds in brand purple palette

**Lifestyle Scenes:**
- Authentic moments (not overly posed)
- Diverse representation (age, ethnicity, family types)
- Natural interactions (families, couples, individuals)
- Real estate contexts (touring homes, closing celebrations, moving in)

**Avoid:**
- Stock photo clichés (handshakes over table, fake laptop meetings)
- Overly diverse "corporate diversity photo" staging
- Forced smiles or awkward poses
- Dated fashion or hairstyles

---

## Color Grading & Filters

### Approved Color Profiles

**Warm & Inviting (Primary Style):**
- Slight warm shift (+5-10% orange/yellow)
- Enhanced golden hour tones
- Lifted shadows (prevent crushed blacks)
- Soft contrast (not harsh or dramatic)

**Clean & Modern (Secondary Style):**
- Neutral white balance (accurate colors)
- Enhanced whites and brights
- Crisp but not oversaturated
- Minimal vignetting

**Luxury (High-End Listings):**
- Deeper shadows for drama
- Rich tones (jewel tones, deep woods)
- Subtle purple color cast in shadows (brand integration)
- Enhanced contrast for impact

### Lightroom/Photoshop Presets

**ENRG Warm Preset:**
```
Exposure: +0.3
Contrast: +10
Highlights: -15
Shadows: +20
Whites: +10
Blacks: -5
Temperature: +5
Tint: +2
Vibrance: +15
Saturation: +5
```

**ENRG Clean Preset:**
```
Exposure: +0.2
Contrast: +15
Highlights: -10
Shadows: +15
Whites: +15
Blacks: 0
Temperature: 0
Tint: 0
Clarity: +10
Vibrance: +10
```

### Avoid These Filters

**Never Use:**
- Heavy vignetting (dark corners)
- Black-and-white or sepia tones (dated)
- Oversaturated "Instagram" filters
- Vintage film grain effects
- Extreme HDR (halo artifacts, unnatural glow)

---

## Stock Image Sources

### Approved Stock Libraries

| Source | License Type | Best For | Cost |
|--------|-------------|----------|------|
| **Unsplash** | Free (Unsplash License) | Lifestyle, interiors, architecture | Free |
| **Pexels** | Free (Pexels License) | People, homes, general lifestyle | Free |
| **Adobe Stock** | Paid (Standard License) | High-quality professional imagery | $29.99/month (10 images) |
| **iStock** | Paid (Standard License) | Diverse real estate scenes | $29/month (10 images) |
| **Shutterstock** | Paid (Standard License) | Extensive library, people-focused | $29/month (10 images) |

### Licensing Guidelines

**Free Stock (Unsplash, Pexels):**
- Commercial use allowed
- No attribution required (but appreciated)
- Cannot resell or redistribute as-is
- Can modify and use in marketing materials

**Paid Stock (Adobe, iStock, Shutterstock):**
- Standard License covers print, web, social media
- Extended License required for merchandise or resale
- Keep license records for legal compliance
- Download highest resolution available

---

## Stock Image Selection Criteria

### ✅ Use Images That Are:

- **High Resolution** — Minimum 2000px on longest side
- **Well-Lit** — Natural light, even exposure
- **On-Brand** — Modern, warm, aspirational aesthetic
- **Authentic** — Real moments, not overly staged
- **Diverse** — Representing varied ages, ethnicities, family structures
- **Relevant** — Clear connection to real estate, homeownership, lifestyle

### ❌ Avoid Images That Are:

- **Clichéd** — Overused stock photo tropes (couple holding house keys in front of "SOLD" sign)
- **Dated** — Fashion, decor, or technology that looks old
- **Watermarked** — Always download licensed, clean files
- **Cluttered** — Busy backgrounds that distract from message
- **Inconsistent** — Drastically different styles from ENRG aesthetic

---

## Image Treatment for Brand Consistency

### Purple Overlay Technique

**When:** Using generic stock photos that need brand integration

**How:**
1. Open image in Photoshop
2. Create new layer filled with Purple 500 (#6021E6)
3. Set layer blend mode to "Multiply" or "Color"
4. Reduce opacity to 10-20%
5. Result: Subtle purple tint that brands the image

```css
/* CSS equivalent for web */
.branded-image {
  position: relative;
}

.branded-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(96, 33, 230, 0.1);
  mix-blend-mode: multiply;
  pointer-events: none;
}
```

### Gradient Mask Technique

**When:** Hero images that need text overlay

**How:**
1. Create gradient from Purple 800 (bottom) to transparent (top)
2. Overlay gradient on bottom 40% of image
3. Place white text on gradient area
4. Result: Readable text with brand-colored gradient

```css
.hero-image-mask {
  background: linear-gradient(to top, rgba(41, 0, 128, 0.85) 0%, transparent 50%);
}
```

---

## Photography Checklist by Use Case

### Property Listing Photos

- [ ] 20-30 photos minimum for single-family home
- [ ] Exterior shots at golden hour (if possible)
- [ ] All major rooms captured (kitchen, living, bedrooms, baths)
- [ ] HDR or bracketed exposures for even lighting
- [ ] Verticals are straight (no leaning walls)
- [ ] Clutter removed, staging minimal
- [ ] Resolution: 4000×3000px minimum
- [ ] Format: JPEG, sRGB color space
- [ ] File size: Under 2MB per image (for web upload)

### Marketing Collateral (Brochures, Flyers)

- [ ] Images are high-resolution (300 DPI at print size)
- [ ] Consistent color grading across all photos
- [ ] Mix of property shots and lifestyle imagery
- [ ] Licensed stock images (keep records)
- [ ] Purple tint applied for brand consistency
- [ ] Images support copy/headline narrative

### Social Media Posts

- [ ] Square crop (1:1) or portrait (4:5) for Instagram
- [ ] Landscape (16:9) for Facebook/LinkedIn
- [ ] Resolution: 1200×1200px minimum (square)
- [ ] Bright, eye-catching (stands out in feed)
- [ ] Text overlay readable on mobile
- [ ] Brand colors present (purple accent or overlay)

### Website Hero Images

- [ ] Landscape orientation (16:9 or 21:9)
- [ ] Resolution: 2400×1350px minimum (for retina displays)
- [ ] Focal point in center (avoid cropping off key elements)
- [ ] Gradient mask if text overlay is present
- [ ] File optimized (WebP format, <500KB)
- [ ] Warm, inviting atmosphere

---

## Photography Mistakes to Avoid

### Common Pitfalls

**Overprocessing:**
- HDR with halos around objects
- Oversaturated colors (neon skies, ultra-green grass)
- Excessive sharpening (crispy edges, artifacts)

**Poor Composition:**
- Crooked horizons or verticals
- Cluttered foreground (distracting objects)
- Poor framing (cutting off important elements)

**Technical Errors:**
- Motion blur (camera shake or moving subjects)
- Incorrect white balance (blue or yellow cast)
- Underexposure (muddy shadows) or overexposure (blown highlights)

**Brand Misalignment:**
- Dark, moody lighting (conflicts with warm, aspirational aesthetic)
- Outdated decor or styling
- Inconsistent color grading across image set

---

## Asset Organization

### File Naming Convention

```
{ProjectType}_{Location}_{Description}_{Photographer}_{Date}.{ext}

Examples:
Listing_123MainSt_Kitchen_JohnDoe_2026-01-15.jpg
Marketing_SocialPost_FamilyMovingIn_StockPhoto_2026-01.jpg
Headshot_SmithJohn_SoftLavender_2026-01-10.jpg
```

### Folder Structure

```
ENRG Photography/
├── Listings/
│   ├── 2026/
│   │   ├── 123-Main-St/
│   │   │   ├── Exterior/
│   │   │   ├── Interior/
│   │   │   └── Edited/
│   ├── 2025/
│   └── ...
├── Marketing/
│   ├── Stock-Licensed/
│   ├── Original-Shoots/
│   └── Social-Media/
├── Headshots/
│   ├── Agents/
│   ├── Leadership/
│   └── Staff/
└── Brand-Assets/
    ├── Lifestyle/
    └── Architecture/
```

---

## Related Documents

- [Headshot Standards](./09-headshot-standards.md) — Professional headshot requirements
- [Colors](./04-colors.md) — Purple palette for overlays and treatments
- [Applications](./08-applications.md) — Usage in marketing materials

---

*ENRG.realty*
