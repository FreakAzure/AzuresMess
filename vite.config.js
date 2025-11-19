import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    // Configuración para el servidor de preview
    // Esto ayuda a manejar rutas del cliente en desarrollo
  }
})

