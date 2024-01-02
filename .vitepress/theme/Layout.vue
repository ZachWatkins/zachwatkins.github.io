<script setup>
import { useData } from 'vitepress'
import Navigation from './Navigation.vue'
// https://vitepress.dev/reference/runtime-api#usedata
const { page, site, theme, frontmatter } = useData()
</script>

<template>
  <div>
    <header>
      <h1>{{ site.title }}</h1>
      <p>{{ site.description }}</p>
    </header>
    <Navigation />
    <main v-if="page.isNotFound"> Oh no! </main>
    <main v-else>
      <div v-if="frontmatter.home">
        <ul>
          <li><a href="/markdown-examples.html">Markdown Examples</a></li>
          <li><a href="/api-examples.html">API Examples</a></li>
        </ul>
        <Content />
      </div>
      <div v-else>
        <Content />
      </div>
    </main>
    <hr />
    <footer>
      <a href="/">{{ site.title }}</a> &copy; {{ theme.date.copyrightYears }}
      {{ theme.author }}<br />
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
