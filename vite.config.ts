import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  // Prevents accidental leakage of system environment variables
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  build: {
    sourcemap: false, // Prevents original source code from being visible in browser dev tools
    minify: 'esbuild', // Obfuscates code to make it harder to read
    reportCompressedSize: false, // Hides detailed bundle information during build
  },
  esbuild: {
    drop: ['console', 'debugger'], // Correct way to remove logs when using esbuild
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
