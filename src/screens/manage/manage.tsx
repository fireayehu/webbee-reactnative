import React, { useCallback, useEffect } from 'react';
import { FlatList, useWindowDimensions, View } from 'react-native';
import { Button } from 'react-native-paper';
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

  return (
    <View style={styles.container}>
      <FlatList
        key={numColumns}
        numColumns={numColumns}
        data={categories}
        renderItem={renderItem}
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
