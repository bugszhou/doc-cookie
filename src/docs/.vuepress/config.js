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
        title: 'demo',
        collapsable: false,
        children: [
          'chapter1/',
        ],
      }
    ],
  },
};
