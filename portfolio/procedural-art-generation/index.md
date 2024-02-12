---
title: 'Procedural Art Generation'
description: 'Procedural art generation using JavaScript and SVG.'
date: 2024-02-11
---

<script setup>
  import { onMounted } from 'vue';
  onMounted(async () => {
    import('./src/main.js');
  });
</script>

Years ago, I played around with the idea of randomly generating abstract, non-representational, geometric art using JavaScript and SVG. The idea was to codify certain design principles and parameters and then generate random values within those constraints. I really like the result and may revisit this in the future by adding some kind of animation.

It's even interactive! Click and drag the shapes :thumbsup:

<div id="viewport">
  <div id="grid-wrapper">
    <div id="grid"></div>
  </div>
</div>
