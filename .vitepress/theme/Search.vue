<script setup>
import VPNavBarSearch from '../../node_modules/vitepress/dist/client/theme-default/components/VPNavBarSearch.vue'
import { ref } from 'vue'
const search = ref('')
</script>

<template>
  <div id="search">
    <VPNavBarSearch class="search" />
  </div>
</template>
