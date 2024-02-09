<script setup>
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import Author from './Author.vue'
import { data as presentations } from './presentations.data.js'
import Share from './Share.vue'

const { page, frontmatter, lang, theme } = useData()

const route = useRoute()

function findCurrentIndex() {
  return presentations.findIndex((p) => p.url === route.path)
}

const dateFormat = computed(() => {
  return new Intl.DateTimeFormat(
    theme.value.lastUpdated?.formatOptions?.forceLocale
      ? lang.value
      : undefined,
    theme.value.lastUpdated?.formatOptions ?? {
      dateStyle: 'long',
      timeStyle: 'short',
    },
  )
})
const date = computed(() => new Date(frontmatter.value.date))
const datePublished = computed(() =>
  frontmatter.value.published !== false
    ? new Date(frontmatter.value.published)
    : null,
)
const dateUpdated = computed(() =>
  page.value.lastUpdated && frontmatter.value.lastUpdated !== false
    ? new Date(page.value.lastUpdated ?? frontmatter.value.lastUpdated)
    : null,
)
const nextPost = computed(() => presentations[findCurrentIndex() - 1])
const prevPost = computed(() => presentations[findCurrentIndex() + 1])
</script>

<template>
  <article>
    <header>
      <h1 class="text-center">
        {{ frontmatter.title }}
      </h1>
      <dl class="text-center text-2xl font-family-prose mb-4">
        <dt class="inline-block">By&nbsp;</dt>
        <dd class="inline-block">
          <a href="/career/">{{ theme.author }}</a>
        </dd>
      </dl>
      <dl class="text-xl font-family-prose leading-8 italic mb-4">
        <dt class="inline">Presented on&nbsp;</dt>
        <dd class="inline leading-3">
          <time :datetime="date.toISOString()">{{
            dateFormat.format(date)
          }}</time
          >.
        </dd>
        <br v-if="datePublished || dateUpdated" />
        <dt
          class="inline"
          v-if="datePublished"
          >Published on
        </dt>
        <dd
          class="inline leading-3"
          v-if="datePublished"
        >
          <time :datetime="datePublished.toISOString()">
            {{ dateFormat.format(datePublished) }} </time
          ><span v-if="dateUpdated">;</span><span v-else>.</span>
        </dd>
        <dt
          class="inline"
          v-if="dateUpdated"
          >&nbsp;updated on
        </dt>
        <dd
          class="inline leading-3"
          v-if="dateUpdated"
        >
          <time :datetime="dateUpdated.toISOString()">
            {{ dateFormat.format(dateUpdated) }} </time
          >.
        </dd>
        <br />
        <dt
          v-if="frontmatter.tags?.length"
          class="inline-block"
          >Published in&nbsp;</dt
        >
        <dd
          v-if="frontmatter.tags?.length"
          class="inline-block"
        >
          <ul class="list-none ml-0 flex justify-center">
            <li
              v-for="(tag, i) in frontmatter.tags"
              :key="tag"
            >
              {{
                i === 0 ? '' : i < frontmatter.tags.length - 1 ? ', ' : ', and '
              }}
              <a :href="'/presentations/tags/' + tag.toLowerCase() + '/'">
                {{ tag }}
              </a>
              <span v-if="i === frontmatter.tags.length - 1">.</span>
            </li>
          </ul>
        </dd>
      </dl>
      <div class="text-xl mb-4">
        <Share />
      </div>
    </header>
    <Content />
    <footer class="mt-6">
      <Share />
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
        <a href="/presentations/">← View all presentations</a>
      </div>
    </footer>
  </article>
</template>
