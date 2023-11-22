<script setup lang="ts">
  // @ts-expect-error avoid lint error
  import markdownParser from '@nuxt/content/transformers/markdown';
  import { PropType } from 'vue';

  import { useRelayers } from '@/data';

  const props = defineProps({
    repoFiles: { type: Array as PropType<string[]>, required: true },
    networkType: { type: String, default: 'mainnet' },
  });

  // --------------------------------------------------------------------------------
  // Update here to display the chain names in a pretty format
  const prettyNames = {
    osmosistestnet: 'Osmosis',
    axelartestnet: 'Axelar',
    akashtestnet: 'Akash',
    agoric: 'Agoric',
    axelar: 'Axelar',
    bitcanna: 'Bitcanna',
    cosmoshub: 'Cosmos Hub',
    jackal: 'Jackal',
    juno: 'Juno',
    kujira: 'Kujira',
    noble: 'Noble',
    nois: 'Nois',
    osmosis: 'Osmosis',
    quicksilver: 'Quicksilver',
    umee: 'Umee',
  };
  // --------------------------------------------------------------------------------

  // Determine the path suffix based on the network type
const networkPath = computed(() => {
  switch (props.networkType) {
    case 'mainnet':
      return '_IBC';
    case 'testnet':
      return 'testnets/_IBC';
    case 'devnet':
      return 'devnets/_IBC';
    default:
      return '_IBC'; // Fallback, though ideally should not reach here due to prop validation
  }
});

  // Load data
  const { relayers } = await useRelayers(Object.values(props.repoFiles), networkPath.value);

  // Build markdown table
  const markdownHeader = `
| **Source Channel** | **Destination** | **Destination Channel** |
| :----------------- |:----------------|-------------------------|
`;
  const markdownContent = computed(
    () =>
      relayers.value
        ?.map(relayer =>
          relayer.channels
            .map(
              channel =>
                `| ${channel.chain_1.channel_id} | ${
                  Object.entries(prettyNames).find(item => item[0] === relayer.chain_2.chain_name)?.[1] || relayer.chain_2.chain_name
                } | ${channel.chain_2.channel_id} |`
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
