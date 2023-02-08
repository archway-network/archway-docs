<script setup lang="ts">
  import { useCurrentPage } from '@/composables/useCurrentPage';

  const { page, isParentSection } = useCurrentPage();
</script>

<template>
  <ul class="flex space-x-2 divider-x whitespace-nowrap">
    <li class="text-gray-500 dark:text-gray-300">
      <UiButtonsLink href="/" class="hover:underline">Docs</UiButtonsLink>
    </li>
    <li class="text-gray-500 dark:text-gray-300" v-if="!isParentSection">
      <UiButtonsLink :href="page.parentSectionPath" class="hover:underline" v-if="page.parentSectionPath">
        {{ page.parentSection }}
      </UiButtonsLink>
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
