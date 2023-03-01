import { createSlice } from '@reduxjs/toolkit';
import { IInitialState } from './type';

const INITIAL_STATE: IInitialState = {
  items: [],
};

export const itemSlice = createSlice({
  name: 'item',
  initialState: INITIAL_STATE,
  reducers: {
    itemAdd: (state, { payload: { item } }) => {
      return {
        ...state,
        items: [...state.items, item],
      };
    },
    itemRemove: (state, { payload: { id } }) => {
      return {
        ...state,
        items: state.items.filter(item => item.id !== id),
      };
    },
    itemUpdate: (state, { payload: { id, attribute, value } }) => {
      return {
        ...state,
        items: state.items.map(item =>
          item.id === id
            ? {
                ...item,
                values: [
                  ...item.values.filter(value => value.attribute !== attribute),
                  {
                    attribute,
                    value,
                  },
                ],
              }
            : item,
        ),
      };
    },
  },
});

export const { itemAdd, itemRemove, itemUpdate } = itemSlice.actions;
