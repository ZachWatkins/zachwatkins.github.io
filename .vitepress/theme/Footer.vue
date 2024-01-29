<script setup>
import { useData } from 'vitepress'
const { theme } = useData()
</script>

<template>
  <footer
    class="w-full text-center max-w-screen-lg m-auto md:text-left p-4 pt-0 mt-4 md:pb-8 md:mt-8"
  >
    <div class="text-lg md:text-xl">
      <a
        v-for="link in theme.footerNav"
        :key="link.text"
        :href="link.link"
        class="mr-5 mb-2 inline-block whitespace-nowrap text-lg"
      >
        {{ link.text }}
      </a>
    </div>
    <div class="md:text-right">
      v{{ theme.version }} &copy; {{ theme.date.copyrightYears }}
      {{ theme.author }}. All rights reserved.
    </div>
  </footer>
</template>
