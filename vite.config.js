import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: { // <-- El objeto server va aquí, en el nivel superior
    host: true, // Escucha en todas las interfaces de red
    hmr: {
      clientPort: 443, // Usa el puerto HTTPS estándar
    },
  },
});
