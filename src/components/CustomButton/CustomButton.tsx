import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import { useTheme } from '../../utils';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  style,
  textStyle,
  disabled = false,
}) => {
  const { colors } = useTheme();
  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';
  const isOutline = variant === 'outline';

  const buttonStyle: ViewStyle = {
    backgroundColor: isPrimary
      ? colors.primary
      : isSecondary
      ? colors.primaryLight
      : 'transparent',
    borderColor: isOutline ? colors.primary : undefined,
    borderWidth: isOutline ? 1.5 : 0,
  };

  const textVariantStyle: TextStyle = {
    color: isPrimary
      ? colors.white
      : isSecondary
      ? colors.primary
      : colors.primary,
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.base,
        buttonStyle,
        disabled && styles.disabled,
        style,
      ]}
    >
      <Text style={[styles.textBase, textVariantStyle, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  textBase: {
    fontSize: 16,
    fontWeight: '600',
  },
});
