import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const productionPlugins = [react(), tailwindcss()];
const developmentPlugins = [react(), tailwindcss()];

export default defineConfig(({ command }) => ({
  plugins: command === "serve" ? developmentPlugins : productionPlugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          const markdownDiagramDependencies = [
            "/node_modules/streamdown/",
            "/node_modules/shiki/",
            "/node_modules/@shikijs/",
            "/node_modules/mermaid/",
            "/node_modules/cytoscape/"
          ];

          if (markdownDiagramDependencies.some((dependency) => id.includes(dependency))) {
            return "markdown-diagrams";
          }
        }
      }
    }
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
}));
