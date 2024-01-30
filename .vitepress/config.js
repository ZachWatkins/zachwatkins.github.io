import { defineConfig } from 'vitepress'
import pkg from '../package.json'

const CONFIG = {
  lang: 'en-US',
  title: 'Zachary Watkins',
  titleTemplate: ':title - Zachary Watkins',
  description:
    'A blog website with articles and tutorials about JavaScript, PHP, WordPress, Laravel, DevOps, hosting, and anything related to web technology.',
  lastUpdated: true,
  head: [
    ['meta', { name: 'author', content: 'Zachary K. Watkins' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'meta',
      {
        name: 'keywords',
        content:
          'zachary watkins, zach watkins, web developer, full stack developer, software engineer, javascript, php, wordpress, laravel, devops, web technology',
      },
    ],
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
    ['meta', { name: 'twitter:site', content: '@zachwatkinsv1' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    [
      'meta',
      {
        name: 'twitter:description',
        content:
          'A blog website with articles and tutorials about JavaScript, PHP, WordPress, Laravel, DevOps, hosting, and anything related to web technology.',
      },
    ],
    [
      'meta',
      {
        name: 'twitter:title',
        content: 'Zachary Watkins - Senior Full Stack Engineer',
      },
    ],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://zacharywatkins.com/android-chrome-192x192.png',
      },
    ],
    [
      'meta',
      {
        name: 'robots',
        content: 'index,follow',
      },
    ],
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
      { text: 'Presentations', link: '/presentations/' },
    ],
    footerNav: [
      { text: 'Articles', link: '/articles/' },
      { text: 'Career', link: '/career/' },
      { text: 'Portfolio', link: '/portfolio/' },
      { text: 'Presentations', link: '/presentations/' },
      { text: 'Resources', link: '/resources/' },
      { text: 'Contact', link: '/contact/' },
      { text: 'Privacy Policy', link: '/privacy/' },
      {
        text: `View Source`,
        link: 'https://github.com/zachwatkins/zachwatkins.github.io',
        target: '_blank',
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zachwatkins/' },
      { icon: 'x', link: 'https://x.com/zachwatkinsv1' },
      {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/zacharykwatkins/',
      },
      { icon: 'email', link: 'mailto:zach@zachwatkins.dev' },
    ],
  },
  sitemap: {
    hostname: 'https://zacharywatkins.com',
  },
  rewrites: {
    'articles/tags/:tag.md': 'articles/tags/:tag/index.md',
    'articles/tags.md': 'articles/tags/index.md',
  },
}

CONFIG.transformPageData = function (pageData) {
  const canonicalUrl =
    CONFIG.sitemap.hostname +
    `/${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '.html')

  const isSingleArticleRoute =
    pageData.relativePath.startsWith('articles/') &&
    !pageData.relativePath.startsWith('articles/index.md') &&
    !pageData.relativePath.startsWith('articles/tags/')

  const ogType = isSingleArticleRoute ? 'article' : 'website'
  const ogImage = `${CONFIG.sitemap.hostname}/${pageData.frontmatter.image ?? 'android-chrome-192x192.png'}`

  pageData.frontmatter.head ??= []
  pageData.frontmatter.head.push(
    ['link', { rel: 'canonical', href: canonicalUrl }],
    ['meta', { property: 'og:url', content: canonicalUrl }],
    ['meta', { property: 'og:site_name', content: CONFIG.title }],
    ['meta', { property: 'og:title', content: pageData.frontmatter.title }],
    [
      'meta',
      { property: 'og:description', content: pageData.frontmatter.description },
    ],
    ['meta', { property: 'og:type', content: ogType }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:updated_time', content: pageData.lastUpdated }],
    ['meta', { property: 'og:locale', content: CONFIG.lang }],
  )

  if (isSingleArticleRoute) {
    pageData.frontmatter.head.push(
      [
        'meta',
        { property: 'article:author', content: CONFIG.themeConfig.author },
      ],
      [
        'meta',
        {
          property: 'article:tag',
          content: pageData.frontmatter.tags ?? pageData.frontmatter.tag,
        },
      ],
      [
        'meta',
        {
          property: 'article:published_time',
          content: pageData.frontmatter.date,
        },
      ],
      [
        'meta',
        {
          property: 'article:modified_time',
          content: pageData.lastUpdated,
        },
      ],
    )
  }
}

// https://vitepress.dev/reference/site-config
export default defineConfig(CONFIG)
