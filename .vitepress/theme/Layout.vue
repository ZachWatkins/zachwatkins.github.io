<script setup>
import { useData } from 'vitepress'
// https://vitepress.dev/reference/runtime-api#usedata
const { page, site, theme, frontmatter } = useData()
import Home from './Home.vue'
import Post from './Post.vue'
import Posts from './Posts.vue'
</script>

<template>
  <header class="p-1">
    <div class="max-w-screen-xl m-auto flex items-center">
      <div class="p-1 m-4 mt-0 mb-0 font-bold text-4xl flex-grow">
        <a href="/">{{ site.title }}</a>
      </div>
      <nav class="text-xl flex-initial text-right font-bold flex h-full">
        <a
          v-for="(link, i) in theme.nav"
          :key="link.text"
          :href="link.link"
          class="p-1 m-4"
        >
          {{ link.text }}
        </a>
      </nav>
    </div>
  </header>
  <main
    v-if="page.isNotFound"
    class="pl-5 pr-5 m-auto max-w-screen-xl text-center"
  >
    Oh no!
  </main>
  <main
    v-else-if="'home' === frontmatter.layout"
    class="home pl-5 pr-5 m-auto max-w-screen-xl text-xl text-center"
  >
    <Home />
  </main>
  <main
    v-else-if="'posts' === frontmatter.layout"
    class="posts pl-10 pr-5 m-auto max-w-screen-xl"
  >
    <Posts />
  </main>
  <main
    v-else-if="'page' === frontmatter.layout"
    class="pl-10 pr-5 m-auto max-w-screen-xl"
  >
    <Content />
  </main>
  <main
    v-else
    class="pl-10 pr-5 m-auto max-w-screen-xl"
  >
    <Post />
  </main>
  <footer class="p-1">
    <div class="max-w-screen-xl m-auto flex items-center h-full">
      <div class="flex-grow">
        <a
          v-for="link in theme.footerNav"
          :key="link.text"
          :href="link.link"
          class="p-1 m-4"
        >
          {{ link.text }}
        </a>
      </div>
      <div class="flex-initial p-1 m-4 mt-0 mb-0">
        <a
          href="https://github.com/zachwatkins/zachwatkins.github.io"
          target="_blank"
          >v{{ theme.version }}</a
        >
        &copy; {{ theme.date.copyrightYears }}
        {{ theme.author }}
      </div>
    </div>
  </footer>
</template>
