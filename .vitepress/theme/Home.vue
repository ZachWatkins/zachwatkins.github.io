<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<template>
  <h1 class="leading-10 md:text-6xl mb-8 md:leading-tight"
    ><span class="font-extrabold"
      >{{ frontmatter.hero.name }}<br class="hidden md:block" /></span
    ><span class="ml-2">{{ frontmatter.hero.text }}</span></h1
  >
  <div class="md:flex md:flex-row items-center md:w-3/4 ml-auto mr-auto">
    <img
      class="mb-8 md:mb-0 md:mr-8 overflow-clip rounded-full"
      :src="frontmatter.hero.photo"
    />
    <div class="">
      <p class="text-2xl mb-8">
        {{ frontmatter.hero.tagline }}
      </p>
      <p class="mb-8">
        <a
          v-for="(action, i) in frontmatter.hero.actions"
          :key="action.text"
          :href="action.link"
          :class="`hero-action-${i} p-2 pl-6 pr-6 m-2 ml-0 text-2xl rounded-full whitespace-nowrap inline-block`"
        >
          {{ action.text }}
        </a>
      </p>
    </div>
  </div>
  <Content />
</template>
