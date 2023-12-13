// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';
export default defineConfig({
  // 项目根目录（默认为当前工作目录）
  root: './docs',
  css: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")]
    }
  },
  // 静态资源路径（默认为根目录）
  base: '/MyBlog/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './')
    }
  },
  // 服务器配置
  server: {
    port: 3008, // 服务器端口号
    // open: true, // 启动后是否自动打开浏览器
  },

  // 构建配置
  build: {
    outDir: 'dist', // 构建输出目录
    assetsDir: 'assets', // 静态资源输出目录
    sourcemap: true, // 是否生成源映射文件
  }
});
