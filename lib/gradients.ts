/**
 * Aviation Excellence Gradient System
 * 
 * TypeScript utilities for accessing gradient values programmatically
 * and maintaining consistency across the SkyPrep application.
 */

export const GRADIENTS = {
  // Primary Aviation Gradients
  aviationPrimary: 'linear-gradient(135deg, #0080FF 0%, #0066CC 50%, #004499 100%)',
  aviationExcellence: 'linear-gradient(135deg, #0080FF 0%, #0066CC 100%)',
  aviationSecondary: 'linear-gradient(135deg, #00BFFF 0%, #0080FF 100%)',
  aviationAccent: 'linear-gradient(135deg, #4FC3F7 0%, #0080FF 100%)',
  
  // Sky-themed Gradients
  skyLight: 'linear-gradient(135deg, #87CEEB 0%, #00BFFF 100%)',
  skyDark: 'linear-gradient(135deg, #4682B4 0%, #0066CC 100%)',
  
  // Professional Gradients
  professional: 'linear-gradient(135deg, #0066CC 0%, #004499 100%)',
  enterprise: 'linear-gradient(135deg, #003366 0%, #0066CC 100%)',
} as const;

export const GRADIENT_COLORS = {
  // Base Colors for Aviation Excellence
  aviationBlue: '#0080FF',
  aviationBlueDark: '#0066CC',
  aviationBlueDarker: '#004499',
  
  // Secondary Colors
  skyBlue: '#00BFFF',
  lightBlue: '#4FC3F7',
  powderBlue: '#87CEEB',
  steelBlue: '#4682B4',
  navyBlue: '#003366',
} as const;

export type GradientType = keyof typeof GRADIENTS;
export type GradientColorType = keyof typeof GRADIENT_COLORS;

/**
 * Get gradient CSS string by name
 */
export function getGradient(gradientName: GradientType): string {
  return GRADIENTS[gradientName];
}

/**
 * Get gradient color by name
 */
export function getGradientColor(colorName: GradientColorType): string {
  return GRADIENT_COLORS[colorName];
}

/**
 * Create custom gradient with specified colors
 */
export function createGradient(
  color1: string, 
  color2: string, 
  direction: 'to-right' | 'to-left' | 'to-bottom' | 'to-top' | 'to-bottom-right' | 'to-bottom-left' = 'to-bottom-right'
): string {
  const directionMap = {
    'to-right': '90deg',
    'to-left': '270deg',
    'to-bottom': '180deg',
    'to-top': '0deg',
    'to-bottom-right': '135deg',
    'to-bottom-left': '225deg',
  };
  
  return `linear-gradient(${directionMap[direction]}, ${color1} 0%, ${color2} 100%)`;
}

/**
 * Apply gradient text styling to an element
 */
export function applyGradientText(
  element: HTMLElement, 
  gradientName: GradientType
): void {
  const gradient = getGradient(gradientName);
  element.style.background = gradient;
  element.style.backgroundClip = 'text';
  element.style.webkitBackgroundClip = 'text';
  element.style.webkitTextFillColor = 'transparent';
  element.style.color = 'transparent';
}

/**
 * Get Tailwind-compatible gradient classes
 */
export const GRADIENT_CLASSES = {
  aviationPrimary: 'bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700',
  aviationExcellence: 'bg-gradient-to-br from-blue-500 to-blue-600',
  aviationSecondary: 'bg-gradient-to-br from-sky-400 to-blue-500',
  aviationAccent: 'bg-gradient-to-br from-blue-300 to-blue-500',
  skyLight: 'bg-gradient-to-br from-sky-300 to-sky-400',
  skyDark: 'bg-gradient-to-br from-blue-600 to-blue-700',
  professional: 'bg-gradient-to-br from-blue-600 to-blue-800',
  enterprise: 'bg-gradient-to-br from-blue-900 to-blue-600',
} as const;

/**
 * Get gradient text classes for Tailwind
 */
export const GRADIENT_TEXT_CLASSES = {
  aviationPrimary: 'gradient-text-primary',
  aviationExcellence: 'gradient-text-excellence',
  aviationSecondary: 'gradient-text-secondary',
  aviationAccent: 'gradient-text-accent',
  skyLight: 'gradient-text-sky-light',
  skyDark: 'gradient-text-sky-dark',
  professional: 'gradient-text-professional',
  enterprise: 'gradient-text-enterprise',
} as const;

/**
 * Common gradient combinations for different contexts
 */
export const GRADIENT_CONTEXTS = {
  hero: 'aviationExcellence',
  headings: 'aviationPrimary',
  accents: 'aviationSecondary',
  highlights: 'aviationAccent',
  subtitles: 'skyLight',
  professional: 'professional',
  enterprise: 'enterprise',
} as const;
