<script setup>
// This component uses the native browser Share API to allow a user to share the current page.
// https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share

import { useData, withBase } from 'vitepress'
import { onMounted } from 'vue'
const { theme, page, frontmatter, site, params } = useData()

// Detect if the browser supports the Web Share API.
// If not, do not include the share button in the web page.
onMounted(() => {
  if (!navigator.share) {
    const shareButton = document.getElementById('share')
    shareButton.style.display = 'none'
  }
})

const contentType = page.value.filePath.startsWith('presentations/')
  ? 'presentation'
  : 'article'
const share = () => {
  if (navigator.share) {
    navigator.share({
      url: window?.location.href,
      text: frontmatter.value.description || theme.value.description,
      title: document.title,
    })
  } else {
    console.log('Web Share API not supported in your browser')
  }
}
</script>
<template>
  <a
    class="inline-block mr-8 font-bold color-tapfuel-blue"
    :href="`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://zacharywatkins.com/' + page.relativePath.replace(/index\.md$/, ''))}&text=${encodeURIComponent('I just read ' + frontmatter.title)}&via=${theme.twitter}`"
    target="_blank"
    rel="noopener noreferrer"
  >
    Tweet this {{ contentType }}
  </a>
  <a
    id="share"
    class="inline-block font-bold color-tapfuel-blue"
    @click="share"
    href="#share"
  >
    <svg
      class="fill-current color-current stroke-current w-4 h-4 mr-2 inline-block"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <circle
        cx="4"
        cy="12"
        r="4"
      />
      <circle
        cx="20"
        cy="4"
        r="4"
      />
      <circle
        cx="20"
        cy="20"
        r="4"
      />
      <line
        x1="4"
        y1="12"
        x2="20"
        y2="4"
        stroke-width="2"
      />
      <line
        x1="4"
        y1="12"
        x2="20"
        y2="20"
        stroke-width="2"
      />
    </svg>
    Share this {{ contentType }}
  </a>
</template>
