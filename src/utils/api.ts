import axios from 'axios';
import { getAuthToken } from './auth.utils';

const http = axios.create();

http.interceptors.request.use((config) => {
  const token = getAuthToken();
  console.log(token);
  config.headers.Authorization = token ? token : '';

  return config;
});

export default http;
