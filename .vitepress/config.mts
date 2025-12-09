import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

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
        collapsed: true,
        items: [
          { text: 'Nginx', link: '/nginx' },
        ]
      },
      {
        text:'Node.js',
        collapsed: true,
        items:[
          { text: 'Node文档', link: '/node' },
        ]
      },
      {
        text:'Typescript',
        collapsed: true,
        items:[
          { text: 'Ts文档', link: '/tsdoc' },
          { text: 'Ts实际应用', link: '/typescript' },
        ]
      },
      {
        text:"Electron",
        collapsed: true,
        items:[
          { text: 'Electron 基本信息', link: '/electron' },
        ]
      },
      {
        text:'Git',
        collapsed: true,
        items:[
          { text: 'Git 提交规范', link: '/git' },
          { text: 'Git 常用命令', link: '/gitcommand' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://diarylodgex.github.io' }
    ],
    lastUpdatedText: "最近更新时间",
    docFooter: { prev: '上一篇', next: '下一篇' },
    outline: {
      level: [2, 3],
      label: "页面导航",
    },
    returnToTopLabel: "回到顶部",
  },
  vite: {
    // https://cn.vitejs.dev/config/shared-options.html#publicdir
    publicDir: "../public", // 指定 public 目录路径
  },
  // 最新更新时间
  lastUpdated: true,
})
