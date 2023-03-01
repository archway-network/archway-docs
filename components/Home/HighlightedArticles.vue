<script lang="ts" setup>
  import { SortingReplicas } from '@/domain/AlgoliaSearch';
  import RecentArticles from './RecentArticles.vue';  
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 border-b pb-16 mb-16">
    <RecentArticles />
    <UiPopularArticles :sorting-replica="SortingReplicas.DocsByViewed" title="Popular articles" css-class="space-y-8" />
  </div>
</template>
