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
                link: "/web/npm的使用",
            },
            {
                text: "面试",
                link: "/interview/",
            },
            {
                text: "其他",
                link: "/other/墨香待办",
            },
        ],
        sidebar: {
            
            '/basic/': [{
                text: "基础",
                link: '/basic/',
                items: [
                    { text: 'HTML', link: '/basic/html/' },
                    { text: 'CSS', link: '/basic/css/', items: [
                        { text: 'Flex', link: '/basic/css/flex' },
                    ] },
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
                    {
                        text: 'Vue 基础', link: '/vue/base', items: [
                            { text: 'Transition', link: '/vue/base/transition' },
                            { text: 'Teleport', link: '/vue/base/teleport' },
                            { text: 'Suspense', link: '/vue/base/suspense' },
                        ]
                    },
                    { text: 'Vuex', link: '/vue/vuex' },
                    { text: 'Pinia', link: '/vue/pinia' },
                    { text: 'Vue-router', link: '/vue/vue-router' },
                    { text: 'Vue 进阶', link: '/vue/advanced', items: [
                        { text: '菜单权限', link: '/vue/advanced/menu' },
                    ]},
                    { text: 'Vue 面试', link: '/vue/review' },
                    { text: '实战', link: '/vue/usual' },
                ],
            }],
            '/react/': [{
                text: "React简介",
                link: '/react/',
                items: [
                    { text: 'React 基础', link: '/react/base' },
                    { text: 'React 进阶', link: '/react/advanced' },
                    { text: 'React 面试', link: '/react/review' },
                    { text: 'react-router-dom', link: '/react/react_router_dom' },
                ],
            }],
            '/web/': [{
                items: [
                    {
                        text: "掌握常用的 npm 命令：简化你的项目管理",
                        link: '/web/npm的使用'
                    },
                    {
                        text: "Nginx 了解正向代理和反向代理以及配置示例",
                        link: '/web/Nginx的使用'
                    },
                    {
                        text: "Git命令学习",
                        link: '/web/git命令学习'
                    },
                    {
                        text: 'husky',
                        link: '/web/husky'
                    },
                    {
                        text: 'Prettier',
                        link: '/web/prettier'
                    },
                    {
                        text: "Node",
                        link: '/web/node/',
                        items: [
                            {
                                text: "Node简介",
                                link: '/web/node/node的介绍'
                            },
                            {
                                text: "Koa",
                                link: '/web/node/koa'
                            },
                            {
                                text: "Express",
                                link: '/web/node/express'
                            },
                        ]
                    },
                    {
                        text: "TypeScript",
                        link: '/web/ts/',
                        items: [
                            {
                                text: "TypeScript简介",
                                link: '/web/ts/index'
                            },
                        ]
                    },
                    {
                        text: "HTTP",
                        link: '/web/http/HTTP',
                        items: [{
                                text: "1. HTTP 协议基础",
                                link: '/web/http/HTTP'
                            },
                            {
                                text: "2. HTTP 状态码",
                                link: '/web/http/状态码'
                            },
                            {
                                text: "3. HTTP 请求方法",
                                link: '/web/http/请求方法'
                            },
                            {
                                text: "4. HTTP 请求头和响应头",
                                link: '/web/http/请求头和响应头'
                            },
                            {
                                text: "5. Cookie 和 Session、Localstroge",
                                link: '/web/http/Cookie和Session和Localstroge'
                            },
                            {
                                text: "6. HTTP缓存机制",
                                link: '/web/http/缓存机制'
                            },
                            {
                                text: "7. HTTPS",
                                link: '/web/http/HTTPS'
                            },
                            {
                                text: "8. 跨域资源共享(CORS)",
                                link: '/web/http/跨域资源共享(CORS)'
                            },
                            {
                                text: "9. 面试题",
                                link: '/web/http/interview'
                            },
                        ]
                    },
                    {
                        text: "构建工具",
                        link: '/web/build/',
                        items: [{
                                text: "Vite和Webpack",
                                link: '/web/build/index'
                            },
                            {
                                text: "Vite",
                                link: '/web/build/vite'
                            },
                        ]
                    },
                   
                ]
            }],
            '/interview/': [{
                text: "面试",
                link: '/interview/',
                items: [
                    { text: '常见面试题', link: '/interview/index' },
                    { text: '学习计划', link: '/interview/前端学习' },
                    { text: '项目解决方案', link: '/interview/project' },
                    { text: '面试技巧', link: '/interview/still' },
                    { text: 'React', link: '/interview/react' },
                    { text: 'Vue', link: '/interview/vue' },
                    { text: 'Client', link: '/interview/client' },
                    { text: 'Server', link: '/interview/server' },
                ]
            }],
            '/other/': [
                {
                    text: "墨香待办需求文档",
                    link: '/other/墨香待办',
                    items: [],
                },
                {
                    text: "涨跌幅度",
                    link: '/other/涨跌幅度',
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