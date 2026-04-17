import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  root: "client",
  base: "/",

  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },

  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },

  server: {
    host: "0.0.0.0",
    port: 5000,
    allowedHosts: true,
  },
});
