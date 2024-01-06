<script setup>
import { useData } from 'vitepress'
import Home from './Home.vue'
// https://vitepress.dev/reference/runtime-api#usedata
const { page, site, theme, frontmatter } = useData()
</script>

<template>
  <header>
    <div class="max-w-screen-xl m-auto">
      <div class="font-bold text-4xl">
        {{ site.title }}
      </div>
      <span class="text-xl">{{ site.description }}</span>
    </div>
  </header>
  <nav>
    <div class="max-w-screen-xl m-auto text-xl">
      <a
        v-for="(link, i) in theme.nav"
        :key="link.text"
        :href="link.link"
      >
        {{ link.text }}
      </a>
    </div>
  </nav>
  <main v-if="page.isNotFound"> Oh no! </main>
  <main v-else-if="frontmatter.layout === 'home'">
    <Home
      :hero="frontmatter.hero"
      :features="frontmatter.features"
    />
  </main>
  <main v-else>
    <Content />
  </main>
  <hr />
  <footer>
    &copy; {{ theme.date.copyrightYears }} {{ theme.author }}<br />
    <a
      v-for="link in theme.footerNav"
      :key="link.text"
      :href="link.link"
    >
      {{ link.text }}
    </a>
  </footer>
</template>
