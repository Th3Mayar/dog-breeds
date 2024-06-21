import { defineNuxtConfig } from '@nuxt/bridge';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "shadcn-nuxt", 
    "@nuxtjs/tailwindcss",
  ],
  runtimeConfig: {
    apiBaseUrl: 'https://api-dog-breeds-lake.vercel.app'
  },
  plugins: ['~/plugins/axios.js']
});
