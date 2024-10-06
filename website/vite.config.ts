// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import { URL, fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      }
    ]
  },
  server: {
    port: 2121
  }
})
