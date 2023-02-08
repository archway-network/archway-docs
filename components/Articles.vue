<script lang="ts" setup>
  import { PropType } from 'vue';
  import { FileIcon, Link } from '@/components/Ui';
  import { Article } from '@/domain';

  const props = defineProps({
    articles: { type: Array as PropType<Article[]>, required: true },
  });
</script>

<template>
  <div :key="id" class="flex space-x-3 pb-6 border-b last:border-b-0" v-for="{ id, title, description, path } in articles">
    <div class="flex-shrink-0">
      <FileIcon class="w-6 h-6 text-black" />
    </div>
    <div class="space-y-2">
      <Link :href="path">
        <h2>{{ title }}</h2>
      </Link>
      <p class="caption text-gray-600">{{ description }}</p>      
    </div>
  </div>
</template>
