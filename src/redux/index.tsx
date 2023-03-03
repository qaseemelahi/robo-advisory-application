import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import dataSlice from './reducer/dataSlice';

export const store = configureStore({
  reducer: dataSlice,
});
export type RootState = ReturnType<typeof dataSlice>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
