<script setup>
import { useData } from 'vitepress'
// https://vitepress.dev/reference/runtime-api#usedata
const { page, site, theme, frontmatter } = useData()
</script>

<template>
  <header class="p-1 border-b-4 border-b-black">
    <div class="max-w-screen-xl m-auto flex items-center">
      <div class="p-1 m-4 mt-0 mb-0 font-bold text-4xl flex-grow">
        {{ site.title }}
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
    class="m-auto max-w-screen-xl"
  >
    Oh no!
  </main>
  <main
    v-else-if="frontmatter.layout === 'home'"
    class="pl-5 pr-5 m-auto max-w-screen-xl"
  >
    <div
      ><strong>{{ frontmatter.hero.name }}</strong>
      {{ frontmatter.hero.text }}</div
    >
    <p>
      {{ frontmatter.hero.tagline }}
    </p>
    <p>
      <a
        v-for="action in frontmatter.hero.actions"
        :key="action.text"
        :href="action.link"
        :class="`button ${action.theme}`"
      >
        {{ action.text }}
      </a>
    </p>
  </main>
  <main
    v-else
    class="pl-5 pr-5 m-auto max-w-screen-xl"
  >
    <Content />
  </main>
  <footer class="p-1 border-t-4 border-t-black">
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
        &copy; {{ theme.date.copyrightYears }} {{ theme.author }}
      </div>
    </div>
  </footer>
</template>
