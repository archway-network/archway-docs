<script lang="ts" setup>
  import Articles from '@/components/Articles.vue';
  import { Article } from '@/domain';
  import { PropType } from 'vue';

  const props = defineProps({
    articles: { type: Array as PropType<Article[]>, required: false }
  });

  const hasArticles = ref(false);

  watch(() => props.articles, (newArticles) => {
    hasArticles.value = newArticles?.length ? newArticles.length > 0 : false;
  });
</script>

<template>
  <div class="space-y-8" v-if="hasArticles">
    <h2 class="heading-3">Recent articles</h2>
    <Articles :articles="articles || []" />
  </div>
</template>
