<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Enter a kit's number or name to see if we have it!
    </p>
    <SearchForm />
  </div>
</template>
<script>
// import Vue from 'vue'
import SearchForm from './SearchForm.vue'

export default {
  components: {
    SearchForm
  },
  name: 'Search',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#results {
  margin: 10px 0;
  max-width: 400px;
  margin: 10px auto;
  border: 1px solid;
  padding: 10px;
  text-align: left;
}
h3 {
  margin: 20px 0 0;
}
ul {
  text-align: left;
  margin-left: 0;
  padding-left: 0;
}
li {
  list-style-type: none;
}
</style>
