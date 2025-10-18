import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 為了部署到 GitHub Pages，需要設定 base
  // 將 <你的Repo名稱> 替換成你的 GitHub repository 名稱
  base: '/gemini_test/', 
})
