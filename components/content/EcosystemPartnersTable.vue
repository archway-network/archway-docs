<script setup lang="ts">
  import { PropType } from 'vue';

  import { EcosystemPartnerType } from '@/types';

  const props = defineProps({
    type: { type: String as PropType<EcosystemPartnerType>, required: true },
  });

  const isRelayersTable = computed(() => {
    return props.type === EcosystemPartnerType.MainnetRelayers || props.type === EcosystemPartnerType.TestnetRelayers;
  });
</script>

<template>
  <EcosystemPartners :type="type" v-slot="{ data, isLoading }">
    <RelayersTable v-if="isRelayersTable" :relayers="data" :isLoading="isLoading" />
  </EcosystemPartners>
</template>
