import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Screens } from '@shared/constants/screen-name';
import { Category } from '@screens/category';

const Stack = createStackNavigator();

export const CategoryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Screens.CATEGORY} component={Category} />
    </Stack.Navigator>
  );
};
