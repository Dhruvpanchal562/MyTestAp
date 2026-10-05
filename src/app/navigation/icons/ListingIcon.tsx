import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

interface ListingIconProps {
  size?: number;
  color?: string;
}

export const ListingIcon: React.FC<ListingIconProps> = ({
  size = 24,
  color = '#2563EB',
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Back Layered Card */}
      <Path
        d="M 28 32 H 24 C 17 32 12 37 12 44 V 74 C 12 81 17 86 24 86 H 60 C 67 86 72 81 72 74 V 72"
        stroke={color}
        strokeWidth="7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Front Main Card */}
      <Rect
        x="28"
        y="12"
        width="60"
        height="60"
        rx="16"
        stroke={color}
        strokeWidth="7.5"
        strokeLinejoin="round"
      />

      {/* Top Inner Content Bar (Subtle opacity) */}
      <Path
        d="M 48 33 H 68"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
        opacity={0.6}
      />

      {/* Bottom Inner Content Bar */}
      <Path
        d="M 48 49 H 68"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
      />
    </Svg>
  );
};
