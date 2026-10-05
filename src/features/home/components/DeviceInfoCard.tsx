import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DeviceDetails } from '../types';
import { useTheme } from '../../../utils';

interface DeviceInfoCardProps {
  details: DeviceDetails;
}

export const DeviceInfoCard: React.FC<DeviceInfoCardProps> = ({ details }) => {
  const { colors } = useTheme();

  const rows = [
    { label: 'Operating System', value: `${details.osName} ${details.osVersion}` },
    { label: 'Device ID', value: details.deviceId },
    { label: 'Brand', value: details.brand },
    { label: 'Model', value: details.model },
    { label: 'App Version', value: details.appVersion },
    { label: 'Environment', value: details.isEmulator ? 'Simulator / Emulator' : 'Physical Device' },
  ];

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.cardBackground,
          borderColor: colors.border,
        },
      ]}
    >
      <Text style={[styles.cardTitle, { color: colors.primary }]}>
        Device Specifications
      </Text>
      {rows.map((row) => (
        <View
          key={row.label}
          style={[styles.row, { borderBottomColor: colors.border }]}
        >
          <Text style={[styles.label, { color: colors.textSecondary }]}>
            {row.label}
          </Text>
          <Text
            style={[styles.value, { color: colors.textPrimary }]}
            numberOfLines={1}
            ellipsizeMode="middle"
          >
            {row.value}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    marginVertical: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  label: {
    fontSize: 13,
    fontWeight: '500',
  },
  value: {
    fontSize: 13,
    fontWeight: '600',
    maxWidth: '55%',
    textAlign: 'right',
  },
});
