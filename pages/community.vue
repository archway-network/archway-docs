<script lang="ts" setup>
  import { SortingReplicas } from '@/domain/AlgoliaSearch';
</script>

<template>
  <div>
    <SectionsHero />
    <SectionsCategories />
    <UiPopularArticles :sorting-replica="SortingReplicas.DocsByViewed" title="Most popular articles" css-class="grid grid-cols-1 pt-16 space-y-8 w-full" root-section="community" />
  </div>
</template>
