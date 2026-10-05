import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListingItem } from '../types';
import { useTheme } from '../../../utils';

interface ListingCardProps {
  item: ListingItem;
}

const STATUS_CONFIG: Record<
  ListingItem['status'],
  { color: string; bgLight: string; bgDark: string }
> = {
  'In Stock': {
    color: '#10B981',
    bgLight: 'rgba(16, 185, 129, 0.12)',
    bgDark: 'rgba(16, 185, 129, 0.22)',
  },
  Limited: {
    color: '#F59E0B',
    bgLight: 'rgba(245, 158, 11, 0.12)',
    bgDark: 'rgba(245, 158, 11, 0.22)',
  },
  'Sold Out': {
    color: '#EF4444',
    bgLight: 'rgba(239, 68, 68, 0.12)',
    bgDark: 'rgba(239, 68, 68, 0.22)',
  },
};

export const ListingCard: React.FC<ListingCardProps> = ({ item }) => {
  const { colors, isDarkMode } = useTheme();

  const statusConfig = STATUS_CONFIG[item.status] ?? STATUS_CONFIG['In Stock'];
  const statusBadgeBg = isDarkMode ? statusConfig.bgDark : statusConfig.bgLight;

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
            { backgroundColor: colors.primaryLight },
          ]}
        >
          <Text style={[styles.categoryText, { color: colors.primary }]}>
            {item.category}
          </Text>
        </View>

        <View
          style={[
            styles.statusBadge,
            { backgroundColor: statusBadgeBg },
          ]}
        >
          <View
            style={[
              styles.statusDot,
              { backgroundColor: statusConfig.color },
            ]}
          />
          <Text style={[styles.statusText, { color: statusConfig.color }]}>
            {item.status}
          </Text>
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

      <View style={[styles.footer, { borderTopColor: colors.border }]}>
        <View style={styles.metaContainer}>
          <Text style={[styles.seller, { color: colors.textSecondary }]}>
            Seller: {item.seller}
          </Text>
          <Text style={[styles.rating, { color: colors.textSecondary }]}>
            ⭐ {item.rating.toFixed(1)} / 5.0
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
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryPill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  categoryText: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 5,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  statusText: {
    fontSize: 11,
    fontWeight: '600',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22,
    marginBottom: 6,
  },
  description: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingTop: 12,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  metaContainer: {
    flex: 1,
    marginRight: 12,
  },
  seller: {
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 2,
  },
  rating: {
    fontSize: 12,
    fontWeight: '600',
  },
  price: {
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: -0.3,
  },
});
