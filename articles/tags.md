<script setup>
import { tags } from './tags/[tag].paths.js'
</script>

# Article Collections by Tag

<ul>
  <li v-for="tag in tags">
    <a :href="tag + '/'">{{ tag }}</a>
  </li>
</ul>
