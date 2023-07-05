// vite.config.js

module.exports = {
  // 项目根目录（默认为当前工作目录）
  root: './',

  // 静态资源路径（默认为根目录）
  base: './docs/.vitepress/public',

  // 服务器配置
  server: {
    port: 3000, // 服务器端口号
    open: true, // 启动后是否自动打开浏览器
  },

  // 构建配置
  build: {
    outDir: 'dist', // 构建输出目录
    assetsDir: 'assets', // 静态资源输出目录
    sourcemap: true, // 是否生成源映射文件
  },
};
