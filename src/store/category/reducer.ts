import { createSlice } from '@reduxjs/toolkit';
import { IInitialState } from './type';

const INITIAL_STATE: IInitialState = {
  categories: [],
};

export const categorySlice = createSlice({
  name: 'category',
  initialState: INITIAL_STATE,
  reducers: {
    categoryRehydrate: (state, { payload: { categories } }) => {
      return {
        ...state,
        categories,
      };
    },
    categoryAdd: (state, { payload: { category } }) => {
      return {
        ...state,
        categories: [...state.categories, category],
      };
    },
    categoryRemove: (state, { payload: { id } }) => {
      return {
        ...state,
        categories: state.categories.filter(category => category.id !== id),
      };
    },
    categoryNameUpdate: (state, { payload: { id, name } }) => {
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === id
            ? {
                ...category,
                name,
              }
            : category,
        ),
      };
    },
    categoryTitleFieldUpdate: (state, { payload: { id, titleField } }) => {
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === id
            ? {
                ...category,
                titleField,
              }
            : category,
        ),
      };
    },

    attributeAdd: (state, { payload: { id, attribute } }) => {
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === id
            ? {
                ...category,
                titleField: category.titleField
                  ? category.titleField
                  : attribute.id,
                attributes: [...category.attributes, attribute],
              }
            : category,
        ),
      };
    },
    attributeRemove: (state, { payload: { id, attributeId } }) => {
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === id
            ? {
                ...category,
                titleField:
                  category.titleField === attributeId &&
                  category.attributes.filter(
                    attribute => attribute.id !== attributeId,
                  ).length > 0
                    ? category.attributes.filter(
                        attribute => attribute.id !== attributeId,
                      )[0].id
                    : null,
                attributes: category.attributes.filter(
                  attribute => attribute.id !== attributeId,
                ),
              }
            : category,
        ),
      };
    },
    attributeUpdate: (state, { payload: { id, attribute } }) => {
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === id
            ? {
                ...category,
                attributes: category.attributes.map(attr =>
                  attr.id === attribute.id ? attribute : attr,
                ),
              }
            : category,
        ),
      };
    },
  },
});

export const {
  categoryRehydrate,
  categoryAdd,
  categoryRemove,
  categoryNameUpdate,
  categoryTitleFieldUpdate,
  attributeAdd,
  attributeRemove,
  attributeUpdate,
} = categorySlice.actions;
