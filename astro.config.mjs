import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://adan0930.github.io/AS-Portfolio/',  // URL de GitHub Pages
  base: '/AS-Portfolio/',
  build: {
    outDir: './dist',  // Carpeta donde se generarán los archivos estáticos
  },
});


