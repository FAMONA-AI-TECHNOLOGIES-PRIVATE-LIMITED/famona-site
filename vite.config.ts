import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Prevents original source code from being visible in browser dev tools
    minify: 'esbuild', // Obfuscates code to make it harder to read
    reportCompressedSize: false, // Hides detailed bundle information during build
    terserOptions: {
      compress: {
        drop_console: true, // Removes all console.logs
        drop_debugger: true, // Removes all debuggers
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
