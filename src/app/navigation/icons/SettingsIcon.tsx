import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

interface SettingsIconProps {
  size?: number;
  color?: string;
}

export const SettingsIcon: React.FC<SettingsIconProps> = ({
  size = 24,
  color = '#2563EB',
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Outer 6-Tooth Gear */}
      <Path
        d="M 43 14 
           C 43 12 45 10 47 10 L 53 10 C 55 10 57 12 57 14 
           L 57 21 C 60.5 22.5 63.8 24.4 66.8 26.8 
           L 73 23.2 C 74.8 22.2 77.2 22.8 78.2 24.6 L 81.2 29.8 C 82.2 31.6 81.6 34 79.8 35 
           L 73.8 38.5 C 74.6 42.2 74.8 46 74.4 49.8 
           L 81.2 53.8 C 83 54.8 83.6 57.2 82.6 59 L 79.6 64.2 C 78.6 66 76.2 66.6 74.4 65.6 
           L 68.2 62 C 65.4 64.6 62.2 66.7 58.6 68.2 
           L 58.6 75 C 58.6 77 56.6 79 54.6 79 L 48.6 79 C 46.6 79 44.6 77 44.6 75 
           L 44.6 68.2 C 41 66.7 37.8 64.6 35 62 
           L 28.8 65.6 C 27 66.6 24.6 66 23.6 64.2 L 20.6 59 C 19.6 57.2 20.2 54.8 22 53.8 
           L 28.8 49.8 C 28.4 46 28.6 42.2 29.4 38.5 
           L 23.4 35 C 21.6 34 21 31.6 22 29.8 L 25 24.6 C 26 22.8 28.4 22.2 30.2 23.2 
           L 36.4 26.8 C 39.4 24.4 42.7 22.5 46.2 21 
           Z"
        transform="translate(-1.6, 5.4)"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Center Circle */}
      <Circle
        cx="50"
        cy="50"
        r="12"
        stroke={color}
        strokeWidth="7"
      />
    </Svg>
  );
};
