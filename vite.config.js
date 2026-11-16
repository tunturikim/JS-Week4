import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //base: '/~kimtun/Javascript-ohtu/wsk-builds/hooks/', // Uncomment this line when deploying to GitHub Pages
  base: './',
})

