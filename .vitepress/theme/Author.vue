<script setup>
import { useData } from 'vitepress'

const { frontmatter, theme } = useData()
</script>

<template>
  <dl class="author border-t-2 border-b-2 pt-4 pb-4 mt-6">
    <dt class="text-center mb-2 font-bold text-3xl">About the Author</dt>
    <dd>
      <ul>
        <li class="flex items-center">
          <div class="pr-4 flex-shrink-0">
            <img
              v-if="theme.gravatar"
              :src="
                'https://gravatar.com/avatar/' + theme.gravatar + '.jpg?s=176'
              "
              alt="author image"
              class="rounded-full"
            />
          </div>
          <dl>
            <dt class="sr-only">Name</dt>
            <dd class="font-bold text-3xl">{{ theme.author }}</dd>
            <dt class="sr-only">Description</dt>
            <dd class="text-xl font-family-prose"
              ><a
                target="_blank"
                rel="noopener noreferrer"
                href="{{ theme.linkedin }}"
                >Zachary Watkins</a
              >
              is the lead application developer for Communications at Texas A&M
              Transportation Institute in College Station, Texas. He spends most
              of his time creating web-based tools, visualizing data, and
              following other devs on X and YouTube. He also posts on Twitter
              <a
                :href="'https://x.com/' + theme.twitter"
                target="_blank"
                rel="noopener noreferrer"
                >{{ theme.twitter }}</a
              >
              and made a site for
              <a
                href="https://ohmyword.net"
                target="_blank"
                >crossword puzzle enthusiasts</a
              >.</dd
            >
          </dl>
        </li>
      </ul>
    </dd>
  </dl>
</template>
