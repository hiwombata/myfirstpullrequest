import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  build: {
    lib: mode === 'figma' ? {
      entry: 'src/figma-export.tsx',
      name: 'TypistEffect',
      fileName: 'typist-effect',
      formats: ['umd']
    } : undefined,
    rollupOptions: mode === 'figma' ? {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    } : {}
  }
}))