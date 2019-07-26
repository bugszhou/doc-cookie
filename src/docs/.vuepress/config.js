module.exports = {
  host: 'localhost',
  base: '/cookie/',
  port: 8666,
  title: '必知必会之cookie和session',
  description: '每个程序员都应该知道的cookie和session',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    nav: [],
    sidebar: [
      {
        title: '理解cookie',
        collapsable: false,
        children: [
          'chapter1/',
          'chapter1/bg',
          'chapter1/cookie',
          'chapter1/principle',
        ],
      },
      {
        title: '理解session',
        collapsable: false,
        children: [
          'session/',
          'session/what',
          'session/principle',
        ],
      }
    ],
  },
};
