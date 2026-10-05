export interface ThemeColors {
  primary: string;
  primaryLight: string;
  background: string;
  cardBackground: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  tabBarInactive: string;
  tabBarActive: string;
  tabBarBackground: string;
  white: string;
  danger: string;
  success: string;
}

export const lightColors: ThemeColors = {
  primary: '#2563EB',
  primaryLight: '#DBEAFE',
  background: '#F8FAFC',
  cardBackground: '#FFFFFF',
  textPrimary: '#0F172A',
  textSecondary: '#64748B',
  border: '#E2E8F0',
  tabBarInactive: '#94A3B8',
  tabBarActive: '#2563EB',
  tabBarBackground: '#FFFFFF',
  white: '#FFFFFF',
  danger: '#EF4444',
  success: '#22C55E',
};

export const darkColors: ThemeColors = {
  primary: '#3B82F6',
  primaryLight: '#1E3A8A',
  background: '#0F172A',
  cardBackground: '#1E293B',
  textPrimary: '#F8FAFC',
  textSecondary: '#94A3B8',
  border: '#334155',
  tabBarInactive: '#64748B',
  tabBarActive: '#3B82F6',
  tabBarBackground: '#1E293B',
  white: '#FFFFFF',
  danger: '#EF4444',
  success: '#22C55E',
};

export const getThemeColors = (isDark: boolean): ThemeColors =>
  isDark ? darkColors : lightColors;

export const colors = lightColors;
