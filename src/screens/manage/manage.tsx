import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { Button } from 'react-native-paper';
import { CategoryCard } from '@components/category-card';
import { useCategories } from '@hooks/category';
import { useStyles } from './styles';
import { nanoid } from '@reduxjs/toolkit';

export const Manage = () => {
  const styles = useStyles();
  const { categories, addCategory } = useCategories();

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
    ({ item }: any) => <CategoryCard category={item} />,
    [],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        contentContainerStyle={styles.content}
      />
      <Button
        mode="contained"
        uppercase
        style={styles.button}
        onPress={handleAddCategory}>
        Add New Category
      </Button>
    </View>
  );
};
