<script setup lang="ts">
  import { PropType } from 'vue';

  import constantineConfig from '@/config/constantine.config';
  import titusConfig from '@/config/titus.config';
  import triompheConfig from '@/config/triomphe.config';
  import { PrimaryButton } from '@/components/Ui';

  enum ChainType {
    MAINNET = 'mainnet',
    TESTNET = 'testnet',
    DEVNET = 'devnet',
  }

  const props = defineProps({
    chain: { type: String as PropType<ChainType>, default: 'mainnet' },
  });

  const addToKeplr = async () => {
    const config = {
      [ChainType.MAINNET]: triompheConfig,
      [ChainType.TESTNET]: constantineConfig,
      [ChainType.DEVNET]: titusConfig,
    }[props.chain];

    await window.keplr.experimentalSuggestChain(config);
  };
</script>

<template>
  <PrimaryButton @click="() => addToKeplr()">
    <slot></slot>
  </PrimaryButton>
</template>
