import React from 'react';
import { View, Text } from 'react-native';
import { useStyles } from './styles';

export const Manage = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text>Manage</Text>
    </View>
  );
};
