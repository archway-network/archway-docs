<script lang="ts" setup>
  import { Link } from '@/components/Ui';
  import { useSectionCategories } from '@/data';

  const { categories } = useSectionCategories();
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 pt-6 lg:pt-12">
    <Link
      :key="id"
      :href="articlePath"
      class="bg-white dark:bg-black-100 rounded-2xl shadow-card px-6 py-8"
      v-for="{ id, category, title, description, articlePath } in categories"
    >
      <label class="block text-black/20 dark:text-white/60 pb-6" v-if="!!category">{{ category }}</label>
      <h2 class="heading-3">{{ title }}</h2>
      <p class="text-gray-500 dark:text-gray-900 pt-2.5">{{ description }}</p>
    </Link>
  </div>
</template>
