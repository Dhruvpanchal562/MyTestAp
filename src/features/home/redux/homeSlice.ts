import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DeviceDetails, HomeState } from '../types';

const initialState: HomeState = {
  hasDevicePermission: false,
  deviceDetails: null,
  selectedPhotoUri: null,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setDevicePermission: (state, action: PayloadAction<boolean>) => {
      state.hasDevicePermission = action.payload;
    },
    setDeviceDetails: (state, action: PayloadAction<DeviceDetails | null>) => {
      state.deviceDetails = action.payload;
    },
    setSelectedPhotoUri: (state, action: PayloadAction<string | null>) => {
      state.selectedPhotoUri = action.payload;
    },
    resetHomeState: (state) => {
      state.hasDevicePermission = false;
      state.deviceDetails = null;
      state.selectedPhotoUri = null;
    },
  },
});

export const {
  setDevicePermission,
  setDeviceDetails,
  setSelectedPhotoUri,
  resetHomeState,
} = homeSlice.actions;

export const homeReducer = homeSlice.reducer;
