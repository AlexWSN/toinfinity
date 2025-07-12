import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // sau orice alt port liber la tine
    strictPort: true // să nu aleagă alt port dacă ăsta e ocupat
  }
});
