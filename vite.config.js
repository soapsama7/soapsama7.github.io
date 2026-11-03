import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // 相对路径，保证之后部署到 GitHub Pages 的子路径下也能正常加载资源
  base: './',
  server: {
    port: 5173
  }
})
