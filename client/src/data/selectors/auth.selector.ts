import { RootState } from '../store';

const getState = (state: RootState) => state.authReducer;

export const getIsLoggedIn = (store: RootState) => getState(store).isLoggedIn;
