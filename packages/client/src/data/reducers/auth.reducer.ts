import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IThunkType } from 'app/utils/types';

export interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
};

export const loginThunk = createAsyncThunk<null, any, IThunkType>('auth/login', async (values, { extra: { api } }) => {
  api.get('/');
  return null;
});

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = slice.actions;

export default slice.reducer;
