import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

const envs = loadEnv('development', process.cwd());

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
    }),
    Components({
      dts: true,
      dirs: ['src/components', 'src/icons'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/service': {
        target: envs.VITE_API_BASE_URL,
        rewrite: (path) => path.replace(/^\/service/, ''),
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
