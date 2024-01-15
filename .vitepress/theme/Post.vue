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
        <dt
          v-if="data?.tags?.length"
          class="inline-block mr-2"
          >Posted in:</dt
        >
        <dd
          v-if="data?.tags?.length"
          class="inline-block"
        >
          <ul class="flex justify-center">
            <li
              v-for="(tag, i) in data.tags"
              :key="tag"
            >
              {{ i > 0 ? ', ' : '' }}
              {{ tag }}
            </li>
          </ul>
        </dd>
      </dl>
    </header>
    <Content />
    <footer>
      <Author />
      <div class="flex">
        <div
          v-if="nextPost"
          class="w-1/2 order-last p-6"
        >
          <h2 class="m-0 leading-5 mb-4"> Next Article </h2>
          <div class="leading-7">
            <a :href="nextPost.url">{{ nextPost.title }}</a>
          </div>
        </div>
        <div
          v-if="prevPost"
          class="w-1/2 border-r-2 p-6"
        >
          <h2 class="m-0 leading-5 mb-4"> Previous Article </h2>
          <div class="leading-7">
            <a :href="prevPost.url">{{ prevPost.title }}</a>
          </div>
        </div>
      </div>
      <div class="mt-6">
        <a href="/articles/">← View all articles</a>
      </div>
    </footer>
  </article>
</template>
