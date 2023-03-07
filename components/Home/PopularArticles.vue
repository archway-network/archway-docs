<script lang="ts" setup>
  import ArticlesSection from '@/components/ArticlesSection.vue';
  import { useHighlightedArticles } from '@/data/useHighlightedArticles';
  import { SortingReplicas } from '@/domain/AlgoliaSearch';
  import { Article } from '@/domain';

  const articles = ref<Article[]>([]);
  const { search, isLoading } = await useHighlightedArticles(SortingReplicas.DocsByViewed);

  onMounted(async () => {
    articles.value = await search();
  });
</script>

<template>
  <div>
    <ArticlesSection title="Popular Articles" :articles="articles" :loading="isLoading" />
  </div>
</template>
