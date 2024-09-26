/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/vitest-setup.ts",
    coverage: {
      provider: "istanbul",
      all: true,
    },
  },
  resolve: {
    alias: { src: resolve(__dirname, "src") },
  },
});
