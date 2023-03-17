import axios from 'axios';

import {AxiosErrorHandler} from '../utils/helpers/axiosHelper';

axios.interceptors.response.use(response => response, AxiosErrorHandler);
axios.defaults.headers.common.accept = 'application/json';

export const gistBucketApiAxios = axios.create({
  baseURL: 'https://gist.githubusercontent.com/Gualberto-Vannini/',
});

const APIS = [axios, gistBucketApiAxios];

APIS.forEach(api =>
  api.interceptors.response.use(response => response, AxiosErrorHandler),
);
