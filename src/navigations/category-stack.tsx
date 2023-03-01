import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Screens } from '@shared/constants/screen-name';
import { Category } from '@screens/category';
import { useRoute } from '@react-navigation/native';

const Stack = createStackNavigator();

export const CategoryStack = () => {
  const route = useRoute<any>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={Screens.CATEGORY}
        component={Category}
        initialParams={{ id: route.params.id }}
      />
    </Stack.Navigator>
  );
};
