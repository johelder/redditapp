import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TRootStackParamList, TStackProps } from './types';
import { TPostDetailsProps } from '../pages/PostDetails/types';

import { useTheme } from 'styled-components/native';

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
        options={({ route: postDetailsRoute }: TPostDetailsProps) => ({
          headerBackTitle: '',
          headerTintColor: theme.colors.primary,
          title: postDetailsRoute.params.title,
        })}
      />
    </Stack.Navigator>
  );
};
