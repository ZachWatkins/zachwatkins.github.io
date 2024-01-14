<script setup>
import { useData } from 'vitepress'

const { frontmatter, theme } = useData()
</script>

<template>
  <dl>
    <dt class="sr-only">Authors</dt>
    <dd>
      <ul>
        <li>
          <img
            v-if="theme.gravatar"
            :src="'https://gravatar.com/avatar/' + theme.gravatar + '.jpg'"
            alt="author image"
            class="rounded-full"
          />
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
          </dl>
        </li>
      </ul>
    </dd>
  </dl>
</template>
