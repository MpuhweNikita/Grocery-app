interface ColorPalette {
  primary: string;
  secondary: string;
  background: string;
  white: string;
  text: string;
  textLight: string;
  textDisabled: string;
  success: string;
  error: string;
  warning: string;
  info: string;
  border: string;
}

export const COLORS : ColorPalette = {
    primary: '#1F2937',
    secondary: '#FF6B35',
    background: '#F9FAFB',
    white: '#FFFFFF',
    text: '#111827',
    textLight: '#6B7280',
    textDisabled: '#9CA3AF',
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
    info: '#3B82F6',
    border: '#E5E7EB',
}

interface Sizes {
    h1: number;
    h2: number;
    h3: number;
    body: number;
    small: number;
    tiny: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    radius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    full: number;
    };
}

interface Fonts {
    regular: string;
    medium: string;
    semiBold: string;
    bold: string;
}

export const FONTS: Fonts = {
    regular:'System',
    medium:'System',
    semiBold:'System-SemiBold',
    bold:'System-Bold', 
}

export const SHADOWS = {
    small:{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    medium:{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
    },
    large:{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 12,
        elevation: 8,
    }
}