import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useCategory } from '@hooks/category';
import { useStyles } from './styles';
import { nanoid } from '@reduxjs/toolkit';
import { useRoute } from '@react-navigation/native';
import { useItems } from '@hooks/item';
import { ItemCard } from 'components/item-card';

export const Category = () => {
  const styles = useStyles();
  const route = useRoute<any>();

  const { category } = useCategory(route.params.id);
  const { items, addItem } = useItems(route.params.id);

  const handleAddItem = () => {
    const id = nanoid();
    addItem({
      id,
      category: route.params.id,
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
    <View style={styles.container}>
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
