import {AxiosError} from 'axios';

export const AxiosErrorHandler = (err: AxiosError) => {
  console.log('Axios error:');
  console.log(err?.response?.data || err?.message);
  console.log(err?.response?.config?.url || err?.message);
  if (err.response && err.response.status) {
    return Promise.reject(err.response.status);
  }
  return Promise.reject(err);
};
