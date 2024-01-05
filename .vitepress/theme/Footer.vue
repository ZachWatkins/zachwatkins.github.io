<template>
  <footer>
    &copy; {{ copyrightYears }} {{ author }}<br />
    <a
      v-for="link in nav"
      :key="link.text"
      :href="link.link"
    >
      {{ link.text }}
    </a>
  </footer>
</template>

<script>
export default {
  props: ['author', 'nav', 'copyrightYears'],
}
</script>
