<script lang="ts" setup>
  import ArticlesSection from '@/components/ArticlesSection.vue';
  import { Article } from '@/domain';

  const articles: Article[] = [
    {
      id: '1',
      title: 'How to interact with Archway dapps',
      description: 'A guide on how to interact with Archway DApps using Keplr and a Ledger device.',
      path: '',
    },
    {
      id: '2',
      title: 'Navigating Archway block explorers',
      description: 'Instructions for tracking transactions and account activities.',
      path: '',
    },
    {
      id: '3',
      title: 'Understanding Archway rewards system',
      description: 'Guide on how rewards are generated and managed.',
      path: '',
    },
  ];
</script>

<template>
  <ArticlesSection title="General Guides" :articles="articles" />
</template>
