import {combineReducers, configureStore} from '@reduxjs/toolkit';
import dataSlice from './reducer/dataSlice';

export const store = configureStore({
  reducer: dataSlice,
});
