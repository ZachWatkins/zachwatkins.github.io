---
title: 'Lego Kit Search'
description: Search a list of lego kits to see if we don't have it yet.
date: 2022-01-03
---

<script setup>
  import { onMounted } from 'vue';
  onMounted(async () => {
    const main = await import('./src/main.js');
    main.createApp('#main');
  });
</script>

I created a simple app to teach myself Vue and to help friends and family when shopping for Lego kits for our kids. I hosted it for free at https://lego.zkw.app/ and have embedded the search feature here.

<div id="main"></div>
