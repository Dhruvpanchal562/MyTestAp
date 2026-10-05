import { useAppDispatch, useAppSelector } from '../app/redux';
import { toggleDarkMode } from '../features/settings/redux';
import { getThemeColors, ThemeColors } from './colors';

export interface UseThemeReturn {
  colors: ThemeColors;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeReturn => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector(
    (state) => state.settings.darkModeEnabled
  );

  const colors = getThemeColors(isDarkMode);

  const toggleTheme = () => {
    dispatch(toggleDarkMode());
  };

  return {
    colors,
    isDarkMode,
    toggleTheme,
  };
};
