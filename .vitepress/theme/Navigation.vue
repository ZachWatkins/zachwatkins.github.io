<script setup>
import { useData } from 'vitepress'
const { theme } = useData()
</script>

<template>
  <nav>
    <span v-for="(link, i) in theme.nav">
      <span v-if="i > 0"> | </span>
      <a
        :key="link.text"
        :href="link.link"
      >
        {{ link.text }}
      </a>
    </span>
  </nav>
</template>
