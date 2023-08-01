<script lang="ts" setup>
  import NextPrevArticle from '@/components/NextPrevArticle.vue';
  import Page404 from '@/pages/404.vue';
</script>

<template>
  <div class="prose dark:prose-invert min-w-full">
    <ContentDoc>
      <template #not-found><Page404 /></template>
    </ContentDoc>
    <NextPrevArticle />
  </div>
</template>
