<script setup>
import { useData } from 'vitepress';
import VPNavBarSearch from '../../node_modules/vitepress/dist/client/theme-default/components/VPNavBarSearch.vue';
const { site, theme } = useData();
</script>

<template>
  <header
    class="p-4 pb-0 mb-4 text-center md:text-left w-full max-w-screen-lg ml-auto mr-auto md:flex md:items-center md:pt-8 md:mb-8"
  >
    <div class="p-1 font-bold text-2xl lg:text-4xl md:flex-grow">
      <a href="/">{{ site.title }}</a>
    </div>
    <div
      class="w-full justify-center md:w-auto md:flex-initial md:h-full flex md:text-right text-xl md:items-center"
    >
      <nav class="font-bold mr-2 md:mr-4 lg:mr-8">
        <a
          v-for="(link, i) in theme.nav"
          :key="link.text"
          :href="link.link"
          :class="`p-1 inline-block ${i > 0 && 'ml-2 md:ml-4 lg:ml-8'}`"
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
  </header>
</template>
