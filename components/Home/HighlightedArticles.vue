<script lang="ts" setup>
  import { Article } from '@/domain';
  import RecentArticles from './RecentArticles.vue';
  import PopularArticles from './PopularArticles.vue';

  const popularArticles = ref<Article[]>([]);
  const recentArticles = ref<Article[]>([]);
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 border-b pb-16 mb-16 dark:border-gray-900 dark:border-opacity-20">
    <RecentArticles :articles="recentArticles" />
    <PopularArticles :articles="popularArticles" title="Popular articles" />
  </div>
</template>
