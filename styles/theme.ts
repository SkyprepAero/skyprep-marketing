export const theme = {
  colors: {
    background: "var(--background)",
    foreground: "var(--foreground)",
    primary: "var(--brand-300)",
    primary100: "var(--brand-100)",
    primary200: "var(--brand-200)",
    primary300: "var(--brand-300)",
    muted: "var(--muted)",
    border: "var(--border)",
  },
  fonts: {
    sans: "var(--font-geist-sans)",
    mono: "var(--font-geist-mono)",
  },
  spacing: {
    container: 1200,
    radius: 12,
  },
} as const;

export type Theme = typeof theme;




