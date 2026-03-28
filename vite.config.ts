import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Must match the GitHub repo name for https://<user>.github.io/<repo>/
const GH_PAGES_BASE = "/kapil-poonia-3d-portfolio/";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: command === "serve" ? "/" : GH_PAGES_BASE,
  plugins: [react()],
}));
