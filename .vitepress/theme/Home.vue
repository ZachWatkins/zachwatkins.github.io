<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<template>
  <h1 class="text-6xl mb-8 leading-tight"
    ><span class="font-extrabold">{{ frontmatter.hero.name }}<br /></span
    ><span class="">{{ frontmatter.hero.text }}</span></h1
  >
  <p class="text-2xl w-3/4 mb-8 ml-auto mr-auto">
    {{ frontmatter.hero.tagline }}
  </p>
  <p class="mb-8">
    <a
      v-for="(action, i) in frontmatter.hero.actions"
      :key="action.text"
      :href="action.link"
      :class="`hero-action-${i} p-2 pl-6 pr-6 m-2 text-2xl rounded-full whitespace-nowrap inline-block`"
    >
      {{ action.text }}
    </a>
  </p>
  <Content />
</template>
