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
  <Link
    :href="url"
    class="relative block border border-transparent rounded-2xl bg-white dark:bg-black-100 shadow-card dark:shadow-black"
    :external-icon="false"
  >
    <div class="flex flex-col md:flex-row md:items-center space-y-6 md:space-x-6 md:space-y-0 px-6 py-8">
      <div class="flex-shrink-0">
        <slot></slot>
      </div>
      <div class="flex-1 flex flex-col md:flex-row md:space-x-4 justify-between">
        <div class="flex flex-col space-y-1 lg:flex-row lg:space-x-12 lg:space-y-0">
          <p class="whitespace-pre-line">{{ title }}</p>
          <p class="text-gray-500 dark:text-gray-900 whitespace-pre-line max-w-[370px]">{{ description }}</p>
        </div>
        <div class="flex items-center space-x-2 pt-5 flex-shrink-0">
          <span class="text-orange">{{ label }}</span>
          <ChevronRightIcon class="w-4 h-4 text-orange" />
        </div>
      </div>
    </div>
  </Link>
</template>
