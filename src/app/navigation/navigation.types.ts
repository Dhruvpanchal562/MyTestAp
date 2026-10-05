import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type BottomTabParamList = {
  Home: undefined;
  Listing: undefined;
  Settings: undefined;
};

export type HomeTabScreenProps = BottomTabScreenProps<
  BottomTabParamList,
  'Home'
>;

export type ListingTabScreenProps = BottomTabScreenProps<
  BottomTabParamList,
  'Listing'
>;

export type SettingsTabScreenProps = BottomTabScreenProps<
  BottomTabParamList,
  'Settings'
>;
