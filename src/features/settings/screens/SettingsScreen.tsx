import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { AppHeader, ScreenWrapper } from '../../../components';
import { SettingsDisplayField } from '../components';
import { useAppSelector } from '../../../app/redux';
import { useTheme } from '../../../utils';

export const SettingsScreen: React.FC = () => {
  const { colors } = useTheme();
  const { formData } = useAppSelector((state) => state.settings);

  return (
    <ScreenWrapper>
      <AppHeader title="Settings" subtitle="User Profile Details" />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.cardBackground,
              borderColor: colors.border,
            },
          ]}
        >
          <View style={styles.avatarSection}>
            <View
              style={[
                styles.avatarCircle,
                { backgroundColor: colors.primaryLight },
              ]}
            >
              <Text style={[styles.avatarText, { color: colors.primary }]}>
                {formData.name ? formData.name.charAt(0).toUpperCase() : 'U'}
              </Text>
            </View>
            <Text style={[styles.profileName, { color: colors.textPrimary }]}>
              {formData.name}
            </Text>
            <Text
              style={[styles.profileEmail, { color: colors.textSecondary }]}
            >
              {formData.email}
            </Text>
          </View>

          <Text style={[styles.sectionTitle, { color: colors.primary }]}>
            Profile Information
          </Text>

          <SettingsDisplayField
            label="Name"
            value={formData.name}
            icon="👤"
          />

          <SettingsDisplayField
            label="Email Address"
            value={formData.email}
            icon="✉️"
          />

          <SettingsDisplayField
            label="Birthdate"
            value={formData.birthdate}
            icon="📅"
          />

          <SettingsDisplayField
            label="Country"
            value={formData.country}
            icon="🌍"
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  card: {
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
  },
  avatarSection: {
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CBD5E1',
  },
  avatarCircle: {
    width: 68,
    height: 68,
    borderRadius: 34,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  avatarText: {
    fontSize: 28,
    fontWeight: '700',
  },
  profileName: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 2,
  },
  profileEmail: {
    fontSize: 13,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 14,
  },
});
