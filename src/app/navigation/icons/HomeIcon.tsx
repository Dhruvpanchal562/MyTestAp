import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface HomeIconProps {
  size?: number;
  color?: string;
}

export const HomeIcon: React.FC<HomeIconProps> = ({
  size = 24,
  color = '#2563EB',
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Outer house / face outline with open right side */}
      <Path
        d="M 87 34 C 81 29, 68 19, 53.5 12 C 51.3 10.7, 48.7 10.7, 46.5 12 C 32 19, 19 29, 13 34 C 10 37, 9 41, 10 46 L 15 75 C 16.5 83, 23 88, 31 88 L 69 88 C 77 88, 83.5 83, 85 75 L 87 53"
        stroke={color}
        strokeWidth="7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner smile */}
      <Path
        d="M 37 67 C 41 74, 59 74, 63 67"
        stroke={color}
        strokeWidth="7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
