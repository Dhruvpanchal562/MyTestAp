import React, { useCallback } from 'react';
import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import { AppHeader, ScreenWrapper } from '../../../components';
import { CategoryChip, ListingCard } from '../components';
import { useAppDispatch, useAppSelector } from '../../../app/redux';
import { refreshListings, setSelectedCategory, setRefreshing } from '../redux';
import { useTheme } from '../../../utils';
import { ListingItem } from '../types';

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

  const handleRefresh = useCallback(() => {
    dispatch(setRefreshing(true));
    setTimeout(() => {
      dispatch(refreshListings());
      dispatch(setRefreshing(false));
    }, 500);
  }, [dispatch]);

  const handleSelectCategory = useCallback(
    (category: string) => {
      dispatch(setSelectedCategory(category));
    },
    [dispatch]
  );

  const renderCategoryItem: ListRenderItem<string> = useCallback(
    ({ item }) => (
      <CategoryChip
        label={item}
        isActive={selectedCategory === item}
        onPress={() => handleSelectCategory(item)}
      />
    ),
    [selectedCategory, handleSelectCategory]
  );

  const renderListingItem: ListRenderItem<ListingItem> = useCallback(
    ({ item }) => <ListingCard item={item} />,
    []
  );

  const keyExtractorCategory = useCallback((item: string) => item, []);
  const keyExtractorListing = useCallback((item: ListingItem) => item.id, []);

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
          keyExtractor={keyExtractorCategory}
          contentContainerStyle={styles.filterList}
          renderItem={renderCategoryItem}
        />
      </View>

      <FlatList
        data={filteredItems}
        keyExtractor={keyExtractorListing}
        contentContainerStyle={styles.list}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            tintColor={colors.primary}
          />
        }
        renderItem={renderListingItem}
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
  list: {
    padding: 16,
    paddingBottom: 32,
  },
});
