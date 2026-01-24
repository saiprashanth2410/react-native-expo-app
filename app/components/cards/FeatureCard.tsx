import React from 'react';
import { View, Text, ViewStyle, TextStyle } from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY, BORDER_RADIUS } from '../../styles/constants';
import GlassCard from '../common/GlassCard';

interface FeatureCardProps {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ id, title, description, icon }) => {
  const containerStyle: ViewStyle = {
    marginBottom: SPACING.lg,
  };

  const headerStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
  };

  const iconContainerStyle: ViewStyle = {
    width: 50,
    height: 50,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: COLORS.cyan,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  };

  const titleStyle: TextStyle = {
    fontSize: TYPOGRAPHY.fontSizes.lg,
    fontWeight: TYPOGRAPHY.fontWeights.semibold,
    color: COLORS.white,
    flex: 1,
  };

  const descriptionStyle: TextStyle = {
    fontSize: TYPOGRAPHY.fontSizes.base,
    color: '#d0d0d0',
    lineHeight: 20,
  };

  return (
    <View style={containerStyle}>
      <GlassCard>
        <View style={headerStyle}>
          {icon && <View style={iconContainerStyle}>{icon}</View>}
          <Text style={titleStyle}>{title}</Text>
        </View>
        <Text style={descriptionStyle}>{description}</Text>
      </GlassCard>
    </View>
  );
};

export default FeatureCard;
