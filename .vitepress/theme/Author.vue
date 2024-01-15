<script setup>
import { useData } from 'vitepress'

const { frontmatter, theme } = useData()
</script>

<template>
  <dl class="author">
    <dt class="text-center">About the Author</dt>
    <dd>
      <ul>
        <li class="flex">
          <div class="pr-4 flex-shrink-0">
            <img
              v-if="theme.gravatar"
              :src="
                'https://gravatar.com/avatar/' + theme.gravatar + '.jpg?s=126'
              "
              alt="author image"
              class="rounded-full"
            />
          </div>
          <dl>
            <dt class="sr-only">Name</dt>
            <dd>{{ frontmatter.author }}</dd>
            <dt class="sr-only">Description</dt>
            <dd
              >Zachary Watkins is the lead web application developer for the
              Communications division at Texas A&M Transportation Institute in
              College Station, Texas. He spends most of his time working closely
              with researchers to create web-based tools, visualize data, and
              scope technical work for his team. He also posts on Twitter
              <a
                :href="'https://twitter.com/' + theme.twitter"
                target="_blank"
                rel="noopnener noreferrer"
                >{{ theme.twitter }}</a
              >
              and has a web app for
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
