import axios from "axios";

export const pagarmeAPI = axios.create({
  baseURL: import.meta.env.VITE_APP_PAGARME_BASE_URL,
  auth: {
    username: import.meta.env.VITE_APP_PAGARME_API_KEY,
    password: '',
  }
});
