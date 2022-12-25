import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TRootStackParamList, TStackProps } from './types';

import { useTheme } from 'styled-components';

import { Home } from '../pages/Home';
import { PostDetails } from '../pages/PostDetails';

const Stack = createNativeStackNavigator<TRootStackParamList>();

export const AppStackRoutes = ({ route }: TStackProps) => {
  const theme = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
        initialParams={route.params}
      />
      <Stack.Screen
        name="PostDetails"
        component={PostDetails}
        options={{ headerTintColor: theme.colors.primary }}
      />
    </Stack.Navigator>
  );
};
