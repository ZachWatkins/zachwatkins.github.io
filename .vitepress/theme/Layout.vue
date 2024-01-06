<script setup>
import { useData } from 'vitepress'
import Home from './Home.vue'
// https://vitepress.dev/reference/runtime-api#usedata
const { page, site, theme, frontmatter } = useData()
</script>

<template>
  <div>
    <header class="bg-js-yellow text-black">
      <h1>{{ site.title }}</h1>
      <p>{{ site.description }}</p>
    </header>
    <nav>
      <span v-for="(link, i) in theme.nav">
        <span v-if="i > 0"> | </span>
        <a
          :key="link.text"
          :href="link.link"
        >
          {{ link.text }}
        </a>
      </span>
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
  </div>
</template>
