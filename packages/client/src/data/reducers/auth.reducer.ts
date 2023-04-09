import { ReducerStatus } from './../../app/utils/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IThunkType } from 'app/utils/types';

export interface AuthState {
  isLoggedIn: boolean;
  registerLoading: ReducerStatus;
}

const initialState: AuthState = {
  isLoggedIn: false,
  registerLoading: ReducerStatus.idle,
};

export type RegisterValues = {
  email: string;
  password: string;
  name: string;
};
export const register = createAsyncThunk<null, RegisterValues, IThunkType>(
  'auth/register',
  async (values, { extra: { api } }) => {
    const res = await api.post('/auth/register', values);
    return res;
  },
);

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.registerLoading = ReducerStatus.pending;
    });

    builder.addCase(register.fulfilled, (state) => {
      state.registerLoading = ReducerStatus.success;
    });

    builder.addCase(register.rejected, (state) => {
      state.registerLoading = ReducerStatus.failed;
    });
  },
});

export default slice.reducer;
