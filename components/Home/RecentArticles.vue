<script lang="ts" setup>
  import Articles from '@/components/Articles.vue';
  import { useRecentArticles } from '@/data';

  const { articles, refresh } = await useRecentArticles();
  const hasArticles = ref(false);

  onMounted(async () => {
    await refresh();
  });

  watch(articles, (newArticles) => {
    hasArticles.value = newArticles.length > 0;
  });

</script>

<template>
  <div class="space-y-8" v-if="hasArticles">
    <h2 class="heading-3">Recent articles</h2>
    <Articles :articles="articles" />
  </div>
</template>
