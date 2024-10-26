---
title: 'Handwriting Worksheet Maker'
description: 'A simple way to make handwriting worksheets for kids.'
date: 2024-10-12
---

Click the text below to start.

<script setup>
  import { onMounted } from 'vue';
  onMounted(async () => {
    const main = await import('./src/main.js');
    main.createApp('#main');
  });
</script>

<div id="main" class="relative"></div>

The font is [ABeeZee](https://fonts.google.com/specimen/ABeeZee/about) by Anja Meiners. [License](https://fonts.google.com/specimen/ABeeZee/license)
