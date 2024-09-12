import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
    days: 16,
  },
});

export default apiClient;