import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppTabsRoutes } from './app.tab.routes';

export const Routes = () => {
  return (
    <NavigationContainer>
      <AppTabsRoutes />
    </NavigationContainer>
  );
};
