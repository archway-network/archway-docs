<script lang="ts" setup>
  import { PropType } from 'vue';
  import ArticlesSection from '@/components/ArticlesSection.vue';
  import { Article } from '@/domain';

  const props = defineProps({
    section: { type: String as PropType<'developers' | 'validators' | 'community'>, required: true },
  });

  const articles = ref<Article[]>([]);
</script>

<template>
  <div class="pt-16">
    <ArticlesSection title="Most Popular Articles" :articles="articles" :loading="isLoading" />
  </div>
</template>
