import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // for build: base: '/~kimtun/Javascript-ohtu/wsk-routing/',
  base: './',
})
