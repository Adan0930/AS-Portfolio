import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://usuario.github.io/mi-repo',  // Cambia por tu URL de GitHub Pages
  output: 'static', // Establece la salida como estática
  build: {
    out: './docs',  // La carpeta donde se generarán los archivos estáticos
  },
});
