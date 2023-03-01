import React, { Fragment, useMemo } from 'react';
import { View } from 'react-native';
import { Button, Switch, TextInput, Card, Text } from 'react-native-paper';
import { useStyles } from './styles';
import { IItemCardProps } from './type';
import { useItem } from 'hooks/item';
import { DatePicker } from 'components/date-picker';
import { IAttribute } from 'store/category/type';

export const ItemCard: React.FC<IItemCardProps> = ({
  item,
  titleField,
  attributes,
}) => {
  const styles = useStyles();
  const { removeItem, updateItem } = useItem(item.id);

  const title = useMemo(() => {
    if (titleField) {
      const title = item.values.find(value => value.attribute === titleField);
      return title && (title.value || title.value === false)
        ? title.value
        : 'Unnamed Field';
    }

    return null;
  }, [item, titleField]);

  const renderTextAttribute = (attribute: IAttribute) => {
    const value =
      item.values.find(value => value.attribute === attribute.id)?.value || '';
    return (
      <TextInput
        mode="outlined"
        label={attribute.label}
        value={value}
        onChangeText={value => updateItem(attribute.id, value)}
      />
    );
  };

  const renderNumberAttribute = (attribute: IAttribute) => {
    const value =
      item.values.find(value => value.attribute === attribute.id)?.value || '';
    return (
      <TextInput
        mode="outlined"
        keyboardType="numeric"
        label={attribute.label}
        value={value}
        onChangeText={value => updateItem(attribute.id, value)}
      />
    );
  };

  const renderCheckboxAttribute = (attribute: IAttribute) => {
    const value =
      item.values.find(value => value.attribute === attribute.id)?.value ||
      false;
    return (
      <View style={styles.hStack}>
        <Switch
          value={value}
          onValueChange={() => updateItem(attribute.id, !value)}
        />
        <Text variant="bodyLarge">{attribute.label}</Text>
      </View>
    );
  };

  const renderDateAttribute = (attribute: IAttribute) => {
    const value =
      item.values.find(value => value.attribute === attribute.id)?.value ||
      undefined;
    return (
      <DatePicker
        label={attribute.label}
        value={value}
        onChange={date => updateItem(attribute.id, date)}
      />
    );
  };

  return (
    <Card style={styles.container} contentStyle={styles.content}>
      <Text variant="titleSmall">{`${title}`}</Text>
      {attributes.map(attribute => (
        <Fragment key={attribute.id}>
          {attribute.type === 'Text' && renderTextAttribute(attribute)}
          {attribute.type === 'Number' && renderNumberAttribute(attribute)}
          {attribute.type === 'Checkbox' && renderCheckboxAttribute(attribute)}
          {attribute.type === 'Date' && renderDateAttribute(attribute)}
        </Fragment>
      ))}
      <Button
        icon="delete"
        mode="text"
        uppercase
        style={styles.button}
        onPress={removeItem}>
        Remove
      </Button>
    </Card>
  );
};
