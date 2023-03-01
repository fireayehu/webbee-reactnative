import { useState, useEffect } from 'react';
import { useWindowDimensions } from 'react-native';

const calcuate = (width: number) => {
  if (width < 480) {
    return 1;
  } else {
    return 2;
  }
};

export const useNumColumns = () => {
  const { width } = useWindowDimensions();
  const [numColumns, setNumColumns] = useState(calcuate(width));
  useEffect(() => {
    setNumColumns(calcuate(width));
  }, [width]);

  return { numColumns };
};
