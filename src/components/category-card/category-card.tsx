import React, { useMemo, useState } from 'react';
import { Icon } from '@components/icon';
import { View } from 'react-native';
import { Button, Menu, TextInput, Card, Text } from 'react-native-paper';
import { useStyles } from './styles';
import { AttributeTypes } from 'shared/constants/attribute-type';
import { ICategoryCardProps } from './type';
import { useCategory } from '@hooks/category';
import { nanoid } from '@reduxjs/toolkit';
import { AttributeType, IAttribute } from 'store/category/type';

export const CategoryCard: React.FC<ICategoryCardProps> = ({ category }) => {
  const styles = useStyles();
  const [addAttributeOpen, setAddAttributeOpen] = useState(false);
  const [selectedAttribute, setSelectedAttribute] = useState<string | null>(
    null,
  );
  const [titleFiledOpen, setTitleFieldOpen] = useState(false);

  const {
    removeCategory,
    updateCategoryName,
    updateCategoryTitleField,
    addAttribute,
    removeAttribute,
    updateAttribute,
  } = useCategory(category.id);

  const titleField = useMemo(() => {
    if (category.titleField) {
      return category.attributes.find(
        attribute => attribute.id === category.titleField,
      );
    }
    return null;
  }, [category]);

  const handleAddAttribute = (type: AttributeType) => {
    addAttribute({
      id: nanoid(),
      type,
      label: '',
    });
    setAddAttributeOpen(false);
  };

  const handleUpdateAttribute = (attribute: IAttribute) => {
    updateAttribute(attribute);
    setSelectedAttribute(null);
  };

  const handleUpdateTitleField = (id: string) => {
    updateCategoryTitleField(id);
    setTitleFieldOpen(false);
  };

  return (
    <Card style={styles.container} contentStyle={styles.content}>
      <Text variant="titleMedium">{category.name || 'Unnamed Category'}</Text>
      <TextInput
        mode="outlined"
        label="Category Name"
        value={category.name}
        onChangeText={updateCategoryName}
      />
      {category.attributes.map(attribute => (
        <View key={attribute.id} style={styles.attributes}>
          <TextInput
            mode="outlined"
            label={'Field'}
            style={styles.input}
            value={attribute.label}
            onChangeText={value =>
              handleUpdateAttribute({
                ...attribute,
                label: value,
              })
            }
          />
          <Menu
            visible={selectedAttribute === attribute.id}
            onDismiss={() => setSelectedAttribute(null)}
            anchor={
              <Button
                mode="text"
                uppercase
                style={styles.button}
                onPress={() => setSelectedAttribute(attribute.id)}>
                {attribute.type}
              </Button>
            }>
            {AttributeTypes.map(type => (
              <Menu.Item
                key={type.id}
                title={type.label}
                onPress={() =>
                  handleUpdateAttribute({
                    ...attribute,
                    type: type.id,
                  })
                }
              />
            ))}
          </Menu>

          <Icon
            type="MaterialCommunityIcons"
            name="delete"
            color="#000000"
            onPress={() => removeAttribute(attribute.id)}
          />
        </View>
      ))}
      <Menu
        visible={titleFiledOpen}
        onDismiss={() => setTitleFieldOpen(false)}
        anchor={
          <Button
            uppercase
            mode="contained"
            style={styles.button}
            onPress={() => setTitleFieldOpen(true)}>
            Title Field:{' '}
            {titleField && titleField.label
              ? titleField.label
              : 'Unnamed Field'}
          </Button>
        }>
        {category.attributes.map(attribute => (
          <Menu.Item
            key={attribute.id}
            title={attribute.label || 'Unnamed Field'}
            onPress={() => handleUpdateTitleField(attribute.id)}
          />
        ))}
      </Menu>

      <View style={styles.actions}>
        <Menu
          visible={addAttributeOpen}
          onDismiss={() => setAddAttributeOpen(false)}
          anchor={
            <Button
              mode="outlined"
              uppercase
              style={styles.button}
              onPress={() => setAddAttributeOpen(true)}>
              Add New Field
            </Button>
          }>
          {AttributeTypes.map(type => (
            <Menu.Item
              key={type.id}
              title={type.label}
              onPress={() => handleAddAttribute(type.id)}
            />
          ))}
        </Menu>

        <Button
          icon="delete"
          mode="text"
          uppercase
          style={styles.button}
          onPress={removeCategory}>
          Remove
        </Button>
      </View>
    </Card>
  );
};
