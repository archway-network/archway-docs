<script lang="ts" setup>
  import ArticlesSection from '@/components/ArticlesSection.vue';
  import { Article } from '@/domain';

  const articles: Article[] = [
    {
      id: 'community|send-tokens',
      title: 'How to send tokens',
      description: 'Discover how to send tokens within the Archway networks.',
      path: '/community/managing-tokens/send-tokens',
    },
    {
      id: 'community|wallet|archwayd|ledger|keplr',
      title: 'How to interact with Archway dApp',
      description: 'A guide on how to interact with Archway DApps using Keplr and a Ledger device.',
      path: '/community/wallet-setup/ledger-setup',
    },
    {
      id: 'community|governance|voting',
      title: 'How to participate in governance',
      description: 'Discover how to submit and vote on governance proposals.',
      path: '/community/governance/vote',
    },
    {
      id: 'community|staking',
      title: 'How to stake tokens',
      description: 'Learn how to stake and delegate tokens to secure the Archway network.',
      path: '/community/staking/overview',
    },
  ];
</script>

<template>
  <ArticlesSection title="Staking and Governance" :articles="articles" />
</template>
