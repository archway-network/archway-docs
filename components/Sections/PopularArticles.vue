<script lang="ts" setup>
  import Articles from '@/components/Articles.vue';
  import { useSectionPopularArticles } from '@/data';

  const props = defineProps({
    rootSection: { type: String, required: true }
  });

  const { articles, refresh } = await useSectionPopularArticles(props.rootSection);
  onMounted(async () => {
    await refresh();
  });
</script>

<template>
  <div class="grid grid-cols-1 pt-16 space-y-8 w-full">
    <h2 class="heading-3">Most popular articles</h2>
    <Articles :articles="articles" />
  </div>
</template>
