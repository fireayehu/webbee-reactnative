import { createSlice } from '@reduxjs/toolkit';
import { categoryRemove } from 'store/category/reducer';
import { IInitialState } from './type';

const INITIAL_STATE: IInitialState = {
  items: [],
};

export const itemSlice = createSlice({
  name: 'item',
  initialState: INITIAL_STATE,
  reducers: {
    itemRehydrate: (state, { payload: { items } }) => {
      return {
        ...state,
        items,
      };
    },
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

    itemValueUpdate: (state, { payload: { category, attribute } }) => {
      return {
        ...state,
        items: state.items.map(item =>
          item.category === category
            ? {
                ...item,
                values: item.values.map(value =>
                  value.attribute === attribute
                    ? {
                        ...value,
                        value: null,
                      }
                    : value,
                ),
              }
            : item,
        ),
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(categoryRemove, (state, { payload: { id } }) => {
      return {
        ...state,
        items: state.items.filter(item => item.category !== id),
      };
    });
  },
});

export const {
  itemRehydrate,
  itemAdd,
  itemRemove,
  itemUpdate,
  itemValueUpdate,
} = itemSlice.actions;
