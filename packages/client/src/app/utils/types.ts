import API from 'data/api';
import { TypedDispatch } from 'data/hooks';
import { RootState } from 'data/store';

export interface ThunkExtraArguments {
  api: API;
}

export interface IThunkType {
  dispatch: TypedDispatch;
  state: RootState;
  extra: ThunkExtraArguments;
}
