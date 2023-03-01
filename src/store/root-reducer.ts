import { combineReducers } from '@reduxjs/toolkit';
import { categorySlice } from './category/reducer';
import { itemSlice } from './item/reducer';

export const reducer = combineReducers({
  [categorySlice.name]: categorySlice.reducer,
  [itemSlice.name]: itemSlice.reducer,
});
