<script setup>
import { useData } from 'vitepress'
import VPNavBarSearch from '../../node_modules/vitepress/dist/client/theme-default/components/VPNavBarSearch.vue'
const { site, theme } = useData()
</script>

<template>
  <header class="p-4 text-center md:text-left">
    <div class="w-full max-w-screen-lg m-auto md:flex md:items-center">
      <div class="p-1 font-bold text-2xl lg:text-4xl md:flex-grow">
        <a href="/">{{ site.title }}</a>
      </div>
      <div
        class="w-full md:w-auto md:flex-initial md:h-full md:flex p-1 md:m-4 mt-0 mb-0 md:text-right text-xl md:items-center"
      >
        <nav class="font-bold">
          <a
            v-for="(link, i) in theme.nav"
            :key="link.text"
            :href="link.link"
            class="p-1 w-1/4 inline-block md:w-auto md:m-2 lg:m-4"
          >
            {{ link.text }}
          </a>
        </nav>
        <div id="search" class="absolute top-0 right-0 md:static">
          <VPNavBarSearch class="search pl-0" />
        </div>
      </div>
    </div>
  </header>
</template>
