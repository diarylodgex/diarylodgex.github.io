import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 基础路径
  base: "/",
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }]
    ],
  title: "晓磊日记屋",
  description: "学习记录",
  outDir: "dist", 
  srcDir: "src", 
  themeConfig: {
    logo:"/images/xiaolei.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
    ],

    sidebar: [
      {
        text: 'Nginx',
        items: [
          { text: 'Nginx', link: '/nginx' },
        ]
      },
      {
        text:'Node.js',
        items:[
          { text: 'Node.js', link: '/node' },
        ]
      },
      {
        text:"Electron",
        items:[
          { text: 'Electron 基本信息', link: '/electron' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://diarylodgex.github.io' }
    ],
    lastUpdatedText: "最近更新时间",
    docFooter: { prev: '上一篇', next: '下一篇' }
  },
  // 最新更新时间
  lastUpdated: true,
})
