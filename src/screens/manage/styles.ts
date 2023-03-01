import { StyleSheet } from 'react-native';

export const useStyles = () =>
  StyleSheet.create({
    container: {
      position: 'relative',
      flex: 1,
    },
    content: {
      paddingBottom: 70,
    },
    button: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
      borderRadius: 5,
    },
  });
