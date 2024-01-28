<script setup>
import { useData } from 'vitepress'
import VPNavBarSearch from '../../node_modules/vitepress/dist/client/theme-default/components/VPNavBarSearch.vue'
const { site, theme } = useData()
</script>

<template>
  <header class="pt-8 pb-8 pl-4 pr-4 text-center md:text-left">
    <div class="w-full max-w-screen-lg m-auto md:flex md:items-center">
      <div class="pr-1 font-bold text-2xl lg:text-4xl md:flex-grow">
        <a href="/">{{ site.title }}</a>
      </div>
      <div
        class="w-full justify-center md:w-auto md:flex-initial flex md:ml-4 md:text-right text-xl md:items-center"
      >
        <nav class="font-bold">
          <a
            v-for="(link, i) in theme.nav"
            :key="link.text"
            :href="link.link"
            class="p-1 inline-block ml-1 mr-1 md:ml-2 md:mr-2 lg:ml-4 lg:mr-4"
          >
            {{ link.text }}
          </a>
        </nav>
        <div
          id="search"
          class="absolute top-0 right-0 md:static"
        >
          <VPNavBarSearch class="search pl-0" />
        </div>
      </div>
    </div>
  </header>
</template>
