import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IRootState } from 'store/store';
import { categoryRehydrate } from 'store/category/reducer';
import { itemRehydrate } from 'store/item/reducer';

export const usePersist = () => {
  const dispatch = useDispatch();
  const [rehydrated, setRehydrated] = useState(false);
  const { categories } = useSelector((state: IRootState) => state.category);
  const { items } = useSelector((state: IRootState) => state.item);

  const rehydrate = async () => {
    try {
      const categories =
        (await AsyncStorage.getItem('@categories')) || JSON.stringify([]);
      const items =
        (await AsyncStorage.getItem('@items')) || JSON.stringify([]);
      dispatch(categoryRehydrate({ categories: JSON.parse(categories) }));
      dispatch(itemRehydrate({ items: JSON.parse(items) }));
      setRehydrated(true);
    } catch (e) {}
  };

  const saveCategories = async () => {
    try {
      await AsyncStorage.setItem('@categories', JSON.stringify(categories));
    } catch (e) {}
  };

  const saveItems = async () => {
    try {
      await AsyncStorage.setItem('@items', JSON.stringify(items));
    } catch (e) {}
  };

  useEffect(() => {
    rehydrate();
  }, []);

  useEffect(() => {
    if (rehydrated) {
      saveCategories();
    }
  }, [categories]);

  useEffect(() => {
    if (rehydrated) {
      saveItems();
    }
  }, [items]);
  return { rehydrated };
};
