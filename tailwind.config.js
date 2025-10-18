/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // 引入 typography 插件來美化文章排版
    require('@tailwindcss/typography'),
  ],
}
