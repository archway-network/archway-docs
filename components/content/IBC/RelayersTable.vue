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
    'osmo-test-5': 'Osmosis',
    'axelar-testnet-lisbon-3': 'Axelar',
    'theta-testnet-001': 'Cosmos Hub',
    'osmosis-1': 'Osmosis',
    'axelar-dojo-1': 'Axelar',
    'cosmoshub-4': 'Cosmos Hub',
    'jackal-1': 'Jackal',
    'juno-1': 'Juno',
    'kaiyo-1': 'Kujira',
    'umee-1': 'Umee',
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
          relayer.channels
            .map(
              channel =>
                `| ${channel.chain_1.channel_id} | ${
                  Object.entries(chainIds).find(item => item[0] === relayer.chain_2.chain_name)?.[1] || ''
                } | ${relayer.chain_2.chain_name} | ${channel.chain_2.channel_id} |`
            )
            .join('\n')
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
