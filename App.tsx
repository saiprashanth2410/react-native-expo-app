import React from 'react';
import { StatusBar } from 'react-native';
import RootNavigator from './app/navigation/RootNavigator';
import { COLORS } from './app/styles/constants';

const RootApp: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.pageBg} />
      <RootNavigator />
    </>
  );
};

export default RootApp;
