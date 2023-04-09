import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IThunkType } from 'app/utils/types';

export interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
};

export const register = createAsyncThunk<null, undefined, IThunkType>(
  'auth/register',
  async (values, { extra: { api } }) => {
    await api.post('/auth/register', { name: 'Ivan' });
    return null;
  },
);

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
