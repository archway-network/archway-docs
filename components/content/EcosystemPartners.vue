<script setup lang="ts">
  import { PropType } from 'vue';

  import { EcosystemConfig, EcosystemPartner } from '@/config/ecosystem';
  import { useExternalJSON } from '@/data/useExternalJSON';

  const props = defineProps({
    type: { type: String as PropType<EcosystemPartner>, required: true },
  });

  const { data, isLoading } = await useExternalJSON(EcosystemConfig[props.type]);
</script>

<template>
  <slot :data="data" :isLoading="isLoading"></slot>
</template>
