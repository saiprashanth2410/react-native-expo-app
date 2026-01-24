import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import { COLORS, TYPOGRAPHY } from '../../styles/constants';

interface MainHeadingProps {
  text: string;
  color?: string;
  size?: 'lg' | 'md' | 'sm';
  style?: TextStyle;
}

const MainHeading: React.FC<MainHeadingProps> = ({
  text,
  color = COLORS.blue,
  size = 'lg',
  style,
}) => {
  const getFontSize = () => {
    switch (size) {
      case 'lg':
        return TYPOGRAPHY.fontSizes.xl5;
      case 'md':
        return TYPOGRAPHY.fontSizes.xl3;
      case 'sm':
        return TYPOGRAPHY.fontSizes.xl;
      default:
        return TYPOGRAPHY.fontSizes.xl5;
    }
  };

  const headingStyle: TextStyle = {
    fontSize: getFontSize(),
    fontWeight: TYPOGRAPHY.fontWeights.bold,
    color,
    ...style,
  };

  return <Text style={headingStyle}>{text}</Text>;
};

export default MainHeading;
