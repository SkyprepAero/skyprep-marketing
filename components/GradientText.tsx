/**
 * GradientText Component
 * 
 * A reusable component for applying aviation-themed gradient text styling
 * throughout the SkyPrep application.
 */

import React from 'react';
import { GRADIENT_TEXT_CLASSES, type GradientType } from '@/lib/gradients';

interface GradientTextProps {
  children: React.ReactNode;
  gradient?: GradientType;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  animate?: boolean;
  hover?: boolean;
}

export function GradientText({ 
  children, 
  gradient = 'aviationExcellence',
  className = '',
  as: Component = 'span',
  animate = false,
  hover = false
}: GradientTextProps) {
  const gradientClass = GRADIENT_TEXT_CLASSES[gradient];
  const animateClass = animate ? 'gradient-animate' : '';
  const hoverClass = hover ? 'gradient-text-hover' : '';
  
  return (
    <Component 
      className={`${gradientClass} ${animateClass} ${hoverClass} ${className}`}
    >
      {children}
    </Component>
  );
}

// Predefined gradient text components for common use cases
export const AviationExcellence = ({ children, ...props }: Omit<GradientTextProps, 'gradient'>) => (
  <GradientText gradient="aviationExcellence" {...props}>
    {children}
  </GradientText>
);

export const AviationPrimary = ({ children, ...props }: Omit<GradientTextProps, 'gradient'>) => (
  <GradientText gradient="aviationPrimary" {...props}>
    {children}
  </GradientText>
);

export const AviationSecondary = ({ children, ...props }: Omit<GradientTextProps, 'gradient'>) => (
  <GradientText gradient="aviationSecondary" {...props}>
    {children}
  </GradientText>
);

export const ProfessionalText = ({ children, ...props }: Omit<GradientTextProps, 'gradient'>) => (
  <GradientText gradient="professional" {...props}>
    {children}
  </GradientText>
);

export const SkyText = ({ children, ...props }: Omit<GradientTextProps, 'gradient'>) => (
  <GradientText gradient="skyLight" {...props}>
    {children}
  </GradientText>
);
