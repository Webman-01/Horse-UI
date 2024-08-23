import { defineConfig } from "vitepress";
export default defineConfig({
  title: "Horse-UI",
  base: "/Horse-ui-docs/",
  description: "just enjoy it",
  head: [
    ["link", { rel: "icon", href: `/Horse-ui-docs/icons_Horse.svg` }],
  ],
  
  themeConfig: {
    logo:'/icons_Horse.svg',
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/installation", activeMatch: "/guide/" },
      {
        text: "Components",
        link: "/component/icon",
        activeMatch: "/component/",
      },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          items: [
            //注意这里的link必须与文件名匹配
            { text: "Install", link: "/guide/installation" },
            { text: "Getting Started", link: "/guide/getStarted" },
          ],
        },
      ],
      "/component/": [
        {
          text: "Components",
          items: [
            { text: "Icon", link: "/component/icon" },
            { text: "Tooltip", link: "/component/tooltip" },
            { text: "Button", link: "/component/button" },
            { text: "Checkbox", link: "/component/checkbox" },
            { text: "Tree", link: "/component/tree" },
            { text: "Input", link: "/component/input" },
            { text: "Form", link: "/component/form" },
            { text: "Upload", link: "/component/upload" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/Webman-01/Horse-UI" },
    ],
    footer: {
      message: '基于 MIT 许可发布',
      copyright: '版权所有 @MMZ ',
    }
  },
});
