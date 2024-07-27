import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Horse-UI",
  description: "just enjoy it",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
