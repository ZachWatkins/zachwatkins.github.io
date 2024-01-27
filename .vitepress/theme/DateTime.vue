<script setup>
import { ref, computed, watchEffect, onMounted } from 'vue'
import { useData } from 'vitepress'

const { theme, lang } = useData()

// Define props.
const props = defineProps({
  value: {
    type: string,
    default: '',
  },
})

// Display the publish date of the article, or the last edited date.
const date = computed(() => new Date(props.value))
const isoDatetime = computed(() => date.value.toISOString())
const datetime = ref('')

// set time on mounted hook to avoid hydration mismatch due to
// potential differences in timezones of the server and clients
onMounted(() => {
  watchEffect(() => {
    datetime.value = new Intl.DateTimeFormat(
      theme.value.lastUpdated?.formatOptions?.forceLocale
        ? lang.value
        : undefined,
      theme.value.lastUpdated?.formatOptions ?? {
        dateStyle: 'long',
      },
    ).format(date.value)
  })
})
</script>

<template>
  <time :datetime="isoDatetime">{{ datetime }}</time>
</template>
