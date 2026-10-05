import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HomeScreen } from '../../features/home';
import { ListingScreen } from '../../features/listing';
import { SettingsScreen } from '../../features/settings';
import { TabBarIcon } from './TabBarIcon';
import { BottomTabParamList } from './navigation.types';
import { useTheme } from '../../utils';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const renderHomeIcon = ({ focused, color }: { focused: boolean; color: string }) => (
  <TabBarIcon name="Home" focused={focused} color={color} />
);

const renderListingIcon = ({ focused, color }: { focused: boolean; color: string }) => (
  <TabBarIcon name="Listing" focused={focused} color={color} />
);

const renderSettingsIcon = ({ focused, color }: { focused: boolean; color: string }) => (
  <TabBarIcon name="Settings" focused={focused} color={color} />
);

export const BottomTabNavigator: React.FC = () => {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  const bottomInset = insets.bottom;
  const tabBarStyle: ViewStyle = {
    backgroundColor: colors.tabBarBackground,
    borderTopColor: colors.border,
    borderTopWidth: 1,
    paddingTop: 6,
    paddingBottom: bottomInset > 0 ? bottomInset : 8,
    height: 56 + (bottomInset > 0 ? bottomInset : 8),
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.tabBarActive,
        tabBarInactiveTintColor: colors.tabBarInactive,
        tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarItemStyle: styles.tabBarItem,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: renderHomeIcon,
        }}
      />
      <Tab.Screen
        name="Listing"
        component={ListingScreen}
        options={{
          tabBarLabel: 'Listing',
          tabBarIcon: renderListingIcon,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: renderSettingsIcon,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarItem: {
    paddingVertical: 2,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
});
