import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/your-repo-name/", // Replace 'your-repo-name' with the name of your repository
  plugins: [react()],
});
