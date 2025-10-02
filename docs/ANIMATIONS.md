# Lottie Animation System

This document explains how to integrate and use Lottie animations in the SkyPrep marketing application.

## 📁 Project Structure

```
public/
├── animations/
│   ├── aviation/          # Aviation-themed animations
│   │   ├── flying-airplane.json
│   │   ├── helicopter.json
│   │   ├── aircraft-takeoff.json
│   │   └── pilot-training.json
│   ├── ui/               # UI/UX animations
│   │   ├── loading.json
│   │   ├── success.json
│   │   └── spinner.json
│   ├── backgrounds/      # Background animations
│   │   ├── clouds.json
│   │   ├── sky.json
│   │   └── flight-path.json
│   └── illustrations/    # Illustrative animations
│       ├── pilot.json
│       ├── aircraft.json
│       └── certificate.json

components/
├── LottieAnimation.tsx   # Main Lottie wrapper component
└── BackgroundAnimation.tsx # Specialized background component

lib/
└── animations.ts         # Animation utilities and constants
```

## 🚀 Quick Start

### 1. Basic Usage

```tsx
import { LottieAnimation } from '@/components/LottieAnimation';
import FlyingAirplane from '@/public/animations/aviation/flying-airplane.json';

function MyComponent() {
  return (
    <LottieAnimation
      animationData={FlyingAirplane}
      className="w-64 h-64"
      loop={true}
      autoplay={true}
    />
  );
}
```

### 2. Background Animation

```tsx
import { BackgroundAnimation } from '@/components/BackgroundAnimation';
import Clouds from '@/public/animations/backgrounds/clouds.json';

function HeroSection() {
  return (
    <section className="relative">
      <BackgroundAnimation
        animationData={Clouds}
        opacity={0.3}
        speed={0.5}
        playOnScroll={true}
      />
      {/* Your content here */}
    </section>
  );
}
```

### 3. Using Animation Presets

```tsx
import { LottieAnimation, AviationAnimations } from '@/components/LottieAnimation';
import { getAnimationPath } from '@/lib/animations';
import FlyingAirplane from '@/public/animations/aviation/flying-airplane.json';

function AviationSection() {
  const animationPath = getAnimationPath('aviation', 'flyingAirplane');
  
  return (
    <LottieAnimation
      animationData={FlyingAirplane}
      {...AviationAnimations.FlyingAirplane({
        className: 'w-full h-full',
        playOnScroll: true,
      })}
    />
  );
}
```

## 🎯 Recommended Placements

### 1. Mission & Vision Section
**Best for**: Subtle aviation-themed background animations
- **Animations**: Flying aircraft, clouds, flight paths
- **Configuration**: Low opacity (0.15-0.25), slow speed (0.3-0.5)
- **Blend Mode**: `soft-light` or `normal`

```tsx
<BackgroundAnimation
  animationData={FlyingAirplane}
  opacity={0.2}
  speed={0.4}
  blendMode="soft-light"
  playOnScroll={true}
/>
```

### 2. Hero Section
**Best for**: Dynamic aviation backgrounds
- **Animations**: Takeoff sequences, sky animations, radar sweeps
- **Configuration**: Medium opacity (0.3-0.5), medium speed (0.5-0.7)
- **Blend Mode**: `overlay` or `normal`

### 3. DGCA Requirements Section
**Best for**: Technical aviation animations
- **Animations**: Navigation instruments, radar displays, flight planning
- **Configuration**: Low opacity (0.15-0.25), slow speed (0.3-0.4)
- **Blend Mode**: `normal`

### 4. Interactive Elements
**Best for**: Hover animations and micro-interactions
- **Animations**: Button hovers, icon animations, success states
- **Configuration**: Full opacity (0.8-1.0), normal speed (1.0)
- **Trigger**: `playOnHover={true}`

## 🎨 Animation Guidelines

### Performance Considerations
1. **File Size**: Keep animations under 500KB
2. **Frame Rate**: Use 24-30 FPS for smooth playback
3. **Loop Duration**: Keep loops under 10 seconds
4. **Opacity**: Use low opacity (0.1-0.3) for backgrounds
5. **Speed**: Use slower speeds (0.3-0.7) for backgrounds

### Visual Hierarchy
1. **Background Animations**: Low opacity, slow speed
2. **Content Animations**: Medium opacity, normal speed
3. **Interactive Animations**: Full opacity, responsive speed
4. **Loading Animations**: Full opacity, normal speed

### Aviation Theme Consistency
1. **Colors**: Use aviation blues, whites, and grays
2. **Movement**: Smooth, professional motions
3. **Scale**: Realistic proportions for aircraft
4. **Timing**: Professional, not cartoonish

## 📱 Responsive Design

### Mobile Considerations
```tsx
<LottieAnimation
  animationData={animationData}
  className="w-full h-64 md:h-96 lg:h-[500px]"
  speed={0.7} // Slightly faster on mobile
  playOnScroll={true}
  scrollThreshold={0.2} // Trigger earlier on mobile
/>
```

### Performance on Mobile
- Reduce animation complexity on smaller screens
- Use `playOnScroll` to save battery
- Consider disabling on low-end devices

## 🔧 Advanced Features

### Scroll-Triggered Animations
```tsx
<LottieAnimation
  animationData={animationData}
  playOnScroll={true}
  scrollThreshold={0.3} // Start when 30% visible
  onComplete={() => console.log('Animation completed')}
/>
```

### Hover Interactions
```tsx
<LottieAnimation
  animationData={animationData}
  playOnHover={true}
  loop={false} // Play once on hover
  speed={1.2} // Slightly faster on hover
/>
```

### Custom Event Handling
```tsx
<LottieAnimation
  animationData={animationData}
  onComplete={() => setAnimationComplete(true)}
  onLoopComplete={() => setLoopCount(prev => prev + 1)}
  onEnterFrame={(frame) => {
    if (frame > 50) setHalfwayComplete(true);
  }}
/>
```

## 🎭 Animation Categories

### Aviation Animations
- **flying-airplane.json**: Main aircraft in flight
- **helicopter.json**: Helicopter operations
- **aircraft-takeoff.json**: Takeoff sequence
- **pilot-training.json**: Training scenarios
- **runway.json**: Runway operations
- **control-tower.json**: ATC operations

### Background Animations
- **clouds.json**: Moving cloud formations
- **sky.json**: Sky gradient animations
- **airport.json**: Airport environment
- **flight-path.json**: Flight trajectory paths
- **radar.json**: Radar sweep animations

### UI Animations
- **loading.json**: Loading indicators
- **success.json**: Success confirmations
- **error.json**: Error states
- **checkmark.json**: Completion indicators

## 🚀 Getting Started Checklist

1. ✅ Install `lottie-react` package
2. ✅ Create animation files in `public/animations/`
3. ✅ Import and use `LottieAnimation` component
4. ✅ Test performance on different devices
5. ✅ Optimize animation file sizes
6. ✅ Test responsive behavior
7. ✅ Add accessibility considerations
8. ✅ Test with slow connections

## 📚 Resources

- [Lottie Files](https://lottiefiles.com/) - Free animation library
- [After Effects to Lottie](https://lottiefiles.com/after-effects) - Export guide
- [Lottie React Documentation](https://github.com/LottieFiles/lottie-react) - Component docs
- [Animation Performance Guide](https://web.dev/animations/) - Performance tips
