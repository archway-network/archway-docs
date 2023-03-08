<script lang="ts" setup>
  import { PropType } from 'vue';
  import ArticlesSection from '@/components/ArticlesSection.vue';
  import { useHighlightedArticles } from '@/data/useHighlightedArticles';
  import { SortingReplicas } from '@/domain/AlgoliaSearch';
  import { Article } from '@/domain';

  const props = defineProps({
    section: { type: String as PropType<'developers' | 'validators' | 'community'>, required: true },
  });

  const articles = ref<Article[]>([]);
  const { search, isLoading } = await useHighlightedArticles(SortingReplicas.DocsByViewed);

  onMounted(async () => {
    articles.value = await search(props.section);
  });
</script>

<template>
  <div class="pt-16">
    <ArticlesSection title="Most Popular Articles" :articles="articles" :loading="isLoading" />
  </div>
</template>
