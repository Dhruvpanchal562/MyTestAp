import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../../utils';

interface SettingsDisplayFieldProps {
  label: string;
  value: string;
  icon?: string;
}

export const SettingsDisplayField: React.FC<SettingsDisplayFieldProps> = ({
  label,
  value,
  icon,
}) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
          borderColor: colors.border,
        },
      ]}
    >
      <View style={styles.content}>
        <Text style={[styles.label, { color: colors.textSecondary }]}>
          {label}
        </Text>
        <Text style={[styles.value, { color: colors.textPrimary }]}>
          {value || 'Not specified'}
        </Text>
      </View>
      {icon ? <Text style={styles.icon}>{icon}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 12,
  },
  content: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  value: {
    fontSize: 15,
    fontWeight: '600',
  },
  icon: {
    fontSize: 18,
    marginLeft: 8,
  },
});
