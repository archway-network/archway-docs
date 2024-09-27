<script lang="ts" setup>
  import { Link, ChevronRightIcon } from '@/components/Ui';

  defineProps<{
    title: string;
    description: string;
    url: string;
    label: string;
  }>();
</script>

<template>
  <Link :href="url" class="relative block border border-transparent rounded-2xl bg-white dark:bg-black-100 shadow-card dark:shadow-black">
    <div class="flex flex-col md:flex-row md:items-center space-y-6 md:space-x-6 md:space-y-0 px-6 py-8">
      <div class="flex-shrink-0">
        <slot></slot>
      </div>
      <div class="flex-1 flex flex-col md:flex-row justify-between lg:flex-col">
        <div>
          <p class="text-gray-500 dark:text-gray-900">{{ description }}</p>
          <h2 class="heading-3 pt-1">{{ title }}</h2>
        </div>
        <div class="flex items-center space-x-2 pt-5">
          <span class="text-orange">{{ label }}</span>
          <ChevronRightIcon class="w-4 h-4 text-orange" />
        </div>
      </div>
    </div>
  </Link>
</template>

<style scoped>
.heading-3 {
  font-size: 24px;
}
</style>
