module.exports = {
  head: [
    ['link', { rel: 'icon', href: './favicon.ico' }] // 如果你使用的是自定义文件名，请在此处更新文件名
  ],
  base: '/MyBlog/',
  theme: {
    outlineTitle: '在此页'
  },
  lang: "zh-CN",
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
        text: 'Html/CSS/JS', 
        link: '/html/' 
      },
      {
        text: "Vue",
        link: "/vue/",
      },
      {
        text: "React",
        link: "/react/",
      },
      {
        text: "其他",
        link: "/other/npm的使用",
      },
      {
        text: "墨香系列",
        link: "/vine/墨香待办",
      },
    ],
    sidebar: {
      '/html/': [
        {
        text: "基础",
        items: [
          { text: 'HTML', link: '/html/index' },
          { text: 'CSS', link: '/html/css/' },
        ],
        }
      ],
      '/other/': [
       {
        items: [
          {
            text: "掌握常用的 npm 命令：简化你的项目管理",
            link: '/other/npm的使用'
          },
          {
            text: "Nginx 了解正向代理和反向代理以及配置示例",
            link: '/other/Nginx的使用'
          }
        ]
       }
      ],
      '/vine/': [
        {
          text: "墨香系列",
          link: '/vine/墨香待办',
          items: [
            // { text: '需求文档', link: '/vine/墨香待办' }
          ],
        }
      ]
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索'
          }
        }
      }
    },
    footer: {
      message: '',
      copyright: 'Email: itdian666@163.com'
    }
  },
}