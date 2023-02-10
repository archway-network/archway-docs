<script lang="tsx" setup>
  import { Link, ArchwayLogo } from '@/components/Ui';
  import { useAboutArchwayArticles } from '@/data/useAboutArchwayArticles';

  const { articles } = await useAboutArchwayArticles();
</script>

<template>
  <div>
    <h2 class="heading-2 pb-5">Learn more about Archway</h2>
    <p>
      Archway is an incentivized smart contract platform that rewards developers. Explore our documentation and guides to level up your
      workflow.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-x-8 lg:gap-y-6 pt-12">
      <Link
        :key="id"
        :href="path"
        class="flex space-x-4 bg-white dark:bg-black rounded-2xl shadow dark:shadow-gray py-10 px-6"
        v-for="{ id, title, description, path } in articles"
      >
        <div class="flex-shrink-0">
          <ArchwayLogo class="w-6 h-6" />
        </div>
        <div class="space-y-2.5">
          <h2 class="font-bold">{{ title }}</h2>
          <p class="caption text-gray-600 dark:text-gray-300">{{ description }}</p>
        </div>
      </Link>
    </div>
  </div>
</template>
