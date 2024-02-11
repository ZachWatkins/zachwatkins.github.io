<script setup>
import { defineProps } from 'vue';

defineProps({
  article: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article class="vp-doc">
    <div>
      <h2 class="mb-0">
        Latest Article: <a :href="article.url">{{ article.title }}</a>
      </h2>
      <dl class="float-left mr-2">
        <dt class="sr-only">Published on</dt>
        <dd>
          <time :datetime="new Date(article.date.time).toISOString()">{{
            article.date.string
          }}</time>
        </dd>
      </dl>
      <span class="float-left mr-2">&mdash;</span>
      <div
        v-if="article.excerpt"
        v-html="article.excerpt"
      ></div>
    </div>
    <div>
      <a
        aria-label="read more"
        :href="article.url"
        >Read more →</a
      >
    </div>
  </article>
</template>
