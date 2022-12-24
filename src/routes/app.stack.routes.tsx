import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TRootStackParamList, TStackProps } from './types';

import { Home } from '../pages/Home';

const Stack = createNativeStackNavigator<TRootStackParamList>();

export const AppStackRoutes = ({ route }: TStackProps) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
        initialParams={route.params}
      />
    </Stack.Navigator>
  );
};
