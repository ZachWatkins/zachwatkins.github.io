<script setup>
import { useData } from 'vitepress'
// https://vitepress.dev/reference/runtime-api#usedata
const { page, theme } = useData()
import Header from './Header.vue'
import Home from './Home.vue'
import Post from './Post.vue'
import Articles from './Articles.vue'
</script>

<template>
  <Header />
  <main
    v-if="'index.md' === page.filePath"
    class="home pl-5 pr-5 max-w-screen-xl text-xl text-center m-auto"
  >
    <Home />
  </main>
  <main
    v-else
    class="pl-10 pr-5"
  >
    <Articles v-if="'articles/index.md' === page.filePath" />
    <Post v-else-if="page.filePath.startsWith('articles/')" />
    <Content v-else-if="!page.isNotFound" />
    <div v-else> Oh no! </div>
  </main>
  <footer class="p-1">
    <div class="max-w-screen-xl m-auto flex items-center h-full">
      <div class="flex-grow text-xl">
        <a
          v-for="link in theme.footerNav"
          :key="link.text"
          :href="link.link"
          class="p-1 m-4"
        >
          {{ link.text }}
        </a>
      </div>
      <div class="flex-initial p-1 m-4 mt-0 mb-0 text-right">
        &copy; {{ theme.date.copyrightYears }} {{ theme.author }}. All rights
        reserved.<br />
        <a
          href="https://github.com/zachwatkins/zachwatkins.github.io"
          target="_blank"
          >v{{ theme.version }}</a
        >
      </div>
    </div>
  </footer>
</template>
