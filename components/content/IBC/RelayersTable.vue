<script setup lang="ts">
  // @ts-expect-error avoid lint error
  import markdownParser from '@nuxt/content/transformers/markdown';
  import { PropType } from 'vue';

  import { useRelayers } from '@/data';

  const props = defineProps({
    repoFiles: { type: Array as PropType<string[]>, required: true },
  });

  // --------------------------------------------------------------------------------
  // Update here to add chain names with their chain id
  const chainIds = {
    Osmosis: 'osmo-test-5',
    Axelar: 'axelar-testnet-lisbon-3',
    'Cosmos Hub': 'theta-testnet-001',
  };
  // --------------------------------------------------------------------------------

  // Load data
  const { relayers } = await useRelayers(Object.values(props.repoFiles));

  // Build markdown table
  const markdownHeader = `
| **Source Channel** | **Destination** | **Destination Chain ID**     | **Destination Channel** |
| :----------------- |:----------------|------------------------------|-------------------------|
`;
  const markdownContent = computed(
    () =>
      relayers.value
        ?.map(relayer =>
          relayer.channels.map(
            channel =>
              `| ${channel.chain_1.channel_id} | ${
                Object.entries(chainIds).find(item => item[1] === relayer.chain_2.chain_name)?.[0] || ''
              } | ${relayer.chain_2.chain_name} | ${channel.chain_2.channel_id} |`
          ).join('\n')
        )
        .join('\n') || ''
  );

  const parsedMarkdown = ref<any>();

  watch(
    () => markdownContent.value,
    async () => {
      if (!markdownContent.value) return;
      parsedMarkdown.value = await markdownParser.parse('relayers-table', `${markdownHeader}${markdownContent.value}`);
    },
    { immediate: true }
  );
</script>

<template>
  <ContentRendererMarkdown v-if="parsedMarkdown" :value="parsedMarkdown" />
</template>
