import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { Plugin } from "vite";

// Security headers plugin for production
const securityHeadersPlugin = (): Plugin => ({
  name: 'security-headers',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      // HSTS - Force HTTPS for 1 year
      res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

      // COOP - Isolate browsing context
      res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');

      // COEP - Require CORP for cross-origin resources
      res.setHeader('Cross-Origin-Embedder-Policy', 'credentialless');

      // CORP - Allow same-origin requests only
      res.setHeader('Cross-Origin-Resource-Policy', 'same-origin');

      // X-Frame-Options - Prevent clickjacking
      res.setHeader('X-Frame-Options', 'DENY');

      // X-Content-Type-Options - Prevent MIME sniffing
      res.setHeader('X-Content-Type-Options', 'nosniff');

      // X-XSS-Protection - Legacy XSS protection
      res.setHeader('X-XSS-Protection', '1; mode=block');

      // Referrer-Policy - Control referrer information
      res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

      // Permissions-Policy - Disable unnecessary browser features
      res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), speaker=()');

      next();
    });
  }
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    securityHeadersPlugin()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-dom/client",
    ],
  },
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom", "framer-motion", "lucide-react"],
        },
      },
    },
  },
}));
