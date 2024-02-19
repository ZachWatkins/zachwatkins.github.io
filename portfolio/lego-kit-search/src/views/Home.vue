<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/Lego_logo_PNG2.png"
    />
    <Search msg="Lego Library" />
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '../components/Search.vue';

export default {
  name: 'Home',
  components: {
    Search,
  },
};
</script>
