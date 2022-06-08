import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 7200000,
});

client.interceptors.request.use((config: AxiosRequestConfig) => {
  const token: string | undefined = Cookies.get(
    process.env.NEXT_PUBLIC_COOKIE_NAME as string,
  );
  if (token != null && config.headers)
    config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default client;
