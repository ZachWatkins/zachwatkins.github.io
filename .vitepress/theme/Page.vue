<script setup>
import { useData } from 'vitepress';
const { frontmatter } = useData();
</script>

<template>
  <div class="vp-doc">
    <header>
      <h1 class="text-center">
        {{ frontmatter.title }}
      </h1>
    </header>
    <Content />
  </div>
</template>
