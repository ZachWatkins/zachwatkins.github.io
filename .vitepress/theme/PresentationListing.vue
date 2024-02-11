<script setup>
defineProps({
  presentation: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article class="vp-doc">
    <div>
      <h2 class="mb-0">
        Latest Presentation:
        <a :href="presentation.url">{{ presentation.title }}</a>
      </h2>
      <dl class="float-left mr-2">
        <dt class="sr-only">Published on</dt>
        <dd>
          <time :datetime="new Date(presentation.date.time).toISOString()">{{
            presentation.date.string
          }}</time>
        </dd>
      </dl>
      <span class="float-left mr-2">&mdash;</span>
      <div
        v-if="presentation.excerpt"
        v-html="presentation.excerpt"
      ></div>
    </div>
    <div>
      <a
        aria-label="read more"
        :href="presentation.url"
        >Read more →</a
      >
    </div>
  </article>
</template>
