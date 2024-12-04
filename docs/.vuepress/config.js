module.exports = {
  title: "chenchengcai", // 网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。
  description: "chenchengcai的vuepress博客网站", // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。、
  themeConfig: {
    // logo: "/assets/add.png",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "External",
        link: "https://google.com",
        target: "_self",
        rel: "",
      },
      { text: "External", link: "https://google.com" },
      {
        text: "Languages",
        ariaLabel: "Language Menu",
        items: [
          { text: "Chinese", link: "/language/chinese/" },
          { text: "Japanese", link: "/language/japanese/" },
        ],
      },
    ],
    sidebar: [
      {
        title: "vue", // 必要的
        children: [
          { title: "javascript", path: "/vue/Javascript" },
          { title: "面试题", path: "/vue/面试题" },
        ],
      },
      {
        title: "react",
        children: [
          /* ... */
        ],
        initialOpenGroupIndex: -1, // 可选的, 默认值是 0
      },
    ],
  },
};
