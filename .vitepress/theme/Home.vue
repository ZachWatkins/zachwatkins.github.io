<script setup>
import { useData } from 'vitepress'
import { data as articles } from './articles.data.js'
const { frontmatter } = useData()
</script>

<template>
  <h1 class="leading-10 text-center md:text-6xl mb-8 md:leading-tight"
    ><span class="font-extrabold"
      >{{ frontmatter.hero.title }}<br class="hidden md:block" /></span
    ><span class="ml-2">{{ frontmatter.hero.subtitle }}</span></h1
  >
  <div class="md:text-left font-family-heading text-2xl">
    <a
      class="mb-8 md:mb-0 md:mr-16 overflow-clip md:float-left md:flow-circle"
      :href="frontmatter.hero.photoLink"
    >
      <img
        :src="frontmatter.hero.photo"
        :alt="frontmatter.hero.photoAlt"
      />
    </a>
    <p class="w-full">
      {{ frontmatter.hero.tagline }}
    </p>
    <p>
      Check out my <a href="/articles/">articles</a> on JavaScript, PHP,
      Laravel, WordPress, DevOps, and
      <a href="/articles/tags/"> other subjects</a>.
    </p>
    <p v-if="articles.length > 0"
      >I published
      <a :href="articles[0].url">{{ articles[0].title }}</a>
      on
      <time :datetime="articles[0].date.time">{{
        articles[0].date.string
      }}</time
      >.
    </p>
    <p>
      I'm also building a crossword puzzle tool at
      <a
        href="https://ohmyword.net"
        target="_blank"
        >ohmyword.net</a
      >.
    </p>
  </div>
  <Content />
</template>
