<script lang="ts" setup>
  import Articles from '@/components/Articles.vue';
  import { PropType } from 'vue';
  import { Article } from '@/domain';

  const props = defineProps({
    title: { type: String, required: true },
    cssClass: { type: String, required: true },
    articles: { type: Array as PropType<Article[]>, required: false }
  });

  const hasArticles = ref(false);

  watch(() => props.articles, (newArticles) => {
    hasArticles.value = newArticles?.length ? newArticles.length > 0 : false;
  });
</script>

<template>
  <div :class="props.cssClass" v-if="hasArticles">
    <h2 class="heading-3">{{ props.title }}</h2>
    <Articles :articles="articles || []" />
  </div>
</template>
