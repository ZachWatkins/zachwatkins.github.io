import { defineConfig } from 'vitepress'
import pkg from '../package.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'Zachary Watkins',
  titleTemplate: ':title - Zach Watkins',
  description: 'Full stack developer with an art degree.',
  head: [
    ['meta', { name: 'author', content: 'Zachary K. Watkins' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Source+Sans+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,900;1,8..60,400;1,8..60,600;1,8..60,900&display=swap',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,900;1,8..60,400;1,8..60,600;1,8..60,900&display=swap',
      },
    ],
    ['meta', { name: 'twitter:site', content: '@zachtypedit' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://zachwatkins.github.io/android-chrome-192x192.png',
      },
    ],
  ],
  themeConfig: {
    version: pkg.version,
    author: 'Zachary Watkins',
    authorBio:
      'Zachary Watkins is the lead web application developer for the Communications division at Texas A&M Transportation Institute in College Station, Texas. He spends most of his time working closely with researchers to create web-based tools, visualize data, and scope technical work for his team. He also has many side projects, including one for crossword puzzle enthusiasts.',
    gravatar:
      '049719b54832b7e452d5ba7f791da76c3eb1952cf234e58f25eea074d5976212',
    twitter: '@zachtypedit',
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
      { text: 'Resources', link: '/resources/' },
      { text: 'Contact', link: '/contact/' },
    ],
    footerNav: [
      { text: 'Articles', link: '/articles/' },
      { text: 'Portfolio', link: '/portfolio/' },
      { text: 'Resources', link: '/resources/' },
      { text: 'Contact', link: '/contact/' },
      { text: 'Privacy Policy', link: '/privacy/' },
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
      { icon: 'x', link: 'https://x.com/zachtypedit' },
      {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/zacharykwatkins/',
      },
      { icon: 'email', link: 'mailto:watkinza@gmail.com' },
    ],
  },
})
