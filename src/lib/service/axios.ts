import axios from "axios";
import { API_URL } from "../constant";
import toast from "react-hot-toast";
import { createBrowserHistory } from "@tanstack/react-router";

const history = createBrowserHistory();

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
      toast.error("Session expired, please login again");
      history.push("/login");
    }
    return Promise.reject(err);
  }
);
