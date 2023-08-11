<script lang="ts" setup>
  import { PropType } from 'vue';

  import ArticlesSection from '@/components/ArticlesSection.vue';
  import { Article } from '@/domain';
  import { useArticles } from '@/data';

  const props = defineProps({
    section: { type: String as PropType<'developers' | 'validators' | 'community'>, required: true },
  });

  const { data: articles, loading } = await useArticles();

  const paths = computed(() => {
    switch (props.section) {
      case 'community':
        return [
          '/community/wallet-setup/keplr/keplr-setup',
          '/community/staking/archway-connect-staking',
          '/community/governance/vote/vote-connect',
          '/community/managing-tokens/bridge-tokens',
          '/community/contribute',
        ];
      case 'developers':
        return [
          '/developers/getting-started/understanding-gas-fees',
          '/developers/developer-tools/arch3js/introduction',
          '/developers/getting-started/setup',
          '/developers/guides/fee-grant/introduction',
          '/developers/rewards/managing-rewards',
        ];
      case 'validators':
        return [
          '/validators/running-a-node/install',
          '/validators/running-a-node/join-a-network/sync-from-genesis',
          '/validators/running-a-node/cosmovisor',
          '/validators/becoming-a-validator/running-a-validator-node',
          '/validators/becoming-a-validator/chain-upgrade',
        ];
      default:
        return [];
    }
  });

  const popularArticles = computed(() =>
    articles.value?.filter(item => paths.value.find(auxPath => auxPath === item._path)).map(item => Article.make(item)) || []
  );
</script>

<template>
  <div class="pt-16">
    <ArticlesSection title="Most Popular Articles" :articles="popularArticles" :loading="loading" />
  </div>
</template>
