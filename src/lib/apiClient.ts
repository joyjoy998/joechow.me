import axios from "axios";

function getBaseUrl() {
  if (typeof window !== "undefined") {
    return "";
  }

  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

const apiClient = axios.create({
  timeout: 10000,
  baseURL: getBaseUrl(),
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
