import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      generateBundle() {
        const source = path.resolve(__dirname, './public/404.html')
        const dest = path.resolve(__dirname, './dist/404.html')
        if (fs.existsSync(source)) {
          fs.copyFileSync(source, dest)
        }
      },
    },
  ],
  base: '/azoya/',
})
