<script setup>
import { useData } from 'vitepress';
// https://vitepress.dev/reference/runtime-api#usedata
const { page, site, theme, frontmatter, params } = useData();
import Header from './Header.vue';
import Footer from './Footer.vue';
import Home from './Home.vue';
import Page from './Page.vue';
import Article from './Article.vue';
import Articles from './Articles.vue';
import Presentation from './Presentation.vue';
import Presentations from './Presentations.vue';
</script>

<template>
  <Header />
  <main
    v-if="'index.md' === page.filePath"
    class="home flex-grow flex flex-col justify-center pl-5 pr-5 max-w-screen-xl text-xl text-center ml-auto mr-auto"
  >
  </main>
  <main class="pl-5 pr-5 w-full m-auto flex-grow">
    <Home v-if="'index.md' === page.filePath" />
    <Articles v-else-if="'articles/index.md' === page.filePath" />
    <Articles
      v-else-if="page.filePath.startsWith('articles/tags') && params?.tag"
    />
    <Article
      v-else-if="
        page.filePath.startsWith('articles/') &&
        page.filePath !== 'articles/tags.md'
      "
    />
    <Presentations v-else-if="'presentations/index.md' === page.filePath" />
    <Presentation v-else-if="page.filePath.startsWith('presentations/')" />
    <Page v-else-if="!page.isNotFound" />
    <div v-else> Oh no! </div>
  </main>
  <Footer />
</template>
