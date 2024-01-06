<template>
  <div
    ><strong>{{ hero.name }}</strong> {{ hero.text }}</div
  >
  <p>
    {{ hero.tagline }}
  </p>
  <p>
    <a
      v-for="action in hero.actions"
      :key="action.text"
      :href="action.link"
      :class="`button ${action.theme}`"
    >
      {{ action.text }}
    </a>
  </p>
</template>

<script>
export default {
  props: ['hero', 'features'],
}
</script>
