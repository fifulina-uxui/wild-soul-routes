import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
// Режим "gh" собирает сайт под подпапку GitHub Pages: /wild-soul-routes/
export default defineConfig(({ mode }) => ({
  base: mode === 'gh' ? '/wild-soul-routes/' : '/',
  plugins: [inspectAttr(), react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
