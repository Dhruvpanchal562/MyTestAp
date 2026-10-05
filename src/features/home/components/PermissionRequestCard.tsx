import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CustomButton } from '../../../components';
import { useTheme } from '../../../utils';

interface PermissionRequestCardProps {
  onRequestPermission: () => void;
}

export const PermissionRequestCard: React.FC<PermissionRequestCardProps> = ({
  onRequestPermission,
}) => {
  const { colors } = useTheme();

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
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>🔒</Text>
      </View>
      <Text style={[styles.title, { color: colors.textPrimary }]}>
        Device Access Permission Required
      </Text>
      <Text style={[styles.description, { color: colors.textSecondary }]}>
        To display your operating system, device ID, hardware brand and model,
        permission is required.
      </Text>
      <CustomButton
        title="Grant Permission & View Details"
        onPress={onRequestPermission}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: 'center',
    marginVertical: 8,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#EEF2F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  icon: {
    fontSize: 22,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 16,
  },
  button: {
    width: '100%',
  },
});
