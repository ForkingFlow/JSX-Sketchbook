import { defineConfig } from 'vite'
const fs = require('node:fs');
import react from "@vitejs/plugin-react";

export default defineConfig({
plugins: [
      react(),
    ],

  esbuild: {
    loader: "jsx",
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
        ".ts": "tsx",
      },
    },
  },
  server: {
    port: 1987,
    host: true,
    https: {
      key: fs.readFileSync('localhost-key.pem'),
      cert: fs.readFileSync('localhost.pem')
    }
  }
})
