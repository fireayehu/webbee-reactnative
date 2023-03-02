import React, { useCallback } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useStyles } from './styles';
import { Button, Text } from 'react-native-paper';
import { useItems } from 'hooks/item';
import { ItemCard } from 'components/item-card';
import { IDashboardItemProps } from './type';
import { nanoid } from '@reduxjs/toolkit';
import { useNumColumns } from 'hooks/app';

export const DashboardItem: React.FC<IDashboardItemProps> = ({ category }) => {
  const styles = useStyles();
  const { items, addItem } = useItems(category.id);
  const { numColumns } = useNumColumns();
  const { width } = useWindowDimensions();

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

  const EmptyList = () => {
    return (
      <View style={styles.emptyList}>
        <Text>No Items to display</Text>
      </View>
    );
  };

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
      <FlatList
        key={numColumns}
        numColumns={numColumns}
        data={items}
        renderItem={renderItem}
        ListEmptyComponent={EmptyList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
