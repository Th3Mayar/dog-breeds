// plugins/axios.js
import axios from "axios";

export default function ({ $config }, inject) {
  const apiClient = axios.create({
    baseURL: $config.apiBaseUrl,
    headers: {
      common: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    },
  });

  inject("apiClient", apiClient);
}
