import axios from "axios";
import { API_URL } from "../constant";

const baseApi = axios.create({ baseURL: API_URL });

export const publicApi = baseApi;

export const authApi = axios.create({ baseURL: API_URL });

authApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

authApi.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);
