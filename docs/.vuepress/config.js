module.exports = {
  base: '',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/zh/': {
      lang: 'zh-CN',
      title: 'Travis 个人博客',
      description: '陶启航的博客'
    },
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'Travis Blog',
      description: 'Travis Blog'
    }
  },
  plugins: [
    '@vuepress/back-to-top',
    ['qrcode',{
      // "/" and "/zh/" correspond to the path set by locales
        labelText: {
          "/": "QRCode", 
          "/zh/": "二维码",
        },
        size:'small',
        channel:true
    }]
  ],
  themeConfig: {

    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [
          { text: 'Guide', link: '/guide/', ariaLabel: 'Guide' },
          { text: 'Resource', link: '/resource/', ariaLabel: 'Resource' },
					{ text: 'Github', link: 'https://github.com/openHacking/vuepress-template' }
        ],
        sidebar: {
          '/guide/': [
            '',
            'theme',
            'plugin'
          ],
          '/resource/': [],
        }
      },
      '/zh/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [
          { text: '指南', link: '/zh/guide/', ariaLabel: '指南' },
          { text: '资源', link: '/zh/resource/', ariaLabel: '资源' },
					{ text: 'Github', link: 'https://github.com/openHacking/vuepress-template' }
        ],
        sidebar: {
          '/zh/guide/': [
            '',
            'theme',
            'plugin'
          ],
          '/zh/resource/': [],
        }
      }
    }
  },
  
}