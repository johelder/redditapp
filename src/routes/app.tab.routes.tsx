import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppStackRoutes } from './app.stack.routes';

const Tab = createBottomTabNavigator();

export const AppTabsRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="best" component={AppStackRoutes} />
      <Tab.Screen name="new" component={AppStackRoutes} />
      <Tab.Screen name="hot" component={AppStackRoutes} />
      <Tab.Screen name="controversial" component={AppStackRoutes} />
    </Tab.Navigator>
  );
};
