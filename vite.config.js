import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});

// https://api.coingecko.com/api/v3/search/trending
// https://api.coingecko.com/api/v3/coins/sonic-svm
