import { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

export const useKeyboardStatus = () => {
  const [keyboardOpen, setKeyboardOpne] = useState(false);
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardOpne(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardOpne(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return { keyboardOpen };
};
