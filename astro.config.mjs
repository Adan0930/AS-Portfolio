import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://adan0930.github.io/AS-Portfolio/',  // Cambia por tu URL de GitHub Pages
  output: 'static', // Establece la salida como estática
  base:'/As-Portfolio/',  
  build: {
    outDir: './docs',  // La carpeta donde se generarán los archivos estáticos
    format:'directory',
  },
});
 



