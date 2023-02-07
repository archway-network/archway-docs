<script lang="ts" setup>
  import { PropType } from 'vue';
  import { FileIcon } from '@/components/Ui';
  import { Article } from '@/domain';

  defineProps({
    articles: { type: Array as PropType<Article[]>, required: true },
  });
</script>

<template>
  <div :key="id" class="flex space-x-3 pb-6 border-b last:border-b-0" v-for="{ id, title, description } in articles">
    <div class="flex-shrink-0">
      <FileIcon class="w-6 h-6 text-black dark:text-white" />
    </div>
    <div class="space-y-2">
      <h2>{{ title }}</h2>
      <p class="caption text-gray-600 dark:text-gray-300">{{ description }}</p>
    </div>
  </div>
</template>
