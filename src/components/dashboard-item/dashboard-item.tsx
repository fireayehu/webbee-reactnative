import React, { useCallback } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useStyles } from './styles';
import { Button, Text } from 'react-native-paper';
import { useItems } from 'hooks/item';
import { ItemCard } from 'components/item-card';
import { IDashboardItemProps } from './type';
import { nanoid } from '@reduxjs/toolkit';

export const DashboardItem: React.FC<IDashboardItemProps> = ({ category }) => {
  const styles = useStyles();
  const { items, addItem } = useItems(category.id);

  const handleAddItem = () => {
    const id = nanoid();
    addItem({
      id,
      category: category.id,
      values: [],
    });
  };

  const renderItem = useCallback(
    ({ item }: any) => (
      <ItemCard
        item={item}
        titleField={category.titleField}
        attributes={category.attributes}
      />
    ),
    [category.titleField, category.attributes],
  );

  return (
    <View>
      <View style={styles.header}>
        <Text variant="titleMedium">{category.name || 'Unnamed Category'}</Text>
        <Button
          mode="contained"
          uppercase
          style={styles.button}
          onPress={handleAddItem}>
          Add New Item
        </Button>
      </View>
      <FlatList data={items} renderItem={renderItem} />
    </View>
  );
};
