module.exports = {
  base: '',
  locales: {
    // 键名是该语言所属的子路径    <img src="./assets/wechat.jpg" width="140" />| <img src="./assets/alipay.jpg" width="140" />
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: 'Travis Blog',
      description: '陶启航的博客'
    }
  },
  plugins: [
    '@vuepress/back-to-top'
  ],
  themeConfig: {
    locales: {
      '/': {
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
          { text: '前端', link: '/zh/guide/', ariaLabel: '指南' },
          { text: '后端', link: '/zh/resource/', ariaLabel: '资源' },
          { text: 'Github', link: 'https://github.com/travis-green' },
          { text: '微信社区', link: 'https://developers.weixin.qq.com/community/personal/oCJUsw0kGA9yI6HZLQmlfwr5XKKA' },
          { text: '支付宝社区', link: 'https://forum.alipay.com/developer/1100222' }
        ],
        sidebar: {
          '/zh/guide/': [
            '',
            'designpatterns',
            'wechatminimechanism',
            'plugin',
            'jsDom',
            'proxy',
          ],
          '/zh/resource/': [
            '',
            'server',
            'sql',
            'http2'
          ],
        }
      }
    }
  },

}


    // ['qrcode', {
    //   // "/" and "/zh/" correspond to the path set by locales
    //   labelText: {
    //     "/": "二维码"
    //   },
    //   size: 'small',
    //   channel: true
    // }]

// { text: '个人网站', link: 'https://forum.alipay.com/developer/1100222333' },
// { text: '微信社区', link: 'https://developers.weixin.qq.com/community/personal/oCJUsw0kGA9yI6HZLQmlfwr5XKKA' },
// { text: '支付宝社区', link: 'https://forum.alipay.com/developer/1100222' }
// '/': {
//   selectText: 'Languages',
//   label: 'English',
//   ariaLabel: 'Languages',
//   editLinkText: 'Edit this page on GitHub',
//   serviceWorker: {
//     updatePopup: {
//       message: "New content is available.",
//       buttonText: "Refresh"
//     }
//   },
//   algolia: {},
//   nav: [
//     { text: 'Guide', link: '/guide/', ariaLabel: 'Guide' },
//     { text: 'Resource', link: '/resource/', ariaLabel: 'Resource' },
//     { text: 'Github', link: 'https://github.com/openHacking/vuepress-template' }
//   ],
//   sidebar: {
//     '/guide/': [
//       '',
//       'theme',
//       'plugin'
//     ],
//     '/resource/': [],
//   }
// },