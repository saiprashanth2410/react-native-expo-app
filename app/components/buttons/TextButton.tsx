import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY, BORDER_RADIUS } from '../../styles/constants';

interface TextButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  loading?: boolean;
}

const TextButton: React.FC<TextButtonProps> = ({
  onPress,
  title,
  variant = 'primary',
  size = 'md',
  disabled = false,
  style,
  textStyle,
  loading = false,
}) => {
  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      borderRadius: BORDER_RADIUS.md,
      justifyContent: 'center',
      alignItems: 'center',
      opacity: disabled ? 0.6 : 1,
    };

    const sizeStyles = {
      sm: { paddingHorizontal: SPACING.md, paddingVertical: SPACING.sm },
      md: { paddingHorizontal: SPACING.lg, paddingVertical: SPACING.md },
      lg: { paddingHorizontal: SPACING.xl2, paddingVertical: SPACING.lg },
    };

    const variantStyles = {
      primary: { backgroundColor: COLORS.blue },
      secondary: { backgroundColor: COLORS.darkTeal },
      outline: { backgroundColor: 'transparent', borderWidth: 2, borderColor: COLORS.blue },
    };

    return {
      ...baseStyle,
      ...sizeStyles[size],
      ...variantStyles[variant],
      ...style,
    };
  };

  const getTextStyle = (): TextStyle => {
    const textColor = variant === 'outline' ? COLORS.blue : COLORS.white;
    return {
      fontSize: TYPOGRAPHY.fontSizes.lg,
      fontWeight: TYPOGRAPHY.fontWeights.semibold,
      color: textColor,
      ...textStyle,
    };
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      style={getButtonStyle()}
    >
      <Text style={getTextStyle()}>{loading ? 'Loading...' : title}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
