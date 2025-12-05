// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Importation du plugin Tailwind CSS
import tailwindcss from '@tailwindcss/vite'; 

const repoName = 'portfolio';

// https://vitejs.dev/config/
export default defineConfig({
  // CORRECTION 1 : Utilisez le chemin de base relatif './'
  // C'est la solution la plus fiable pour éviter les 404 sur GitHub Pages.
  base: './', 
  
  plugins: [
    react(),
    // CORRECTION 2 : Activation du plugin Tailwind CSS
    tailwindcss() 
  ],
});