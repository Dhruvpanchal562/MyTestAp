import React from 'react';
import { Alert, Platform, ScrollView, StyleSheet } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { AppHeader, ScreenWrapper } from '../../../components';
import {
  DeviceInfoCard,
  HomeBanner,
  PermissionRequestCard,
  PhotoPickerSection,
} from '../components';
import { useAppDispatch, useAppSelector } from '../../../app/redux';
import {
  setDeviceDetails,
  setDevicePermission,
  setSelectedPhotoUri,
} from '../redux';
import { DeviceDetails } from '../types';

export const HomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { hasDevicePermission, deviceDetails, selectedPhotoUri } =
    useAppSelector((state) => state.home);

  const loadDeviceInfo = async () => {
    try {
      const isEmulator = await DeviceInfo.isEmulator();
      const uniqueId = await DeviceInfo.getUniqueId();
      const brand = DeviceInfo.getBrand();
      const model = DeviceInfo.getModel();
      const version = DeviceInfo.getVersion();

      const details: DeviceDetails = {
        osName: Platform.OS === 'ios' ? 'iOS' : 'Android',
        osVersion: `${Platform.Version}`,
        deviceId: uniqueId || 'N/A',
        brand: brand || (Platform.OS === 'ios' ? 'Apple' : 'Generic'),
        model: model || 'Device Model',
        appVersion: version || '1.0.0',
        isEmulator,
      };

      dispatch(setDeviceDetails(details));
      dispatch(setDevicePermission(true));
    } catch {
      const fallbackDetails: DeviceDetails = {
        osName: Platform.OS === 'ios' ? 'iOS' : 'Android',
        osVersion: `${Platform.Version}`,
        deviceId: 'SIM-' + Platform.OS + '-DEVICE',
        brand: Platform.OS === 'ios' ? 'Apple' : 'Android',
        model: Platform.OS === 'ios' ? 'iPhone' : 'Handset',
        appVersion: '1.0.0',
        isEmulator: true,
      };
      dispatch(setDeviceDetails(fallbackDetails));
      dispatch(setDevicePermission(true));
    }
  };

  const handleRequestPermission = () => {
    Alert.alert(
      'Device Information Permission',
      'Do you allow MyTestAp to access and display your device hardware specifications, OS version, and Device ID?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Allow',
          onPress: () => {
            loadDeviceInfo();
          },
        },
      ]
    );
  };

  const handlePhotoSelected = (uri: string | null) => {
    dispatch(setSelectedPhotoUri(uri));
  };

  return (
    <ScreenWrapper>
      <AppHeader title="Home" subtitle="Device Specs & Gallery" />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <HomeBanner message="Device Dashboard" />

        {hasDevicePermission && deviceDetails ? (
          <DeviceInfoCard details={deviceDetails} />
        ) : (
          <PermissionRequestCard
            onRequestPermission={handleRequestPermission}
          />
        )}

        <PhotoPickerSection
          selectedPhotoUri={selectedPhotoUri}
          onPhotoSelected={handlePhotoSelected}
        />
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 16,
    paddingBottom: 32,
  },
});
