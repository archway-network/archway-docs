<script lang="ts" setup>
  import { SortingReplicas } from '@/domain/AlgoliaSearch';
  import { useHighlightedArticles } from '@/data/useHighlightedArticles';
  import { Article } from '@/domain';
  import RecentArticles from './RecentArticles.vue';
  import PopularArticles from './PopularArticles.vue';

  // const { search: searchPopular } = await useHighlightedArticles(SortingReplicas.DocsByViewed);
  // const { search: searchRecent } = await useHighlightedArticles(SortingReplicas.DocsByModified);
  const popularArticles = ref<Article[]>([]);
  const recentArticles = ref<Article[]>([]);

  // onMounted(async () => {
  //   const popularResult = searchPopular();
  //   const recentResult = searchRecent();

  //   popularArticles.value = await popularResult;
  //   recentArticles.value = await recentResult;
  // });
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 border-b pb-16 mb-16 dark:border-gray-900 dark:border-opacity-20">
    <RecentArticles :articles="recentArticles" />
    <PopularArticles :articles="popularArticles" title="Popular articles" />
  </div>
</template>
