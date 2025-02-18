<script setup>
import { useData } from 'vitepress';

const { theme } = useData();
</script>

<template>
  <dl class="author border-t-2 border-b-2 pt-4 pb-4 mt-6">
    <dt class="text-center mb-2 font-bold text-3xl">About the Author</dt>
    <dd>
      <ul class="list-none ml-0">
        <li class="flex items-center">
          <div class="pr-4 shrink-0">
            <img v-if="theme.gravatar" :src="'https://gravatar.com/avatar/' + theme.gravatar + '.jpg?s=176'
              " alt="author image" class="rounded-full" />
          </div>
          <dl>
            <dt class="sr-only">Name</dt>
            <dd class="font-bold text-3xl">{{ theme.author }}</dd>
            <dt class="sr-only">Description</dt>
            <dd class="text-xl font-family-prose"><a target="_blank" rel="noopener noreferrer"
                href="https://zacharywatkins.com/">Zachary Watkins</a>
              is the lead application developer for Communications at Texas A&M
              Transportation Institute in College Station, Texas. He spends most
              of his time creating web-based tools, hanging out with his wife and
              kids, and following other devs on X and YouTube. He posts on X
              <a :href="'https://x.com/' + theme.twitter" target="_blank" rel="noopener noreferrer">@{{ theme.twitter
                }}</a>
              and made an app for
              <a href="https://crossword.zacharywatkins.com/" target="_blank">building crossword puzzles</a>.
            </dd>
          </dl>
        </li>
      </ul>
    </dd>
  </dl>
</template>
