// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LX Music',
  tagline: '一个免费&开源的音乐查找工具',
  url: 'https://lxmusic.toside.cn',
  baseUrl: '/',
  // baseUrl: '/lx-music-doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lyswhut', // Usually your GitHub org/user name.
  projectName: 'lx-music-doc', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
    localeConfigs: {
      'zh-Hans': {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-Hans',
        calendar: 'gregory',
      }
    }
  },

  future: {
    experimental_faster: true,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/lyswhut/lx-music-doc/tree/master/',
          // showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'keywords', content: 'LX Music, 洛雪音乐助手, lx-music, lx-music-desktop, lx-music-mobile'}],
      navbar: {
        title: 'LX Music',
        logo: {
          alt: 'LX Music Logo',
          src: 'img/logo.svg',
        },
        items: [
          { type: 'doc', docId: 'desktop/index', position: 'left', label: '桌面版文档' },
          { type: 'doc', docId: 'mobile/index', position: 'left', label: '移动版文档' },
          // { to: '/desktop', label: '桌面版文档', position: 'left'},
          // { to: '/mobile', label: '移动版文档', position: 'left'},
          { to: '/download', label: '软件下载', position: 'left'},
          { to: '/report', label: '问题反馈', position: 'left'},
          {
            href: 'https://github.com/lyswhut/lx-music-desktop',
            label: '桌面版 GitHub',
            position: 'right',
          },
          {
            href: 'https://github.com/lyswhut/lx-music-mobile',
            label: '移动版 GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} LX Music, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'NWP2U7O7XE',
  
        // Public API key: it is safe to commit it
        apiKey: 'd74d2766346af31fdc6c6f918b011c17',
  
        indexName: 'lyswhut',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',
  
        // // Optional: Algolia search parameters
        // searchParameters: {},
  
        // // Optional: path for search page that enabled by default (`false` to disable it)
        // searchPagePath: 'search',
  
        //... other Algolia params
      },
    }),
};

module.exports = config;
