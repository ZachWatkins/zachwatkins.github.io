---
title: 'Browser Game with Phaser 3'
description: 'A simple game demo using the Phaser 3 browser game framework.'
date: 2024-02-15
head:
  - - script
    - src: 'https://cdnjs.cloudflare.com/ajax/libs/phaser/2.4.3/phaser.min.js'
---

<script setup>
  import { onMounted } from 'vue';
  onMounted(async () => {
    import('./src/main.js');
  });
</script>

This is a simple game demo using the Phaser 3 browser game framework. It's a learning exercise to decide if it's simple and performant enough for the spare moments I find to work on something fun like this.

<div id="app" class="relative">
  <div id="game-container"></div>
  <div id="console" style="white-space:pre;margin-top:1rem;"></div>
</div>
