import React, { useCallback } from 'react';
import { FlatList, useWindowDimensions, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useCategory } from '@hooks/category';
import { useStyles } from './styles';
import { nanoid } from '@reduxjs/toolkit';
import { useRoute } from '@react-navigation/native';
import { useItems } from '@hooks/item';
import { ItemCard } from 'components/item-card';
import { useNumColumns } from 'hooks/app';

export const Category = () => {
  const styles = useStyles();
  const route = useRoute<any>();

  const { category } = useCategory(route.params.id);
  const { items, addItem } = useItems(route.params.id);

  const { numColumns } = useNumColumns();
  const { width } = useWindowDimensions();

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
      <View style={{ width: width / numColumns }}>
        <ItemCard
          item={item}
          titleField={category.titleField}
          attributes={category.attributes}
        />
      </View>
    ),
    [category.titleField, category.attributes, width],
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
      <FlatList
        key={numColumns}
        numColumns={numColumns}
        data={items}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
