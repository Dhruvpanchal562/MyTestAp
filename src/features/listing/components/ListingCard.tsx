import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListingItem } from '../types';
import { useTheme } from '../../../utils';

interface ListingCardProps {
  item: ListingItem;
}

export const ListingCard: React.FC<ListingCardProps> = ({ item }) => {
  const { colors, isDarkMode } = useTheme();

  const isAvailable = item.status === 'In Stock';
  const isLimited = item.status === 'Limited';

  const badgeBgStyle = isAvailable
    ? isDarkMode
      ? styles.badgeActiveDark
      : styles.badgeActiveLight
    : isLimited
    ? isDarkMode
      ? styles.badgeLimitedDark
      : styles.badgeLimitedLight
    : isDarkMode
    ? styles.badgeSoldDark
    : styles.badgeSoldLight;

  const badgeTextStyle = isAvailable
    ? isDarkMode
      ? styles.badgeTextActiveDark
      : styles.badgeTextActiveLight
    : isLimited
    ? isDarkMode
      ? styles.badgeTextLimitedDark
      : styles.badgeTextLimitedLight
    : isDarkMode
    ? styles.badgeTextSoldDark
    : styles.badgeTextSoldLight;

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
      <View style={styles.header}>
        <View
          style={[
            styles.categoryPill,
            isDarkMode ? styles.categoryPillDark : styles.categoryPillLight,
          ]}
        >
          <Text style={[styles.category, { color: colors.primary }]}>
            {item.category}
          </Text>
        </View>

        <View style={[styles.badge, badgeBgStyle]}>
          <Text style={[styles.badgeText, badgeTextStyle]}>{item.status}</Text>
        </View>
      </View>

      <Text
        style={[styles.title, { color: colors.textPrimary }]}
        numberOfLines={2}
      >
        {item.title}
      </Text>

      <Text
        style={[styles.description, { color: colors.textSecondary }]}
        numberOfLines={2}
      >
        {item.description}
      </Text>

      <View
        style={[styles.footer, { borderTopColor: colors.border }]}
      >
        <View>
          <Text style={[styles.sellerLabel, { color: colors.textSecondary }]}>
            Seller: {item.seller}
          </Text>
          <Text style={[styles.rating, { color: colors.textSecondary }]}>
            ⭐ {item.rating} / 5.0
          </Text>
        </View>
        <Text style={[styles.price, { color: colors.primary }]}>
          {item.price}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryPill: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  categoryPillLight: {
    backgroundColor: '#DBEAFE',
  },
  categoryPillDark: {
    backgroundColor: '#1E3A8A',
  },
  category: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  badgeActiveLight: {
    backgroundColor: '#DCFCE7',
  },
  badgeActiveDark: {
    backgroundColor: '#064E3B',
  },
  badgeLimitedLight: {
    backgroundColor: '#FEF3C7',
  },
  badgeLimitedDark: {
    backgroundColor: '#78350F',
  },
  badgeSoldLight: {
    backgroundColor: '#FEE2E2',
  },
  badgeSoldDark: {
    backgroundColor: '#7F1D1D',
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '700',
  },
  badgeTextActiveLight: {
    color: '#16A34A',
  },
  badgeTextActiveDark: {
    color: '#34D399',
  },
  badgeTextLimitedLight: {
    color: '#D97706',
  },
  badgeTextLimitedDark: {
    color: '#FBBF24',
  },
  badgeTextSoldLight: {
    color: '#DC2626',
  },
  badgeTextSoldDark: {
    color: '#F87171',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  description: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  sellerLabel: {
    fontSize: 11,
    fontWeight: '500',
  },
  rating: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
  price: {
    fontSize: 18,
    fontWeight: '800',
  },
});
