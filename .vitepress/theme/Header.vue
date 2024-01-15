<script setup>
import { useData } from 'vitepress'
const { site, theme } = useData()
</script>

<template>
  <header class="p-1">
    <div class="max-w-screen-xl m-auto flex items-center">
      <div class="p-1 m-4 mt-0 mb-0 font-bold text-4xl flex-grow">
        <a href="/">{{ site.title }}</a>
      </div>
      <nav class="text-xl flex-initial text-right font-bold flex h-full">
        <a
          v-for="(link, i) in theme.nav"
          :key="link.text"
          :href="link.link"
          class="p-1 m-4"
        >
          {{ link.text }}
        </a>
      </nav>
    </div>
  </header>
</template>
