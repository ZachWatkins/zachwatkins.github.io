<script setup>
import { useData } from 'vitepress'
import Search from './Search.vue'
const { site, theme } = useData()
</script>

<template>
  <header class="p-1">
    <div class="max-w-screen-xl m-auto flex items-center">
      <div class="p-1 m-4 mt-0 mb-0 font-bold text-4xl flex-grow">
        <a href="/">{{ site.title }}</a>
      </div>
      <div
        class="flex-initial h-full flex p-1 m-4 mt-0 mb-0 text-right text-xl"
      >
        <nav class="font-bold">
          <a
            v-for="(link, i) in theme.nav"
            :key="link.text"
            :href="link.link"
            class="p-1 m-4"
          >
            {{ link.text }}
          </a>
        </nav>
        <Search />
      </div>
    </div>
  </header>
</template>
