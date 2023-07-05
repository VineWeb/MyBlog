module.exports = {
  base: '/MyBlog/',
  theme: {
    outlineTitle: '在此页'
  },
  lang: "zh-CN",
  host: '0.0.0.0',
  port: '3002',
  title: '欢迎使用VineCode的文档',
  description: '前端文档，不止前端文档。',
  lastUpdated: true,
  themeConfig: {
    outlineTitle: '本页面',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    nav: [
      {
        text: 'Html', 
        link: '/html/' 
      },
      {
        text: "CSS",
        link: "/css/",
        activeMatch: '/css/'
      },
      {
        text: "JS",
        link: "/js/",
      },
      {
        text: "Vue",
        link: "/vue/",
      },
      {
        text: "React",
        link: "/react/",
      },
    ],
    sidebar: {
      '/css/': [
        {
        text: "CSS",
        items: [
          { text: 'CSS A', link: '/css/' },
          { text: 'CSS B', link: '/css/index2' },
        ],
        }
      ]
    }
  },
}