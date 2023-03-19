import { configureStore } from '@reduxjs/toolkit';
import combinedReducer from './reducers';

export const store = configureStore({
  reducer: combinedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
