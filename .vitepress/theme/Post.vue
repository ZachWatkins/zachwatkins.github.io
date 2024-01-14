<script setup>
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import Author from './Author.vue'
import { data as posts } from './posts.data.js'

const { frontmatter: data } = useData()

const route = useRoute()

function findCurrentIndex() {
  return posts.findIndex((p) => p.url === route.path)
}

const date = computed(() => posts[findCurrentIndex()].date)
const nextPost = computed(() => posts[findCurrentIndex() - 1])
const prevPost = computed(() => posts[findCurrentIndex() + 1])
</script>

<template>
  <article class="pl-10 pr-5 m-auto max-w-screen-xl">
    <header class="text-center">
      <dl>
        <dt class="sr-only">Published on</dt>
        <dd>
          <time :datetime="new Date(date.time).toISOString()">{{
            date.string
          }}</time>
        </dd>
      </dl>
      <h1 class="font-extrabold">
        {{ data.title }}
      </h1>
    </header>

    <div>
      <Author />
      <main>
        <Content />
      </main>

      <footer>
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
          <a href="/">← Back to the blog</a>
        </div>
      </footer>
    </div>
  </article>
</template>
