import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL + 'api/',
});

instance.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
  if (!config?.headers) {
    throw new Error(`Expected 'config' and 'config.headers' not to be undefined`);
  } 
  config.headers.Authorization = window.localStorage.getItem('token') || '';

  return config;
}, 
(error) => error
);

export default instance;
