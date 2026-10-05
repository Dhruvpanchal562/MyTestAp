import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListingItem, ListingState } from '../types';
import { generateDummyListings } from '../utils';

const initialItems: ListingItem[] = generateDummyListings(12);

const initialState: ListingState = {
  items: initialItems,
  selectedCategory: 'All',
  isRefreshing: false,
};

export const listingSlice = createSlice({
  name: 'listing',
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setListings: (state, action: PayloadAction<ListingItem[]>) => {
      state.items = action.payload;
    },
    refreshListings: (state) => {
      state.items = generateDummyListings(12);
    },
    setRefreshing: (state, action: PayloadAction<boolean>) => {
      state.isRefreshing = action.payload;
    },
  },
});

export const {
  setSelectedCategory,
  setListings,
  refreshListings,
  setRefreshing,
} = listingSlice.actions;

export const listingReducer = listingSlice.reducer;
