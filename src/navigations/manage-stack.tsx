import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Screens } from '@shared/constants/screen-name';
import { Manage } from '@screens/manage';

const Stack = createStackNavigator();

export const ManageStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Screens.MANAGE} component={Manage} />
    </Stack.Navigator>
  );
};
