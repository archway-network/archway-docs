<script lang="ts" setup>
  import Articles from '@/components/Articles.vue';
  import { useSectionPopularArticles } from '@/data';

  const { articles } = await useSectionPopularArticles();
</script>

<template>
  <div class="space-y-8">
    <h2 class="heading-3">Popular articles</h2>
    <Articles :articles="articles" />
  </div>
</template>
