// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 10000, // required for Render to detect the app
    host: '0.0.0.0', // make Vite accessible externally
    allowedHosts: ['shopwebsite-admin.onrender.com'], // allow your Render domain
  },
});
