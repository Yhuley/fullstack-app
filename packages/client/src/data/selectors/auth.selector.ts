import { RootState } from '../store';

const getState = (state: RootState) => state.authReducer;

export const getUserDetails = (state: RootState) => getState(state).user;

export const getIsLoggedIn = (state: RootState) => Boolean(getUserDetails(state));
