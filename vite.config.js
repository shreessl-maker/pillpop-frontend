import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ This line is critical for Vercel hosting
export default defineConfig({
  plugins: [react()],
  base: "./",
});
