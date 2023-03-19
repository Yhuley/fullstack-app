import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth.reducer';

export const combinedReducer = combineReducers({
  authReducer,
});

export default combinedReducer;
