import { StyleSheet } from 'react-native';

export const useStyles = () =>
  StyleSheet.create({
    container: {
      margin: 5,
      backgroundColor: '#FFFFFF',
      borderRadius: 5,
      paddingVertical: 8,
      paddingHorizontal: 10,
      flexDirection: 'column',
      flex: 1,
    },
    content: {
      gap: 16,
    },
    attributes: {
      flexDirection: 'row',
      gap: 5,
      alignItems: 'center',
    },
    input: {
      flex: 1,
    },
    button: {
      borderRadius: 5,
    },
    actions: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
  });
