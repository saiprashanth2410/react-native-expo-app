import React from 'react';
import { View, ViewStyle } from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS } from '../../styles/constants';

interface GlassCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, style }) => {
  const cardStyle: ViewStyle = {
    backgroundColor: COLORS.glassBoxBg,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    overflow: 'hidden',
    ...style,
  };

  return <View style={cardStyle}>{children}</View>;
};

export default GlassCard;
