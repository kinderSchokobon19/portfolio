// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// 💡 IMPORTANT : Il faut importer la fonction par défaut (tailwindcss)
import tailwindcss from '@tailwindcss/vite'; 

const repoName = 'portfolio';

// https://vitejs.dev/config/
export default defineConfig({
  base: `/`,
  plugins: [
    react()
  ],
});