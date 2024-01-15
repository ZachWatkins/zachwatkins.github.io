<script setup>
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import Author from './Author.vue'
import { data as articles } from './articles.data.js'

const { frontmatter: data } = useData()

const route = useRoute()

function findCurrentIndex() {
  return articles.findIndex((p) => p.url === route.path)
}

const date = computed(() => articles[findCurrentIndex()].date)
const nextPost = computed(() => articles[findCurrentIndex() - 1])
const prevPost = computed(() => articles[findCurrentIndex() + 1])
</script>

<template>
  <article>
    <header class="text-center mb-4">
      <h1 class="font-extrabold">
        {{ data.title }}
      </h1>
      <dl>
        <dt class="sr-only">Published on</dt>
        <dd>
          <time :datetime="new Date(date.time).toISOString()">{{
            date.string
          }}</time>
        </dd>
      </dl>
    </header>
    <Content />
    <footer>
      <Author />
      <div v-if="nextPost">
        <h2> Next Article </h2>
        <div>
          <a :href="nextPost.url">{{ nextPost.title }}</a>
        </div>
      </div>
      <div v-if="prevPost">
        <h2> Previous Article </h2>
        <div class="link">
          <a :href="prevPost.url">{{ prevPost.title }}</a>
        </div>
      </div>
      <div>
        <a href="/articles/">← Back to the blog</a>
      </div>
    </footer>
  </article>
</template>
