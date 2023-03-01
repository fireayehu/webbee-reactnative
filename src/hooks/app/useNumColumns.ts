import { useState, useEffect } from 'react';
import { useWindowDimensions } from 'react-native';

export const useNumColumns = () => {
  const { width } = useWindowDimensions();
  const [numColumns, setNumColumns] = useState(1);
  useEffect(() => {
    if (width < 480) {
      setNumColumns(1);
    } else {
      setNumColumns(2);
    }
  }, [width]);
  return { numColumns };
};
