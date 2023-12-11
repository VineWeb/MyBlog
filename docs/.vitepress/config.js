module.exports = {
    head: [
        ['link', { rel: 'icon', href: './favicon.ico' }] // 如果你使用的是自定义文件名，请在此处更新文件名
    ],
    base: '/MyBlog/',
    theme: {
        outlineTitle: '在此页'
    },
    lang: "zh-CN",
    title: '首页-VineCode',
    titleTemplate: 'VineCode',
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
        nav: [{
                text: '基础',
                link: '/basic/'
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
                text: "前端",
                link: "/other/npm的使用",
            },
            {
                text: "墨香系列",
                link: "/vine/墨香待办",
            },
        ],
        sidebar: {
            '/basic/': [{
                text: "基础",
                link: '/basic/',
                items: [
                    { text: 'HTML', link: '/basic/html/' },
                    { text: 'CSS', link: '/basic/css/' },
                    {
                        text: 'JAVASCRIPT',
                        link: '/basic/js/',
                        items: [
                            { text: '数据结构', link: '/basic/js/数据结构' },
                            { text: '事件', link: '/basic/js/事件' },
                            { text: 'js面向对象的三大特征', link: '/basic/js/js面向对象的三大特征' },
                            { text: '事件循环', link: '/basic/js/事件循环' },
                            { text: 'Promise', link: '/basic/js/Promise' },
                            { text: '闭包', link: '/basic/js/闭包' },
                            { text: '性能', link: '/basic/js/性能' },
                        ]
                    },
                ],
            }],
            '/vue/': [{
                text: "Vue简介",
                link: '/vue/',
                items: [
                    { text: 'Vue 基础', link: '/vue/base' },
                    { text: 'Vuex', link: '/vue/vuex' },
                    { text: 'Pinia', link: '/vue/pinia' },
                    { text: 'Vue 进阶', link: '/vue/advanced' },
                    { text: 'Vue 面试', link: '/vue/review' },
                ],
            }],
            '/react/': [{
                text: "React简介",
                link: '/react/',
                items: [
                    { text: 'React 基础', link: '/react/base' },
                    { text: 'React 进阶', link: '/react/advanced' },
                    { text: 'React 面试', link: '/react/review' },
                ],
            }],
            '/other/': [{
                items: [{
                        text: "掌握常用的 npm 命令：简化你的项目管理",
                        link: '/other/npm的使用'
                    },
                    {
                        text: "Nginx 了解正向代理和反向代理以及配置示例",
                        link: '/other/Nginx的使用'
                    },
                    {
                        text: "Git命令学习",
                        link: '/other/git命令学习'
                    },
                    {
                        text: "HTTP",
                        link: '/other/http/HTTP',
                        items: [{
                                text: "1. HTTP 协议基础",
                                link: '/other/http/HTTP'
                            },
                            {
                                text: "2. HTTP 状态码",
                                link: '/other/http/状态码'
                            },
                            {
                                text: "3. HTTP 请求方法",
                                link: '/other/http/请求方法'
                            },
                            {
                                text: "4. HTTP 请求头和响应头",
                                link: '/other/http/请求头和响应头'
                            },
                            {
                                text: "5. Cookie 和 Session、Localstroge",
                                link: '/other/http/Cookie和Session和Localstroge'
                            },
                            {
                                text: "6. HTTP缓存机制",
                                link: '/other/http/缓存机制'
                            },
                            {
                                text: "7. HTTPS",
                                link: '/other/http/HTTPS'
                            },
                            {
                                text: "8. 跨域资源共享(CORS)",
                                link: '/other/http/跨域资源共享(CORS)'
                            },
                            {
                                text: "9. 面试题",
                                link: '/other/http/interview'
                            },
                        ]
                    },
                    {
                        text: "构建工具",
                        link: '/other/build/',
                        items: [{
                                text: "Vite和Webpack",
                                link: '/other/build/index'
                            },
                            {
                                text: "Vite",
                                link: '/other/build/vite'
                            },
                        ]
                    },
                ]
            }],
            '/vine/': [{
                text: "墨香系列",
                link: '/vine/墨香待办',
                items: [
                    // { text: '需求文档', link: '/vine/墨香待办' }
                ],
            }]
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