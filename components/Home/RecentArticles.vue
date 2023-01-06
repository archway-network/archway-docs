<script lang="ts" setup>
  import { computed } from 'vue';
  import Articles from '@/components/Articles.vue';
  import { useRecentArticles } from '@/data';

  const { articles } = await useRecentArticles();

  const hasArticles = computed(() => articles.value.length > 0);
</script>

<template>
  <div class="space-y-8" v-if="hasArticles">
    <h2 class="heading-3">Recent articles</h2>
    <Articles :articles="articles" />
  </div>
</template>
