<script lang="ts" setup>
  import { PropType } from 'vue';
  import ArticlesLoading from '@/components/ArticlesLoading.vue';
  import Articles from '@/components/Articles.vue';
  import { Article } from '@/domain';

  defineProps({
    title: { type: String, required: true },
    articles: { type: Array as PropType<Article[]>, required: true },
    loading: { type: Boolean, default: false },
  });
</script>

<template>
  <div>
    <h2 class="heading-3 pb-8">{{ title }}</h2>
    <ArticlesLoading v-if="loading" />
    <Articles :articles="articles" v-else />
  </div>
</template>
