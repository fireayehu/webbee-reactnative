import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';
import { IDatePickerProps } from './type';

export const DatePicker: React.FC<IDatePickerProps> = ({
  label,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleConfirm = (params: any) => {
    onChange(new Date(params.date).toLocaleDateString());
    setIsOpen(false);
  };

  const formatDate = (value: string) => {
    const [month, day, year] = value.split('/');
    return new Date(
      parseInt(year, 10),
      parseInt(month, 10) - 1,
      parseInt(day, 10),
    );
  };

  return (
    <View>
      <Pressable onPressIn={() => setIsOpen(true)}>
        <View pointerEvents="none">
          <TextInput
            mode="outlined"
            keyboardType="numeric"
            label={label}
            editable={false}
            value={value}
          />
        </View>
      </Pressable>
      <DatePickerModal
        locale="en"
        mode="single"
        visible={isOpen}
        onDismiss={() => setIsOpen(false)}
        date={value ? formatDate(value) : undefined}
        onConfirm={handleConfirm}
      />
    </View>
  );
};
