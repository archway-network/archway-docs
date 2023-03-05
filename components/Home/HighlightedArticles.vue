<script lang="ts" setup>
  import { SortingReplicas } from '@/domain/AlgoliaSearch';
  import { useHighlightedArticles } from '@/data/useHighlightedArticles';
  import { Article } from '@/domain';
  import RecentArticles from './RecentArticles.vue';  
  
  const { search: searchPopular } = await useHighlightedArticles(SortingReplicas.DocsByViewed);
  const { search: searchRecent } = await useHighlightedArticles(SortingReplicas.DocsByModified);
  let popularArticles = ref<Article[]>([]);
  let recentArticles = ref<Article[]>([]);

  onMounted(async () => {
    // when simulataneous calls are made they must be done sequentially
    recentArticles.value = await searchRecent(SortingReplicas.DocsByModified);
    console.log(SortingReplicas.DocsByModified, "search data", recentArticles.value);

    popularArticles.value = await searchPopular(SortingReplicas.DocsByViewed);
    console.log(SortingReplicas.DocsByViewed, "search data", popularArticles.value);
  });
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 border-b pb-16 mb-16 dark:border-gray-900 dark:border-opacity-20">
    <RecentArticles :articles="recentArticles" />
    <UiPopularArticles :articles="popularArticles" title="Popular articles" css-class="space-y-8" />
  </div>
</template>
