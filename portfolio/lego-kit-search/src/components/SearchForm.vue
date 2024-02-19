<template>
  <div>
    <form id="lego_kit_search_form">
      <div class="message-wrap">
        <div
          id="message"
          v-if="newSearchTerms && 0 === results.length"
        >
          Kit not found in our library
        </div>
        <BaseInputText
          v-model="newSearchTerms"
          id="search"
          placeholder="76146"
          v-on:input="searchKits"
        />
        <BaseInputSubmit value="Search" />
      </div>
    </form>
    <ul
      id="results"
      v-if="results.length"
    >
      <KitListing
        v-for="result in results"
        :key="result.id"
        :listing="result"
      />
    </ul>
  </div>
</template>

<script>
import legoKits from '../data/lego-kits.json';
import BaseInputText from './BaseInputText.vue';
import BaseInputSubmit from './BaseInputSubmit.vue';
import KitListing from './KitListing.vue';

export default {
  legoJson: legoKits,
  components: {
    BaseInputText,
    BaseInputSubmit,
    KitListing,
  },
  data() {
    return {
      newSearchTerms: '',
      results: [],
      kits: legoKits,
    };
  },
  methods: {
    searchKits(event) {
      const trimmedText = event.target.value.trim();
      if (trimmedText) {
        const key =
          parseInt(trimmedText).toString() === trimmedText ? 'id' : 'name';
        // Find which kits are being looked for.
        // Replace the viewed results array with the found results.
        this.results = this.$options.legoJson.filter(function (item) {
          let searchedValue = item[key];
          if (typeof item[key] === 'number') {
            searchedValue = searchedValue.toString();
          }
          if (searchedValue.indexOf(trimmedText) >= 0) {
            return true;
          } else {
            return false;
          }
        });
      } else {
        this.results = [];
      }
    },
  },
};
</script>

<style scoped>
#results {
  margin: 10px 0;
  max-width: 400px;
  margin: 10px auto;
  border: 1px solid #000;
  padding: 10px;
  text-align: left;
}
.message-wrap {
  display: inline-block;
  position: relative;
}

.message-wrap #message {
  position: absolute;
  bottom: 100%;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 12px;
  box-sizing: border-box;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  border: 1px solid transparent;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.5) inset;
}
</style>
