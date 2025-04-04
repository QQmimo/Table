import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sassDts from 'vite-plugin-sass-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [sassDts(), react()],
  resolve: {
    alias: {
      Domain: "/src/Domain",
      Applications: "/src/Applications",
      Repositories: "/src/Repositories",
      Frameworks: "/src/Frameworks",
      UI: "/src/UI"
    }
  }
})
