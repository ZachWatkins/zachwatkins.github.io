<script setup>
import { useData } from 'vitepress'

const { frontmatter, theme } = useData()
</script>

<template>
  <dl class="author border-t-2 border-b-2 pt-4 pb-4 mt-6 mb-6">
    <dt class="text-center mb-2">About the Author</dt>
    <dd>
      <ul>
        <li class="flex">
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
            <dd>{{ frontmatter.author }}</dd>
            <dt class="sr-only">Description</dt>
            <dd class="description"
              >Zachary Watkins is the lead web application developer for the
              Communications division at Texas A&M Transportation Institute in
              College Station, Texas. He spends most of his time creating
              web-based tools, visualizing data, and writing technical
              documents. He also posts on Twitter
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
