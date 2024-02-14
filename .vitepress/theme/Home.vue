<script setup>
import { useData } from 'vitepress';
import { data as articles } from './articles.data.js';
import { data as presentations } from './presentations.data.js';
import ArticleListing from './ArticleListing.vue';
import PresentationListing from './PresentationListing.vue';
const { frontmatter } = useData();
</script>

<template>
  <h1 class="leading-10 text-center md:text-6xl mb-8 md:leading-tight"
    ><span class="font-extrabold"
      >{{ frontmatter.hero.title }}<br class="hidden md:block" /></span
  ></h1>
  <div
    class="pl-2 pr-2 md:pl-0 md:pr-0 md:text-left font-family-heading text-2xl vp-doc"
  >
    <a
      class="mb-8 mr-8 md:ml-0 md:mr-16 overflow-clip float-left flow-circle max-w-2/5 md:max-w-none"
      :href="frontmatter.hero.photoLink"
    >
      <img
        :src="frontmatter.hero.photo"
        :alt="frontmatter.hero.photoAlt"
      />
    </a>
    <p class="w-full">
      {{ frontmatter.hero.tagline }}
    </p>
    <p>
      Sometimes I write <a href="/articles/">articles</a> on JavaScript, PHP,
      Laravel, WordPress, DevOps, and
      <a href="/articles/tags/"> other subjects</a>.
    </p>
    <p>
      I'm also building a crossword puzzle tool at
      <a
        href="https://ohmyword.net"
        target="_blank"
        >ohmyword.net</a
      >.
    </p>
    <p
      >You can also find me on
      <a
        target="_blank"
        href="https://github.com/zachwatkins"
        >GitHub</a
      >,
      <a
        target="_blank"
        href="https://codepen.io/zw"
        >CodePen</a
      >,
      <a
        target="_blank"
        href="https://profiles.wordpress.org/zachwtx/"
        >WordPress</a
      >,
      <a
        target="_blank"
        href="https://www.linkedin.com/in/zacharykwatkins/"
        >LinkedIn</a
      >,
      <a
        target="_blank"
        href="https://x.com/zachwatkinsv1"
        >Twitter</a
      >,
      <a
        target="_blank"
        href="https://packagist.org/users/zachwatkins/packages/"
        >Packagist</a
      >, or via email at
      <a href="mailto:zach@zachwatkins.dev">zach&#64;zachwatkins.dev</a>.
    </p>
    <br class="clear-both" />
    <Content />
    <ArticleListing
      v-if="articles.length > 0"
      :article="articles[0]"
    />
    <PresentationListing
      v-if="presentations.length > 0"
      :presentation="presentations[0]"
    />
  </div>
</template>
