import axios, { AxiosError, AxiosInstance } from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL ;
const apiVersion=process.env.NEXT_PUBLIC_API_VERSION;
export const apiClient: AxiosInstance = axios.create({
  baseURL: `${baseURL}/${apiVersion}`,
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

export type LeadSource = "contact-page" | "enquiry-page";

export interface LeadFormData {
  name: string;
  email: string;
  phone?: string;
  topic?: string;
  message: string;
}

export interface SubmitLeadOptions {
  source: LeadSource;
  referrer?: string;
  userAgent?: string;
  timestamp?: string;
}

const LEADS_ENDPOINT = `/leads`;

function sanitizePayload<T extends Record<string, unknown>>(payload: T) {
  return Object.fromEntries(
    Object.entries(payload).filter(([, value]) => value !== undefined && value !== null && value !== "")
  );
}

export async function submitLeadForm(data: LeadFormData, options: SubmitLeadOptions) {
  const payload = sanitizePayload({
    ...data,
    source: options.source,
    timestamp: options.timestamp || new Date().toISOString(),
    referrer: options.referrer,
    userAgent: options.userAgent,
  });

  const response = await apiClient.post(LEADS_ENDPOINT, payload);
  return response.data;
}

export async function submitContactForm(data: LeadFormData, meta?: Omit<SubmitLeadOptions, "source">) {
  return submitLeadForm(data, {
    source: "contact-page",
    referrer: meta?.referrer,
    userAgent: meta?.userAgent,
    timestamp: meta?.timestamp,
  });
}

export async function submitEnquiryForm(data: LeadFormData, meta?: Omit<SubmitLeadOptions, "source">) {
  return submitLeadForm(data, {
    source: "enquiry-page",
    referrer: meta?.referrer,
    userAgent: meta?.userAgent,
    timestamp: meta?.timestamp,
  });
}

// Newsletter subscription types
export interface NewsletterSubscriptionData {
  email: string;
  name: string;
  topic?: string;
  interests?: string[];
  source?: string;
}

export interface NewsletterSubscriptionResponse {
  success: boolean;
  message: string;
  data: {
    email: string;
    name: string;
    status: string;
    subscribedAt?: string;
  };
}

export async function subscribeToNewsletter(
  data: NewsletterSubscriptionData
): Promise<NewsletterSubscriptionResponse> {
  const payload = {
    email: data.email,
    name: data.name,
    topic: data.topic || "Test Series",
    interests: data.interests || ["updates"],
    source: data.source || "website",
  };
  const response = await apiClient.post<NewsletterSubscriptionResponse>(
    "/newsletter/subscribe",
    payload
  );
  return response.data;
}

