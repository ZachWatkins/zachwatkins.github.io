<script setup>
import { useData } from 'vitepress'
// https://vitepress.dev/reference/runtime-api#usedata
const { page, site, theme, frontmatter } = useData()
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
    <h1 class="text-6xl mb-8 leading-tight"
      ><span class="font-extrabold">{{ frontmatter.hero.name }}<br /></span
      ><span class="">{{ frontmatter.hero.text }}</span></h1
    >
    <p class="text-2xl w-3/4 mb-8 ml-auto mr-auto">
      {{ frontmatter.hero.tagline }}
    </p>
    <p class="mb-8">
      <a
        v-for="(action, i) in frontmatter.hero.actions"
        :key="action.text"
        :href="action.link"
        :class="`hero-action-${i} p-2 pl-6 pr-6 m-2 text-2xl rounded-full`"
      >
        {{ action.text }}
      </a>
    </p>
    <Content />
  </main>
  <main
    v-else
    class="pl-10 pr-5 m-auto max-w-screen-xl"
  >
    <Content />
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
        v{{ theme.version }} &copy; {{ theme.date.copyrightYears }}
        {{ theme.author }}
      </div>
    </div>
  </footer>
</template>
