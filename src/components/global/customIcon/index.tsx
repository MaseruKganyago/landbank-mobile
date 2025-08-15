import React from 'react';
import { Text, TextStyle } from 'react-native';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  style?: TextStyle;
}

// Icon mapping using Unicode characters that represent common icons
const iconMap: { [key: string]: string } = {
  // Location icons
  'location-outline': '📍',
  location: '📍',

  // Navigation icons
  'chevron-forward': '▶',
  'chevron-right': '▶',
  'chevron-back': '◀',
  'chevron-left': '◀',
  'arrow-forward': '→',
  'arrow-back': '←',

  // Home icons
  home: '🏠',
  'home-outline': '🏠',

  // Warning icons
  warning: '⚠',
  alert: '⚠',

  // Menu icons
  menu: '☰',
  'menu-outline': '☰',

  // Person icons
  person: '👤',
  'person-outline': '👤',
  user: '👤',

  // Heart icons
  heart: '❤',
  'heart-outline': '♡',

  // Common fallback
  default: '●',
};

const CustomIcon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = '#000',
  style,
}) => {
  const iconCharacter = iconMap[name] || iconMap.default;

  const iconStyle: TextStyle = {
    fontSize: size,
    color: color,
    textAlign: 'center',
    ...style,
  };

  return <Text style={iconStyle}>{iconCharacter}</Text>;
};

export default CustomIcon;
