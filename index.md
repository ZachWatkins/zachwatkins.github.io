---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  title: 'Solve problems with art, math, technology, and communication.'
  tagline: 'I plan, create, deploy, and maintain web technology for the public and private sector.'
  photo: /img/profile/20221122_081808-home.jpg
  photoAlt: 'Photo of Zachary K. Watkins smiling and wearing a light blue buttoned shirt.'
  photoLink: '/portfolio/#photos'
---

<script setup>
  import { onMounted } from 'vue';
  onMounted(async () => {
    const main = await import('./portfolio/procedural-art-generation/src/art-generator.js');
    main.createApp(document.querySelector('#viewport'));
  });
</script>

## Latest Demo: <a href="/portfolio/remarklet/">Remarklet</a> (March 8, 2024)

<div id="viewport">
  <div id="grid-wrapper">
    <div id="grid"></div>
  </div>
</div>
