import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HomeIcon, ListingIcon, SettingsIcon } from './icons';

interface TabBarIconProps {
  name: 'Home' | 'Listing' | 'Settings';
  focused: boolean;
  color: string;
}

export const TabBarIcon: React.FC<TabBarIconProps> = ({
  name,
  focused,
  color,
}) => {
  if (name === 'Home') {
    return (
      <View style={[styles.iconContainer, focused && styles.activeGlow]}>
        <HomeIcon size={24} color={color} />
      </View>
    );
  }

  if (name === 'Listing') {
    return (
      <View style={[styles.iconContainer, focused && styles.activeGlow]}>
        <ListingIcon size={24} color={color} />
      </View>
    );
  }

  return (
    <View style={[styles.iconContainer, focused && styles.activeGlow]}>
      <SettingsIcon size={24} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeGlow: {
    transform: [{ scale: 1.05 }],
  },
});
