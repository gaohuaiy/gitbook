import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "开发随笔",
  description: "day day study,day day up!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Java', link: '/markdown-examples' },
      { text: 'VUE', link: '/web/安装web开发环境' },
      { text: 'Oracle', link: '/markdown-examples' },
      { text: 'Tools', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '安装web开发环境', link: '/web/安装web开发环境' },
          { text: '安装java开发环境', link: '/java/an-zhuang-java-kai-fa-huan-jing' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gaohuaiy' }
    ]
  }
})
