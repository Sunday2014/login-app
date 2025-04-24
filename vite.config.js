import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss()
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            "last 1 version",
            "> 1%",
            "maintained node versions",
            "not dead"
          ]
        }),
        // postcssPresetEnv()
      ]
    },
    order: "prepend"
  },
  optimizeDeps: {
    include: ['tdesign-vue-next']
  }
})
