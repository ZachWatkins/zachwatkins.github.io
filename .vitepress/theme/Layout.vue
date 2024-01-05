<script setup>
import { useData } from 'vitepress'
import Navigation from './Navigation.vue'
import Footer from './Footer.vue'
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
    <Footer
      :copyrightYears="theme.date.copyrightYears"
      :author="theme.author"
      :nav="theme.footerNav"
    />
  </div>
</template>
