import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppStackRoutes } from './app.stack.routes';

import * as Phosphor from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

const Tab = createBottomTabNavigator();

export const AppTabsRoutes = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.gray_400,
      }}
    >
      <Tab.Screen
        name="Best"
        component={AppStackRoutes}
        initialParams={{ slug: 'best' }}
        options={{
          tabBarIcon: ({ color }) => (
            <Phosphor.Rocket color={color} size={32} weight="regular" />
          ),
        }}
      />
      <Tab.Screen
        name="New"
        component={AppStackRoutes}
        initialParams={{ slug: 'new' }}
        options={{
          tabBarIcon: ({ color }) => (
            <Phosphor.Sparkle color={color} size={32} weight="regular" />
          ),
        }}
      />
      <Tab.Screen
        name="Hot"
        component={AppStackRoutes}
        initialParams={{ slug: 'hot' }}
        options={{
          tabBarIcon: ({ color }) => (
            <Phosphor.Fire color={color} size={32} weight="regular" />
          ),
        }}
      />
      <Tab.Screen
        name="Controversial"
        component={AppStackRoutes}
        initialParams={{ slug: 'controversial' }}
        options={{
          tabBarIcon: ({ color }) => (
            <Phosphor.Sword color={color} size={32} weight="regular" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
