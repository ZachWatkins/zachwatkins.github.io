<template>
  <input
    type="submit"
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
input[type='submit'] {
  padding: 8px;
  font-size: 18px;
  cursor: pointer;
}
</style>
