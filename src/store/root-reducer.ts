import { combineReducers } from '@reduxjs/toolkit';
import { categorySlice } from './category/reducer';

export const reducer = combineReducers({
  [categorySlice.name]: categorySlice.reducer,
});
