import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Screens } from '@shared/constants/screen-name';
import { Dashboard } from '@screens/dashboard';

const Stack = createStackNavigator();

export const DashboardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Screens.DASHBOARD} component={Dashboard} />
    </Stack.Navigator>
  );
};
