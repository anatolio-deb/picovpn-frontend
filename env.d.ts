/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />
/// <reference types="vite-plugin-vue-layouts-next/client" />

interface ProcessEnv {
  NODE_ENV: 'development' | 'production';
  API_HOST: string;
  // Add more environment variables here...
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends ProcessEnv {}
  }
}

const apiHost = process.env.API_HOST;
if (!apiHost) {
  throw new Error('API_HOST not found');
}

export const apiUrl = `https://${apiHost}/api`