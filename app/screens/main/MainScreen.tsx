import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY } from '../../styles/constants';

interface MainScreenProps {
  navigation?: any;
}

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.pageBg }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ padding: SPACING.lg, backgroundColor: COLORS.darkTeal, paddingVertical: SPACING.xl5 }}>
          <Text style={{ fontSize: TYPOGRAPHY.fontSizes.xl5, fontWeight: 'bold', color: COLORS.white, textAlign: 'center' }}>
            Reliable Plumber Services
          </Text>
          <Text style={{ fontSize: TYPOGRAPHY.fontSizes.xl, color: COLORS.cyan, textAlign: 'center', marginTop: SPACING.md }}>
            Your Trusted Local Plumber
          </Text>
        </View>

        <View style={{ padding: SPACING.lg }}>
          <Text style={{ fontSize: TYPOGRAPHY.fontSizes.xl3, fontWeight: 'bold', color: COLORS.blue, marginBottom: SPACING.lg }}>
            Our Services
          </Text>
          
          <Text style={{ fontSize: TYPOGRAPHY.fontSizes.base, color: COLORS.black, marginBottom: SPACING.md }}>
            Emergency Repairs - Fast and reliable emergency plumbing services available 24/7
          </Text>
          
          <Text style={{ fontSize: TYPOGRAPHY.fontSizes.base, color: COLORS.black, marginBottom: SPACING.md }}>
            Drain Cleaning - Professional drain cleaning and maintenance
          </Text>
          
          <Text style={{ fontSize: TYPOGRAPHY.fontSizes.base, color: COLORS.black, marginBottom: SPACING.md }}>
            Water Heaters - Installation, repair, and maintenance of water heating systems
          </Text>
          
          <Text style={{ fontSize: TYPOGRAPHY.fontSizes.base, color: COLORS.black }}>
            Leak Detection - Comprehensive leak detection and other specialized solutions
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default MainScreen;
