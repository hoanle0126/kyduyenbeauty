import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Quan trọng để load asset đúng
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      assets: path.resolve(__dirname, "./src/assets"),
    },
  },
  server: {
    port: 5173,
  },
  build: {
    outDir: "dist",
  },
});
