<template>
  <li class="kit-listing">
    <span class="listing-id mono">#{{ listing.id }}</span>
    <span class="listing-name">{{ listing.name }}</span>
  </li>
</template>

<script>
export default {
  props: {
    listing: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.kit-listing {
  display: table-row;
  list-style-type: none;
}
.listing-id {
  padding-right: 1em;
  font-family: monospace;
  font-size: 16px;
  font-weight: bold;
  display: table-cell;
  min-width: 70px;
}
.listing-name {
  display: table-cell;
}
.mono {
  font-family: monospace;
  font-size: 16px;
  font-weight: bold;
}
</style>
