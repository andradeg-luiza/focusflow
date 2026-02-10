import { api } from "./api";
import type { AxiosResponse, AxiosError } from "axios";

export function setupInterceptors() {
  api.interceptors.request.use(config => {
    const token = localStorage.getItem("focusflow-token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        localStorage.removeItem("focusflow-token");
        window.location.href = "/login";
      }
      return Promise.reject(error);
    }
  );
}
