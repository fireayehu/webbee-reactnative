import React, { useCallback } from 'react';
import { FlatList, useWindowDimensions, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { CategoryCard } from '@components/category-card';
import { useCategories } from '@hooks/category';
import { useStyles } from './styles';
import { nanoid } from '@reduxjs/toolkit';
import { useKeyboardStatus, useNumColumns } from '@hooks/app';

export const Manage = () => {
  const styles = useStyles();
  const { categories, addCategory } = useCategories();
  const { numColumns } = useNumColumns();
  const { width } = useWindowDimensions();
  const { keyboardOpen } = useKeyboardStatus();

  const handleAddCategory = () => {
    const attributeId = nanoid();
    addCategory({
      id: nanoid(),
      name: 'New Category',
      titleField: attributeId,
      attributes: [
        {
          id: attributeId,
          type: 'Text',
          label: '',
        },
      ],
    });
  };

  const renderItem = useCallback(
    ({ item }: any) => (
      <View style={{ width: width / numColumns }}>
        <CategoryCard category={item} />
      </View>
    ),
    [width],
  );

  const EmptyList = () => {
    return (
      <View style={styles.emptyList}>
        <Text>No Categories to display</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        key={numColumns}
        numColumns={numColumns}
        data={categories}
        renderItem={renderItem}
        ListEmptyComponent={EmptyList}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      />
      <Button
        mode="contained"
        uppercase
        style={[styles.button, { display: keyboardOpen ? 'none' : 'flex' }]}
        onPress={handleAddCategory}>
        Add New Category
      </Button>
    </View>
  );
};
