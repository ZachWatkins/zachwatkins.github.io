---
title: 'Handwriting Worksheet Maker'
description: 'A simple way to make handwriting worksheets for kids.'
date: 2024-10-12
---

This app lets you make simple handwriting worksheets quickly. The font can be changed but I recommend using "Century Gothic" because it is commonly used in elementary school classrooms in the United States.

<script setup>
  import { onMounted } from 'vue';
  onMounted(async () => {
    const main = await import('./src/main.js');
    main.createApp('#main');
  });
</script>

<div id="main" class="relative"></div>
