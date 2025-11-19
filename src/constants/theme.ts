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