<script setup>
import { data as articles } from './articles.data.js'
import { useData } from 'vitepress'

const { params } = useData()
if (params?.value?.tag) {
  for (let i = 0; i < articles.length; i++) {
    if (!articles[i].tags || !articles[i].tags.includes(params.value.tag)) {
      articles.splice(i, 1)
      i--
    }
  }
}
</script>

<template>
  <div>
    <Content />
    <ul>
      <li v-for="{ title, url, date, excerpt } of articles">
        <article>
          <div>
            <div>
              <h2 class="mb-0">
                <a :href="url">{{ title }}</a>
              </h2>
              <dl>
                <dt class="sr-only">Published on</dt>
                <dd>
                  <time :datetime="new Date(date.time).toISOString()">{{
                    date.string
                  }}</time>
                </dd>
              </dl>
              <div
                v-if="excerpt"
                v-html="excerpt"
              ></div>
            </div>
            <div>
              <a
                aria-label="read more"
                :href="url"
                >Read more →</a
              >
            </div>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>
