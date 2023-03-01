<script lang="ts" setup>
  import Articles from '@/components/Articles.vue';
  import { useHighlightedArticles } from '@/data';
  import { SortingReplicas } from '@/domain/AlgoliaSearch';
  import { PropType } from 'vue';

  const props = defineProps({
    title: { type: String, required: true },
    cssClass: { type: String, required: true },    
    rootSection: { type: String, required: false },
    sortingReplica: { type: String as PropType<SortingReplicas>, required: true }
  });

  const { articles, refresh } = await useHighlightedArticles(props.sortingReplica, props.rootSection);
  onMounted(async () => {
    await refresh();
  });
</script>

<template>
  <div :class="props.cssClass">
    <h2 class="heading-3">{{ props.title }}</h2>
    <Articles :articles="articles" />
  </div>
</template>
