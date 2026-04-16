import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import pages from "vite-plugin-pages"


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pages({
      dirs: 'src/pages'
    })
  ],
 
}) 
