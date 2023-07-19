import DefaultTheme from 'vitepress/theme'
import 'tailwindcss/tailwind.css';
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
export default {
  ...DefaultTheme,
  enhanceApp({app}) {
    app.use(ElementPlus, { locale: zhCn })
  }
}