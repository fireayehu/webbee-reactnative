import React, { useCallback } from 'react';
import { useCategories } from 'hooks/category';
import { FlatList } from 'react-native-gesture-handler';
import { useStyles } from './styles';
import { DashboardItem } from 'components/dashboard-item';

export const Dashboard = () => {
  const styles = useStyles();
  const { categories } = useCategories();
  const renderItem = useCallback(({ item }: any) => {
    return <DashboardItem category={item} />;
  }, []);
  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
};
