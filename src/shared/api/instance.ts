import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const axiosConfig: AxiosRequestConfig = {
  timeout: 3000,
  baseURL: process.env.REACT_APP_SERVER_URL,
};
const axiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json; charset=utf-8';
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      'adminToken'
    )}`;
    config.headers.Accept = 'application/json';
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    const { response } = error;
    response.data.message
      ? toast.error(response.data.message)
      : toast.error(response.data.errorMessage);

    return Promise.reject(error);
  }
);
export default axiosInstance;
