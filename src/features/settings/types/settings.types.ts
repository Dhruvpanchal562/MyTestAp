export interface CountryOption {
  code: string;
  name: string;
  flag: string;
}

export interface SettingsFormData {
  name: string;
  email: string;
  birthdate: string;
  country: string;
}

export interface SettingsState {
  formData: SettingsFormData;
  isSaved: boolean;
}
