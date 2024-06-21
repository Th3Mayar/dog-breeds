import axios from 'axios';

const baseURL = process.env.URL_API_DOGS ?? 'https://api-dog-breeds-lake.vercel.app';

const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default apiClient;
