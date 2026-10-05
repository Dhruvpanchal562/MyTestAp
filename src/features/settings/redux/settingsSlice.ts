import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SettingsFormData, SettingsState } from '../types';

interface ExtendedSettingsState extends SettingsState {
  darkModeEnabled: boolean;
}

const initialState: ExtendedSettingsState = {
  formData: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    birthdate: '1995-08-15',
    country: 'United States',
  },
  isSaved: false,
  darkModeEnabled: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateFormField: <K extends keyof SettingsFormData>(
      state: ExtendedSettingsState,
      action: PayloadAction<{ field: K; value: SettingsFormData[K] }>
    ) => {
      state.formData[action.payload.field] = action.payload.value;
      state.isSaved = false;
    },
    setFormData: (
      state,
      action: PayloadAction<Partial<SettingsFormData>>
    ) => {
      state.formData = { ...state.formData, ...action.payload };
      state.isSaved = true;
    },
    toggleDarkMode: (state) => {
      state.darkModeEnabled = !state.darkModeEnabled;
    },
  },
});

export const { updateFormField, setFormData, toggleDarkMode } =
  settingsSlice.actions;

export const settingsReducer = settingsSlice.reducer;
