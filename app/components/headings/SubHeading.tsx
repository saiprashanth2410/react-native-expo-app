import React from 'react';
import { Text, TextStyle } from 'react-native';
import { COLORS, TYPOGRAPHY } from '../../styles/constants';

interface SubHeadingProps {
  text: string;
  color?: string;
  style?: TextStyle;
}

const SubHeading: React.FC<SubHeadingProps> = ({
  text,
  color = COLORS.darkTeal,
  style,
}) => {
  const headingStyle: TextStyle = {
    fontSize: TYPOGRAPHY.fontSizes.xl,
    fontWeight: TYPOGRAPHY.fontWeights.semibold,
    color,
    ...style,
  };

  return <Text style={headingStyle}>{text}</Text>;
};

export default SubHeading;
