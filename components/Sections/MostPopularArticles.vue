<script lang="ts" setup>
  import { PropType } from 'vue';
  import ArticlesSection from '@/components/ArticlesSection.vue';
  import { Article } from '@/domain';

  defineProps({
    section: { type: String as PropType<'developers' | 'validators' | 'community'>, required: true },
  });

  const articles = ref<Article[]>([]);
  const isLoading = false;
</script>

<template>
  <div class="pt-16">
    <!-- <ArticlesSection title="Most Popular Articles" :articles="articles" :loading="isLoading" /> -->
  </div>
</template>
