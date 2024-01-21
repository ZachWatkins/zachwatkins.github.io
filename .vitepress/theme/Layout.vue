<script setup>
import { useData } from 'vitepress'
// https://vitepress.dev/reference/runtime-api#usedata
const { page, site, theme, frontmatter, params } = useData()
import Header from './Header.vue'
import Home from './Home.vue'
import Post from './Post.vue'
import Articles from './Articles.vue'
</script>

<template>
  <Header />
  <main
    v-if="'index.md' === page.filePath"
    class="home flex-grow flex flex-col justify-center pl-5 pr-5 max-w-screen-xl text-xl text-center ml-auto mr-auto"
  >
    <Home />
  </main>
  <main
    v-else
    class="pl-10 pr-5 pt-5 w-full m-auto"
  >
    <Articles v-if="'articles/index.md' === page.filePath" />
    <Articles
      v-else-if="page.filePath.startsWith('articles/tags') && params?.tag"
    />
    <Post
      v-else-if="
        page.filePath.startsWith('articles/') &&
        page.filePath !== 'articles/tags.md'
      "
    />
    <Content v-else-if="!page.isNotFound" />
    <div v-else> Oh no! </div>
  </main>
  <footer class="p-1">
    <div
      class="text-center max-w-screen-lg m-auto md:text-left"
    >
      <div class="text-lg md:text-xl">
        <a
          v-for="link in theme.footerNav"
          :key="link.text"
          :href="link.link"
          class="ml-2 mr-2 mt-1 mb-1 inline-block whitespace-nowrap text-lg md:ml-4 md:mr-4 md:mt-2 md:mb-2"
        >
          {{ link.text }}
        </a>
      </div>
      <div class="p-1 m-4 mt-0 mb-0 md:text-right">
        v{{ theme.version }} &copy; {{ theme.date.copyrightYears }}
        {{ theme.author }}. All rights reserved.
      </div>
    </div>
  </footer>
</template>
