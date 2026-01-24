import { StyleSheet } from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY, BORDER_RADIUS, SHADOWS } from './constants';

export const globalStyles = StyleSheet.create({
  // Flex utilities
  flex: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexBetween: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexStart: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  flexEnd: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  // Container utilities
  container: {
    flex: 1,
    backgroundColor: COLORS.pageBg,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.pageBg,
  },
  pageContainer: {
    flexGrow: 1,
    padding: SPACING.lg,
  },

  // Text utilities
  text: {
    fontSize: TYPOGRAPHY.fontSizes.base,
    fontWeight: TYPOGRAPHY.fontWeights.normal,
    color: COLORS.black,
  },
  textCenter: {
    textAlign: 'center',
  },
  textWhite: {
    color: COLORS.white,
  },

  // Heading styles
  headingLg: {
    fontSize: TYPOGRAPHY.fontSizes.xl5,
    fontWeight: TYPOGRAPHY.fontWeights.bold,
    color: COLORS.blue,
  },
  headingMd: {
    fontSize: TYPOGRAPHY.fontSizes.xl3,
    fontWeight: TYPOGRAPHY.fontWeights.semibold,
    color: COLORS.blue,
  },
  headingSm: {
    fontSize: TYPOGRAPHY.fontSizes.lg,
    fontWeight: TYPOGRAPHY.fontWeights.semibold,
    color: COLORS.darkTeal,
  },

  // Card styles
  card: {
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.lg,
    ...SHADOWS.md,
  },
  glassCard: {
    backgroundColor: COLORS.glassBoxBg,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    overflow: 'hidden',
  },

  // Button base styles
  buttonBase: {
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPrimary: {
    backgroundColor: COLORS.blue,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: COLORS.darkTeal,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Input styles
  input: {
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.sm,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    fontSize: TYPOGRAPHY.fontSizes.base,
    color: COLORS.black,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  inputFocused: {
    borderColor: COLORS.cyan,
    borderWidth: 2,
  },
  inputError: {
    borderColor: COLORS.red,
  },

  // Spacing helpers
  marginTopLg: {
    marginTop: SPACING.xl3,
  },
  marginBottomLg: {
    marginBottom: SPACING.xl3,
  },
  marginVerticalLg: {
    marginVertical: SPACING.xl3,
  },
  paddingHorizontalLg: {
    paddingHorizontal: SPACING.lg,
  },

  // Error and status
  errorText: {
    color: COLORS.red,
    fontSize: TYPOGRAPHY.fontSizes.sm,
  },
  successText: {
    color: COLORS.green,
  },
});

export default globalStyles;
