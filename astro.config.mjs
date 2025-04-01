import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://adan0930.github.io/AS-Portfolio/',  // Cambia por tu URL de GitHub Pages
  base:'/AS-Portfolio/'
,  output: 'static', // Establece la salida como estática
  build: {
    outDir: './docs',  // La carpeta donde se generarán los archivos estáticos
  },
});
 