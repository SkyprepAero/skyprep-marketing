# Home Page Components

This directory contains all components specifically used on the home page, following the separation of concerns principle.

## Structure

```
app/home/
├── components/
│   ├── DGCARequirements.tsx    # DGCA Requirements section with video background
│   ├── WhyChooseSkyPrep.tsx    # Why Choose SkyPrep features section
│   ├── FlightPlan.tsx          # Flight Plan section with GroundTabs
│   ├── MissionVision.tsx       # Mission, Vision, and Core Values section
│   ├── ScrollAnimation.tsx     # Reusable scroll animation wrapper
│   ├── RequirementCard.tsx     # Individual requirement card component
│   └── index.ts                # Component exports
└── README.md                   # This file
```

## Components

### DGCARequirements
- **Purpose**: Displays DGCA licensing requirements with video background
- **Features**: 
  - Full-screen video background with overlay
  - Card-based layout for flight hour requirements
  - Interactive hover effects
  - Call-to-action buttons

### WhyChooseSkyPrep
- **Purpose**: Showcases key features and benefits of SkyPrep
- **Features**:
  - Grid layout of feature cards
  - Icons and descriptions for each feature
  - Hover animations and effects

### FlightPlan
- **Purpose**: Explains the pilot training journey
- **Features**:
  - Gradient background with decorative elements
  - Two-column layout (text + interactive tabs)
  - Quick links and action buttons
  - Integrates with GroundTabs component

### MissionVision
- **Purpose**: Displays company mission, vision, and core values
- **Features**:
  - Two-column layout for mission and vision
  - Animated floating background elements
  - Hover effects and smooth transitions
  - Core values section with icons
  - Scroll-triggered animations

## Benefits of This Structure

1. **Separation of Concerns**: Each component has a single responsibility
2. **Reusability**: Components can be easily reused or modified
3. **Maintainability**: Easier to locate and update specific sections
4. **Testing**: Individual components can be tested in isolation
5. **Performance**: Better code splitting and lazy loading opportunities

## Usage

```tsx
import { DGCARequirements, WhyChooseSkyPrep, FlightPlan, MissionVision } from "@/app/home/components";

export default function HomePage() {
  return (
    <>
      <VideoHero />
      <FlightPlan />
      <MissionVision />
      <DGCARequirements />
      <WhyChooseSkyPrep />
      <TestimonialsMarquee />
    </>
  );
}
```

## Best Practices

- Keep components focused on a single responsibility
- Use TypeScript for better type safety
- Export components through the index.ts file
- Maintain consistent styling and animation patterns
- Document any complex logic or props
