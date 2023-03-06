<script lang="ts" setup>
  import { SortingReplicas } from '@/domain/AlgoliaSearch';
  import { useHighlightedArticles } from '@/data/useHighlightedArticles';
  import { Article } from '@/domain';

  const { search } = await useHighlightedArticles(SortingReplicas.DocsByViewed);
  let popularArticles = ref<Article[]>([]);

  onMounted(async () => {
    popularArticles.value = await search("community");
  });
</script>

<template>
  <div>
    <SectionsHero />
    <SectionsCategories />
    <UiPopularArticles :articles="popularArticles" title="Most popular articles" css-class="grid grid-cols-1 pt-16 space-y-8 w-full" />
  </div>
</template>
