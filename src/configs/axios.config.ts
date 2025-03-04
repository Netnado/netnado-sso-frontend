import { LocalStorageHelper } from "@/helpers/local.storage.helper";
import { IAccountType } from "@/types/account";
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})


//REQUEST
axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig<unknown>) => {
  const accessToken = LocalStorageHelper.get('accessToken') as string;
  const account = LocalStorageHelper.get('account') as IAccountType;
  config.headers.authorization = `Bearer ${accessToken}`;
  config.headers['x-account-id'] = account?.id;
  return config;
}, (err) => {
  return Promise.reject(err);
});


//RESPONSE
axiosInstance.interceptors.response.use((response:  AxiosResponse) => {
  return response?.data;
}, (err) => {
  const data = err?.response?.data;
  const msg = data?.message;

  return Promise.reject(data ?? new Error(msg ?? err.message));
});



export default axiosInstance;