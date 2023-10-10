import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(() => {
  const version = process.env.npm_package_version;
  return {
    base: `/${version}/`,
    build: { outDir: `dist/${version}/` },
    plugins: [react()],
  };
});
