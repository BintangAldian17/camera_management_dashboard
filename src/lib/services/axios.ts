import axios from "axios";
import { API_URL, TOKEN_KEY } from "../constant";
import toast from "react-hot-toast";
import { router } from "@/lib/services/router";

const baseApi = axios.create({ baseURL: API_URL });

export const publicApi = baseApi;

export const authApi = axios.create({ baseURL: API_URL });

authApi.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_KEY);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

authApi.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem(TOKEN_KEY);
      toast.error("Session expired, please login again");
      router.navigate({ to: "/login" });
    }
    return Promise.reject(err);
  }
);
