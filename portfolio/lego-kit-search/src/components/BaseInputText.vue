<template>
  <input
    type="text"
    name="search"
    :value="value"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
input[type='text'] {
  font-size: 18px;
  padding: 8px 10px;
  border: 2px solid;
  text-align: left;
}
</style>
