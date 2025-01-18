import axios from "axios";

export const loginOnboarding = axios.create({
  baseURL: "http://18.212.86.239",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Allows sending cookies or auth headers
});


const Request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

export { Request };