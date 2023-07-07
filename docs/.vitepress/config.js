module.exports = {
  head: [
    ['link', { rel: 'icon', href: './favicon.ico' }] // 如果你使用的是自定义文件名，请在此处更新文件名
  ],
  base: '/MyBlog/',
  theme: {
    outlineTitle: '在此页'
  },
  lang: "zh-CN",
  host: '0.0.0.0',
  port: '3002',
  title: '欢迎使用VineCode的文档',
  titleTemplate: '欢迎使用VineCode的文档',
  description: '前端文档，不止前端文档。',
  lastUpdated: true,
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ITdian/MyBlog' },
    ],
    lastUpdatedText: '最后更新时间',
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
    },
    footer: {
      message: '念念不忘，必有回响',
      copyright: 'Email: itdian.666@163.com'
    }
  },
}