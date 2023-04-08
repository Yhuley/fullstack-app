import { configureStore } from '@reduxjs/toolkit';
import combinedReducer from './reducers';
import thunk from 'redux-thunk';
import { API } from './api';

export const createStore = () => {
  const extraArguments = {};

  const store = configureStore({
    reducer: combinedReducer,
    middleware: [thunk.withExtraArgument(extraArguments)],
  });

  const api = new API(store, { baseURL: process.env.API_BASE_URL });
  extraArguments.api = api;

  return { store };
};

export const { store } = createStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
