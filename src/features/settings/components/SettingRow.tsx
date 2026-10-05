import React, { ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../../utils';

interface SettingRowProps {
  label: string;
  description?: string;
  rightElement?: ReactNode;
  onPress?: () => void;
}

export const SettingRow: React.FC<SettingRowProps> = ({
  label,
  description,
  rightElement,
  onPress,
}) => {
  const { colors } = useTheme();
  const Component = onPress ? TouchableOpacity : View;

  return (
    <Component
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: colors.cardBackground,
          borderBottomColor: colors.border,
        },
      ]}
    >
      <View style={styles.textContainer}>
        <Text style={[styles.label, { color: colors.textPrimary }]}>
          {label}
        </Text>
        {description ? (
          <Text style={[styles.description, { color: colors.textSecondary }]}>
            {description}
          </Text>
        ) : null}
      </View>
      {rightElement ? <View style={styles.right}>{rightElement}</View> : null}
    </Component>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
  },
  textContainer: {
    flex: 1,
    marginRight: 12,
  },
  label: {
    fontSize: 15,
    fontWeight: '500',
  },
  description: {
    fontSize: 12,
    marginTop: 2,
  },
  right: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
