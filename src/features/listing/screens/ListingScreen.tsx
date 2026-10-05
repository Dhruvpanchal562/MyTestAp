import React from 'react';
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { AppHeader, ScreenWrapper } from '../../../components';
import { ListingCard } from '../components';
import { useAppDispatch, useAppSelector } from '../../../app/redux';
import { refreshListings, setSelectedCategory, setRefreshing } from '../redux';
import { useTheme } from '../../../utils';

const categories = [
  'All',
  'Electronics',
  'Home & Garden',
  'Fashion',
  'Sports',
  'Automotive',
  'Books',
];

export const ListingScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { colors } = useTheme();
  const { items, selectedCategory, isRefreshing } = useAppSelector(
    (state) => state.listing
  );

  const filteredItems =
    selectedCategory === 'All'
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const handleRefresh = () => {
    dispatch(setRefreshing(true));
    setTimeout(() => {
      dispatch(refreshListings());
      dispatch(setRefreshing(false));
    }, 500);
  };

  return (
    <ScreenWrapper>
      <AppHeader title="Listing" subtitle="Faker Generated Catalog" />

      <View
        style={[
          styles.filterContainer,
          {
            borderBottomColor: colors.border,
            backgroundColor: colors.cardBackground,
          },
        ]}
      >
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={(item) => item}
          contentContainerStyle={styles.filterList}
          renderItem={({ item }) => {
            const isActive = selectedCategory === item;
            return (
              <TouchableOpacity
                onPress={() => dispatch(setSelectedCategory(item))}
                style={[
                  styles.filterChip,
                  {
                    backgroundColor: isActive ? colors.primary : colors.background,
                    borderColor: isActive ? colors.primary : colors.border,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.filterChipText,
                    isActive ? styles.chipTextActive : styles.chipTextInactive,
                    {
                      color: isActive ? colors.white : colors.textSecondary,
                    },
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            tintColor={colors.primary}
          />
        }
        renderItem={({ item }) => <ListingCard item={item} />}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  filterList: {
    paddingHorizontal: 16,
    gap: 8,
  },
  filterChip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
  },
  filterChipText: {
    fontSize: 13,
  },
  chipTextActive: {
    fontWeight: '600',
  },
  chipTextInactive: {
    fontWeight: '500',
  },
  list: {
    padding: 16,
    paddingBottom: 32,
  },
});
