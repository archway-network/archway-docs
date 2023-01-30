<script lang="ts" setup>
  const configs = useRuntimeConfig();
  console.log('configs', configs);

  definePageMeta({
    layout: 'home',
  });
</script>

<template>
  <HomeHero />
  <HomeSections />
  <HomeHighlightedArticles />
  <HomeLearnAboutArchway />
</template>
