<script setup>
import { useData } from 'vitepress'
import Navigation from './Navigation.vue'
import Home from './Home.vue'
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
    <Footer
      :copyrightYears="theme.date.copyrightYears"
      :author="theme.author"
      :nav="theme.footerNav"
    />
  </div>
</template>
