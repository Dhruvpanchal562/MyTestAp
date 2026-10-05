import { configureStore } from '@reduxjs/toolkit';
import { homeReducer } from '../../features/home';
import { listingReducer } from '../../features/listing';
import { settingsReducer } from '../../features/settings';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    listing: listingReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
