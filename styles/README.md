# Aviation Excellence Gradient System

A comprehensive gradient system for consistent text styling throughout the SkyPrep application, inspired by the "Aviation Excellence" design.

## Quick Start

### 1. CSS Classes (Easiest)

```tsx
// Basic usage with CSS classes
<h1 className="gradient-text-excellence">Aviation Excellence</h1>
<h2 className="gradient-text-primary">Professional Training</h2>
<span className="gradient-text-secondary">SkyPrep Academy</span>
```

### 2. React Component (Recommended)

```tsx
import { GradientText, AviationExcellence, AviationPrimary } from '@/components/GradientText';

// Using the main component
<GradientText gradient="aviationExcellence" as="h1" className="text-4xl font-bold">
  Aviation Excellence
</GradientText>

// Using predefined components
<AviationExcellence as="h2" className="text-3xl">
  Professional Training
</AviationExcellence>

<AviationPrimary as="span" className="text-xl">
  SkyPrep Academy
</AviationPrimary>
```

### 3. Programmatic Access

```tsx
import { getGradient, GRADIENTS, GRADIENT_TEXT_CLASSES } from '@/lib/gradients';

// Get gradient CSS string
const gradient = getGradient('aviationExcellence');

// Get CSS class
const className = GRADIENT_TEXT_CLASSES.aviationExcellence;

// Direct access to gradients
const customStyle = {
  background: GRADIENTS.aviationExcellence,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};
```

## Available Gradients

### Primary Aviation Gradients
- `aviationExcellence` - The signature "Aviation Excellence" gradient (#0080FF to #0066CC)
- `aviationPrimary` - Three-color aviation gradient with depth
- `aviationSecondary` - Sky blue to aviation blue
- `aviationAccent` - Light blue to aviation blue

### Sky-themed Gradients
- `skyLight` - Light sky gradient for subtitles
- `skyDark` - Darker sky gradient for professional text

### Professional Gradients
- `professional` - Deep blue professional gradient
- `enterprise` - Navy to blue enterprise gradient

## Usage Examples

### Hero Section
```tsx
<AviationExcellence as="h1" className="text-5xl md:text-7xl font-bold">
  Aviation Excellence
</AviationExcellence>
```

### Section Headers
```tsx
<AviationPrimary as="h2" className="text-3xl md:text-4xl font-semibold">
  Professional Training Programs
</AviationPrimary>
```

### Accent Text
```tsx
<AviationSecondary as="span" className="text-lg font-medium">
  Expert Guidance
</AviationSecondary>
```

### Subtitles
```tsx
<SkyText as="p" className="text-xl">
  Master your aviation journey with confidence
</SkyText>
```

### Animated Text
```tsx
<GradientText 
  gradient="aviationExcellence" 
  animate={true} 
  as="h1" 
  className="text-4xl font-bold"
>
  Animated Aviation Excellence
</GradientText>
```

### Hover Effects
```tsx
<GradientText 
  gradient="aviationPrimary" 
  hover={true} 
  as="span" 
  className="text-xl cursor-pointer"
>
  Hover for effect
</GradientText>
```

## Integration with Existing Components

### Update Mission & Vision Section
```tsx
// Replace existing gradient text
<h2 className="gradient-text-excellence text-4xl md:text-6xl font-bold mb-4">
  Mission & Vision
</h2>
```

### Update Flight Plan Section
```tsx
<h2 className="gradient-text-primary text-4xl md:text-6xl font-semibold tracking-tight">
  How to become a pilot
</h2>
```

### Update DGCA Requirements
```tsx
<h2 className="gradient-text-excellence text-4xl md:text-6xl font-bold mb-6">
  DGCA Requirements
</h2>
```

## Customization

### Create Custom Gradient
```tsx
import { createGradient } from '@/lib/gradients';

const customGradient = createGradient('#FF6B6B', '#4ECDC4', 'to-bottom-right');

const customStyle = {
  background: customGradient,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};
```

### Add New Gradient to System
1. Add to `styles/gradients.css`:
```css
--gradient-custom: linear-gradient(135deg, #color1 0%, #color2 100%);
.gradient-text-custom {
  background: var(--gradient-custom);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

2. Add to `lib/gradients.ts`:
```typescript
custom: 'linear-gradient(135deg, #color1 0%, #color2 100%)',
```

## Best Practices

1. **Consistency**: Use `aviationExcellence` for main headings
2. **Hierarchy**: Use different gradients for different text levels
3. **Readability**: Ensure sufficient contrast with backgrounds
4. **Performance**: Prefer CSS classes over inline styles
5. **Accessibility**: Provide fallback colors for users with visual impairments

## Browser Support

- ✅ Chrome 26+
- ✅ Firefox 16+
- ✅ Safari 7+
- ✅ Edge 12+

The gradient system uses standard CSS properties with vendor prefixes for maximum compatibility.
