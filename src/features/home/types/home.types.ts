export interface DeviceDetails {
  osName: string;
  osVersion: string;
  deviceId: string;
  brand: string;
  model: string;
  appVersion: string;
  isEmulator: boolean;
}

export interface HomeState {
  hasDevicePermission: boolean;
  deviceDetails: DeviceDetails | null;
  selectedPhotoUri: string | null;
}
