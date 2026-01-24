// Color constants - replacement for SCSS variables
export const COLORS = {
  // Primary colors
  black: '#1a1a1a',
  white: '#fefefe',
  
  // Accent colors
  blue: '#005CAD',
  darkTeal: '#00243A',
  cyan: '#00FFFF',
  
  // Status colors
  red: '#ff0000',
  green: '#00cc00',
  
  // Background colors
  pageBg: '#e9e9e0',
  primaryColor: '#00243A',
  headerBg: 'rgba(0, 36, 58, 0.8)',
  glassBoxBg: 'rgba(0, 36, 58, 0.8)',
} as const;

export const SPACING = {
  // Spacing based on 8px base unit
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xl2: 24,
  xl3: 32,
  xl4: 40,
  xl5: 48,
  xl6: 56,
  xl7: 64,
  xl8: 72,
  xl9: 80,
} as const;

export const BORDER_RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 9999,
} as const;

export const TYPOGRAPHY = {
  fontSizes: {
    xs: 10,
    sm: 12,
    base: 14,
    lg: 16,
    xl: 18,
    xl2: 20,
    xl3: 24,
    xl4: 28,
    xl5: 32,
  },
  fontWeights: {
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
} as const;

export const SHADOWS = {
  none: 'none',
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 12,
  },
} as const;
