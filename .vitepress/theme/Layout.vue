<script setup>
import { useData } from 'vitepress'
// https://vitepress.dev/reference/runtime-api#usedata
const { page, site, theme, frontmatter, params } = useData()
import Header from './Header.vue'
import Home from './Home.vue'
import Article from './Article.vue'
import Articles from './Articles.vue'
</script>

<template>
  <Header />
  <main
    v-if="'index.md' === page.filePath"
    class="home flex-grow flex flex-col justify-center pl-5 pr-5 max-w-screen-xl text-xl text-center ml-auto mr-auto"
  >
  </main>
  <main class="pl-10 pr-5 pt-5 w-full m-auto flex-grow">
    <Home v-if="'index.md' === page.filePath" />
    <Articles v-if="'articles/index.md' === page.filePath" />
    <Articles
      v-else-if="page.filePath.startsWith('articles/tags') && params?.tag"
    />
    <Article
      v-else-if="
        page.filePath.startsWith('articles/') &&
        page.filePath !== 'articles/tags.md'
      "
    />
    <Content v-else-if="!page.isNotFound" />
    <div v-else> Oh no! </div>
  </main>
  <footer class="w-full p-4 text-center max-w-screen-lg m-auto md:text-left">
    <div class="text-lg md:text-xl">
      <a
        v-for="link in theme.footerNav"
        :key="link.text"
        :href="link.link"
        class="mr-5 mb-2 inline-block whitespace-nowrap text-lg"
      >
        {{ link.text }}
      </a>
    </div>
    <div class="md:text-right">
      v{{ theme.version }} &copy; {{ theme.date.copyrightYears }}
      {{ theme.author }}. All rights reserved.
    </div>
  </footer>
</template>
