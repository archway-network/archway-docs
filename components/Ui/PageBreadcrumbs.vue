<script setup lang="ts">
  import { Link } from '@/components/Ui';
  import { useCurrentPage } from '@/composables/useCurrentPage';

  const { page, isParentSection } = useCurrentPage();
</script>

<template>
  <ul class="flex space-x-2 divider-x whitespace-nowrap">
    <li class="text-gray-500 dark:text-gray-300">
      <Link href="/" class="hover:underline">Docs</Link>
    </li>
    <li class="text-gray-500 dark:text-gray-300" v-if="!isParentSection">
      <Link :href="page.parentSectionPath" class="hover:underline" v-if="page.parentSectionPath">{{ page.parentSection }}</Link>
      <span v-else>{{ page.parentSection }}</span>
    </li>
    <li class="text-gray-500 dark:text-gray-300">{{ page.title }}</li>
  </ul>
</template>

<style scoped>
  li:after {
    @apply inline-block text-base text-gray-500 pl-2;
    content: '/';
  }

  li:last-child:after {
    content: '';
  }
</style>
