import { StyleSheet } from 'react-native';

export const useStyles = () =>
  StyleSheet.create({
    contentContainer: {
      flexGrow: 1,
    },
    emptyList: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 15,
    },
    button: {
      borderRadius: 5,
    },
  });
