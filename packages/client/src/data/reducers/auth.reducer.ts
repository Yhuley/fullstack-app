import { IUser, ReducerStatus, IToken } from './../../app/utils/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IThunkType } from 'app/utils/types';
import jwtDecode from 'jwt-decode';

export interface AuthState {
  loginLoading: ReducerStatus;
  registerLoading: ReducerStatus;
  user: IUser | null;
}

const initialState: AuthState = {
  loginLoading: ReducerStatus.idle,
  registerLoading: ReducerStatus.idle,
  user: null,
};

export type LoginValues = {
  email: string;
  password: string;
};

export const login = createAsyncThunk<string, LoginValues, IThunkType>(
  'auth/login',
  async (values, { extra: { api }, rejectWithValue }) => {
    try {
      const res = await api.post('/auth/login', values);
      console.log(res);
      api.setAuthorizationHeader(res.data.token);
      localStorage.setItem('token', res.data.token);

      return res.data.token;
    } catch (err) {
      rejectWithValue(err);
    }
  },
);

export type RegisterValues = {
  email: string;
  password: string;
  name: string;
};

export const register = createAsyncThunk<IUser, RegisterValues, IThunkType>(
  'auth/register',
  async (values, { extra: { api }, rejectWithValue }) => {
    try {
      const res = await api.post('/auth/register', values);
      return res;
    } catch (err) {
      rejectWithValue(err);
    }
  },
);

export const logout = createAsyncThunk<null, undefined, IThunkType>('auth/logout', async (_, { extra: { api } }) => {
  api.removeAuthorizationHeader();
  localStorage.removeItem('token');
  return null;
});

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // register
    builder.addCase(register.pending, (state) => {
      state.registerLoading = ReducerStatus.pending;
    });

    builder.addCase(register.fulfilled, (state) => {
      state.registerLoading = ReducerStatus.success;
    });

    builder.addCase(register.rejected, (state) => {
      state.registerLoading = ReducerStatus.failed;
    });

    // login
    builder.addCase(login.pending, (state) => {
      state.loginLoading = ReducerStatus.pending;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      const token = action.payload;
      const { userId, email, name }: IToken = jwtDecode(token);

      state.user = {
        id: userId,
        email,
        name,
      };
      state.loginLoading = ReducerStatus.success;
    });

    builder.addCase(login.rejected, (state) => {
      state.loginLoading = ReducerStatus.failed;
    });

    // logout
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
    });
  },
});

export default slice.reducer;
