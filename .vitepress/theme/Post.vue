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
      <h1>
        {{ data.title }}
      </h1>
      <dl>
        <dt class="sr-only">Published on</dt>
        <dd>
          <time :datetime="new Date(date.time).toISOString()">{{
            date.string
          }}</time>
        </dd>
        <dt class="sr-only">Tags</dt>
        <dd>
          <ul
            v-if="data.tags && data.tags.length > 0"
            class="flex justify-center"
          >
            <li
              v-for="tag in data.tags"
              :key="tag"
              class="mr-2"
            >
              {{ tag }}
            </li>
          </ul>
        </dd>
      </dl>
    </header>
    <Content />
    <footer>
      <Author />
      <div v-if="nextPost">
        <h2 class="mb-0"> Next Article </h2>
        <div>
          <a :href="nextPost.url">{{ nextPost.title }}</a>
        </div>
      </div>
      <div v-if="prevPost">
        <h2 class="mb-0"> Previous Article </h2>
        <div class="link">
          <a :href="prevPost.url">{{ prevPost.title }}</a>
        </div>
      </div>
      <div class="mt-6">
        <a href="/articles/">← View all articles</a>
      </div>
    </footer>
  </article>
</template>
