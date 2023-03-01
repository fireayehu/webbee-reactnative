import React, { Fragment, useMemo } from 'react';
import { View } from 'react-native';
import { Button, Switch, TextInput, Card, Text } from 'react-native-paper';
import { useStyles } from './styles';
import { IItemCardProps } from './type';
import { useItem } from 'hooks/item';
import { DatePicker } from 'components/date-picker';

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

  return (
    <Card style={styles.container} contentStyle={styles.content}>
      <Text variant="titleSmall">{`${title}`}</Text>
      {attributes.map(attribute => (
        <Fragment key={attribute.id}>
          {attribute.type === 'Text' && (
            <TextInput
              mode="outlined"
              label={attribute.label}
              value={
                item.values.find(value => value.attribute === attribute.id)
                  ?.value || ''
              }
              onChangeText={value => updateItem(attribute.id, value)}
            />
          )}
          {attribute.type === 'Number' && (
            <TextInput
              mode="outlined"
              keyboardType="numeric"
              label={attribute.label}
              value={
                item.values.find(value => value.attribute === attribute.id)
                  ?.value || ''
              }
              onChangeText={value => updateItem(attribute.id, value)}
            />
          )}
          {attribute.type === 'Checkbox' && (
            <View style={styles.hStack}>
              <Switch
                value={
                  !!item.values.find(value => value.attribute === attribute.id)
                    ?.value
                }
                onValueChange={() =>
                  updateItem(
                    attribute.id,
                    !!!item.values.find(
                      value => value.attribute === attribute.id,
                    )?.value,
                  )
                }
              />
              <Text variant="bodyLarge">{attribute.label}</Text>
            </View>
          )}

          {attribute.type === 'Date' && (
            <DatePicker
              label={attribute.label}
              value={
                item.values.find(value => value.attribute === attribute.id)
                  ?.value || undefined
              }
              onChange={date => updateItem(attribute.id, date)}
            />
          )}
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
