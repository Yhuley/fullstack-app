import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Store } from 'redux';

export class API {
  private readonly axios: AxiosInstance;
  private store: Store;

  constructor(store: Store, config: AxiosRequestConfig) {
    this.axios = axios.create(config);
    this.store = store;
  }

  setAuthorizationHeader = (apiKey: string): void => {
    this.axios.defaults.headers.common['x-auth'] = `${apiKey}`;
  };

  removeAuthorizationHeader = (): void => {
    delete this.axios.defaults.headers.common['x-auth'];
  };

  get = (...args) => this.axios.get.apply(this, args);

  post = (...args) => this.axios.post.apply(this, args);

  patch = (...args) => this.axios.patch.apply(this, args);

  delete = (...args) => this.axios.delete.apply(this, args);
}
