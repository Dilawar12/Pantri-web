import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // base: '/pantri-app/', // 👈 subfolder name on server
  plugins: [react()],
  // build: {
  //   outDir: 'dist',
  // },
})
