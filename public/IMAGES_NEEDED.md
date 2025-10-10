# Required Images for SEO Optimization

To complete the SEO setup, you need to add the following images to the `/public` folder:

## 1. favicon.ico (CRITICAL)
- **Path**: `/public/favicon.ico`
- **Dimensions**: 32x32px or 48x48px
- **Format**: ICO format
- **Purpose**: Browser tab icon
- **How to create**: 
  - Export your logo as 32x32px PNG
  - Use online converter: https://favicon.io/favicon-converter/
  - Rename to `favicon.ico`

## 2. apple-touch-icon.png (HIGH PRIORITY)
- **Path**: `/public/apple-touch-icon.png`
- **Dimensions**: 180x180px
- **Format**: PNG
- **Purpose**: iOS home screen icon
- **How to create**: 
  - Export your logo as 180x180px PNG
  - Ensure it has some padding (logo should be ~80% of canvas)
  - Name as `apple-touch-icon.png`

## 3. og-image.png (CRITICAL for Social Sharing)
- **Path**: `/public/og-image.png`
- **Dimensions**: 1200x630px (EXACT)
- **Format**: PNG or JPG
- **Purpose**: Social media share preview (Facebook, Twitter, LinkedIn)
- **Design Guidelines**:
  - Include your logo prominently
  - Add text: "Launching Soon" or "Coming Soon"
  - Add tagline: "Shaping Aviators with Precision"
  - Use your brand colors (blue, amber, purple)
  - Keep important content in center (safe zone)
  - Test preview: https://www.opengraph.xyz/

### Recommended OG Image Layout:
```
┌─────────────────────────────────────────┐
│                                         │
│         [SkyPrep Logo - Large]          │
│                                         │
│          LAUNCHING SOON                 │
│                                         │
│    Shaping Aviators with Precision      │
│                                         │
│    Expert DGCA Prep | Aviation Training │
│                                         │
└─────────────────────────────────────────┘
```

## Quick Creation Options:

### Option 1: Canva (Easiest)
1. Go to Canva.com
2. Create custom size: 1200x630px
3. Add your logo, text, and brand colors
4. Export as PNG

### Option 2: Figma (Professional)
1. Create 1200x630px frame
2. Design with logo and text
3. Export as PNG

### Option 3: Online Tools
- **OG Image Generator**: https://og-image.vercel.app/
- **Favicon Generator**: https://favicon.io/
- **Social Image Maker**: https://www.bannerbear.com/

## After Adding Images:

✅ Clear Next.js cache: `npm run build`
✅ Test locally: `npm run dev`
✅ Check favicon appears in browser tab
✅ Test OG image: https://www.opengraph.xyz/ or https://cards-dev.twitter.com/validator

## Current Status:
- ❌ favicon.ico - NOT CREATED
- ❌ apple-touch-icon.png - NOT CREATED  
- ❌ og-image.png - NOT CREATED
- ✅ logo.png - EXISTS (but wrong dimensions for OG)

## Priority Order:
1. **og-image.png** (1200x630) - Critical for social sharing
2. **favicon.ico** (32x32) - Critical for branding
3. **apple-touch-icon.png** (180x180) - Important for mobile

---

**Note**: Your logo.png currently exists, but you need to create these specific versions with the exact dimensions for optimal SEO and user experience.

