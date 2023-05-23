<script lang="ts" setup>
  import ArticlesSection from '@/components/ArticlesSection.vue';
  import { Article } from '@/domain';

  const articles: Article[] = [
    {
      id: 'overview|cosmos_ibc_cosmwasm',
      title: 'Cosmos SDK, IBC and CosmWasm',
      description: 'Overview of the tech powering Archway.',
      path: '/overview/cosmos_ibc_cosmwasm',
    },
    {
      id: 'overview|reward-types',
      title: 'Understanding Archway rewards system',
      description: 'Learn more on how rewards are generated and managed.',
      path: '/overview/rewards',
    },
    {
      id: 'community|wallet|navigating-an-archway-block-explorer',
      title: 'Navigating block explorers',
      description: 'Instructions for tracking transactions, account and network activities.',
      path: '/community/wallet-setup/navigating-an-archway-block-explorer',
    },
    {
      id: ' overview|about',
      title: 'A deep dive into Archway',
      description: 'Learn how Archway works under the hood.',
      path: '/overview/about',
    },
  ];
</script>

<template>
  <ArticlesSection title="General Guides" :articles="articles" />
</template>
