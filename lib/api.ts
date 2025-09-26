import axios, { AxiosError, AxiosInstance } from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.skyprep.co";

export const apiClient: AxiosInstance = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  // Example: Attach auth token if present
  const token = undefined; // integrate when auth is added
  if (token) {
    config.headers.setAuthorization(`Bearer ${token}`);
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Centralized error handling & logging
    if (error.response) {
      // eslint-disable-next-line no-console
      console.error("API Error:", {
        url: error.config?.url,
        status: error.response.status,
        data: error.response.data,
      });
    }
    return Promise.reject(error);
  }
);

export type ApiResult<T> = { data: T };

export async function getJson<T>(url: string, params?: Record<string, unknown>) {
  const res = await apiClient.get<T>(url, { params });
  return res.data;
}


