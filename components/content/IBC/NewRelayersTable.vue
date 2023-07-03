<script setup lang="ts">
  // @ts-expect-error avoid lint error
  import markdownParser from '@nuxt/content/transformers/markdown';
  import { PropType } from 'vue';

  import { IBCRelayer } from '@/types';

  const props = defineProps({
    relayers: { type: Array as PropType<IBCRelayer[]>, required: true },
    isLoading: { type: Boolean, default: false },
  });

  // --------------------------------------------------------------------------------
  // Update here to add chain names with their chain id
  const chainIds = {
    Osmosis: 'osmo-test-5',
    Axelar: 'axelar-testnet-lisbon-3',
    'Cosmos Hub': 'theta-testnet-001',
  };
  // --------------------------------------------------------------------------------

  // Build markdown table
  const markdownHeader = `
| **Source Channel** | **Destination** | **Destination Chain ID**     | **Destination Channel** |
| :----------------- |:----------------|------------------------------|-------------------------|
`;
  const markdownContent = computed(() => {
    return (
      props.relayers
        ?.map(
          relayer =>
            relayer?.channels
              .map(
                channel =>
                  `| ${channel.chain_1.channel_id} | ${
                    Object.entries(chainIds).find(item => item[1] === relayer.chain_2.chain_name)?.[0] || ''
                  } | ${relayer.chain_2.chain_name} | ${channel.chain_2.channel_id} |`
              )
              .join('\n') || ''
        )
        .join('\n') || ''
    );
  });

  const parsedMarkdown = ref<any>();

  watch(
    () => markdownContent.value,
    async () => {
      if (!markdownContent.value || props.isLoading) return;
      const res = await markdownParser.parse('relayers-table', `${markdownHeader}${markdownContent.value}`);
      parsedMarkdown.value = res;
    },
    { immediate: true }
  );
</script>

<template>
  <ContentRendererMarkdown v-if="parsedMarkdown" :value="parsedMarkdown" />
</template>
