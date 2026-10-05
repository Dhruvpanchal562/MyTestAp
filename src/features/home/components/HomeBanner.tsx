import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../../utils';

interface HomeBannerProps {
  message: string;
}

export const HomeBanner: React.FC<HomeBannerProps> = ({ message }) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <Text style={[styles.title, { color: colors.white }]}>{message}</Text>
      <Text style={[styles.subtitle, { color: colors.primaryLight }]}>
        Explore and manage your dashboard features
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 20,
    marginVertical: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 6,
  },
});
