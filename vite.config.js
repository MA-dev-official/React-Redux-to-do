import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
  server: {
    allowedHosts: [
      'd8b6e408-645d-417e-b129-6a3db136a5f6-00-aop4wx5ilms.pike.replit.dev'
    ]
  },
})
