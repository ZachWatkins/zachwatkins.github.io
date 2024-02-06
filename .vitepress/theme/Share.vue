<script setup>
// This component uses the native browser Share API to allow a user to share the current page.
// https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share

import { useData } from 'vitepress'
import { onMounted } from 'vue'
const { theme, frontmatter } = useData()

// Detect if the browser supports the Web Share API.
// If not, do not include the share button in the web page.
onMounted(() => {
  if (!navigator.share) {
    const shareButton = document.getElementById('share')
    shareButton.style.display = 'none'
  }
})

const share = () => {
  if (navigator.share) {
    navigator.share({
      url: window.location.href,
      text: frontmatter.value.description || theme.value.description,
      title: document.title,
    })
  } else {
    console.log('Web Share API not supported in your browser')
  }
}
const tweetUrl = [
  'https://twitter.com/intent/tweet?url=',
  encodeURIComponent(window.location.origin + window.location.pathname),
  '&text=',
  encodeURIComponent(
    `I just read "${frontmatter.value.title}" by ${theme.value.twitter}`,
  ),
  encodeURIComponent('\n\n'),
].join('')
</script>
<template>
  <a
    class="inline-block font-bold color-tapfuel-blue"
    :href="tweetUrl"
    target="_blank"
    rel="noopener noreferrer"
  >
    Tweet this article
  </a>
  <a
    id="share"
    class="inline-block ml-8 font-bold color-tapfuel-blue"
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
    Share this article
  </a>
</template>
