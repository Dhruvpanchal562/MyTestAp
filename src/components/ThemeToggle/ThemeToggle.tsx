import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../utils';

export const ThemeToggle: React.FC = () => {
  const { colors, isDarkMode, toggleTheme } = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={toggleTheme}
      style={[
        styles.button,
        isDarkMode ? styles.buttonDark : styles.buttonLight,
        { borderColor: colors.border },
      ]}
      accessibilityRole="button"
      accessibilityLabel="Toggle Theme"
    >
      <Text style={styles.icon}>{isDarkMode ? '🌙' : '☀️'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLight: {
    backgroundColor: '#F1F5F9',
  },
  buttonDark: {
    backgroundColor: '#334155',
  },
  icon: {
    fontSize: 16,
  },
});
