import { StyleSheet } from 'react-native';

export const useStyles = () =>
  StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 15,
      paddingHorizontal: 10,
      paddingVertical: 15,
    },
    button: {
      borderRadius: 5,
    },
  });
