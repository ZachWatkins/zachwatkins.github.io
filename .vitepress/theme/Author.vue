<script setup>
import { useData } from 'vitepress'

const { frontmatter, theme } = useData()
</script>

<template>
  <dl>
    <dt>About the Author</dt>
    <dd>
      <ul>
        <li class="flex">
          <div class="pr-4">
            <img
              v-if="theme.gravatar"
              :src="'https://gravatar.com/avatar/' + theme.gravatar + '.jpg'"
              alt="author image"
              class="rounded-full"
            />
          </div>
          <dl class="text-sm whitespace-nowrap">
            <dt class="sr-only">Name</dt>
            <dd>{{ frontmatter.author }}</dd>
            <dt
              v-if="theme.twitter"
              class="sr-only"
              >Twitter</dt
            >
            <dd v-if="theme.twitter">
              <a
                :href="'https://twitter.com/' + theme.twitter"
                target="_blank"
                rel="noopnener noreferrer"
                >{{ theme.twitter }}</a
              >
            </dd>
            <dt class="sr-only">Description</dt>
            <dd>{{ theme.authorBio }}</dd>
          </dl>
        </li>
      </ul>
    </dd>
  </dl>
</template>
