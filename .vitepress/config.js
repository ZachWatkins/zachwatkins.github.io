import { defineConfig } from 'vitepress'
import pkg from '../package.json'

const googleAnalytics = !process.env.GA_TAG_ID
  ? []
  : [
      [
        'script',
        {
          async: true,
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TAG_ID}`,
        },
      ],
      [
        'script',
        {},
        [
          `window.dataLayer = window.dataLayer || [];`,
          `function gtag(){dataLayer.push(arguments);}`,
          `gtag('js', new Date());`,
          `gtag('config', '${process.env.GA_TAG_ID}');`,
        ].join(''),
      ],
    ]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'Zachary Watkins',
  titleTemplate: ':title - Zach Watkins',
  description: 'Full stack developer with an art degree.',
  lastUpdated: true,
  head: [
    ['meta', { name: 'author', content: 'Zachary Watkins' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'twitter:site', content: '@zachwatkinsv1' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://zachwatkins.github.io/android-chrome-192x192.png',
      },
    ],
    ...googleAnalytics,
  ],
  themeConfig: {
    search: {
      provider: 'local',
    },
    version: pkg.version,
    author: 'Zachary Watkins',
    gravatar:
      '049719b54832b7e452d5ba7f791da76c3eb1952cf234e58f25eea074d5976212',
    twitter: '@zachwatkinsv1',
    linkedin: 'zacharykwatkins',
    date: {
      copyrightYears:
        2024 === new Date().getFullYear()
          ? '2024'
          : `2024 - ${new Date().getFullYear()}`,
    },
    nav: [
      { text: 'Articles', link: '/articles/' },
      { text: 'Career', link: '/career/' },
      { text: 'Portfolio', link: '/portfolio/' },
      { text: 'Contact', link: '/contact/' },
    ],
    footerNav: [
      { text: 'Articles', link: '/articles/' },
      { text: 'Portfolio', link: '/portfolio/' },
      { text: 'Resources', link: '/resources/' },
      { text: 'Contact', link: '/contact/' },
      { text: 'Privacy Policy', link: '/privacy/' },
      {
        text: `View Source`,
        link: 'https://github.com/zachwatkins/zachwatkins.github.io',
        target: '_blank',
      },
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zachwatkins/' },
      { icon: 'x', link: 'https://x.com/zachwatkinsv1' },
      {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/zacharykwatkins/',
      },
      { icon: 'email', link: 'mailto:watkinza@gmail.com' },
    ],
  },
  sitemap: {
    hostname: 'https://zacharywatkins.com',
  },
  rewrites: {
    'articles/tags/:tag.md': 'articles/tags/:tag/index.md',
    'articles/tags.md': 'articles/tags/index.md',
  },
})
