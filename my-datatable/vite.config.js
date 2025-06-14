import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/components/DataTable/index.jsx',
      name: 'DataTable',
      fileName: (format) => `my-datatable.${format}.js`,
      cssCodeSplit: false,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    resolve: {
      alias: {
        '@my-datatable': path.resolve(
          __dirname,
          'node_modules/my-datatable-sydyjo/dist',
        ),
      },
    },
  },
})
