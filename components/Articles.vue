<script lang="ts" setup>
  import { PropType } from 'vue';
  import { FileIcon, Link } from '@/components/Ui';
  import { Article } from '@/domain';

  defineProps({
    articles: { type: Array as PropType<Article[]>, required: true },
  });
</script>

<template>
  <div class="space-y-4">
    <div
      :key="id"
      class="flex space-x-3 pb-6 border-b last:border-b-0 dark:border-gray-900 dark:border-opacity-20"
      v-for="{ id, title, description, path } in articles"
    >
      <div class="flex-shrink-0 min-w-0">
        <FileIcon class="w-6 h-6 text-black dark:text-white" />
      </div>
      <div class="space-y-2 min-w-0">
        <Link class="truncate" :href="path">
          <h2>{{ title }}</h2>
        </Link>
        <p class="caption text-gray-600 dark:text-gray-900 truncate">{{ description || '&nbsp' }}</p>
      </div>
    </div>
  </div>
</template>
