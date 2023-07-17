<script setup lang="ts">
  import { PropType } from 'vue';

  import { useExternalJSON } from '@/data/useExternalJSON';
  import { EcosystemPartners } from '@/domain';

  import { EcosystemPartnerType } from '@/types';

  const props = defineProps({
    type: { type: String as PropType<EcosystemPartnerType>, required: true },
  });

  const { data, isLoading } = await useExternalJSON(EcosystemPartners.getJSONFileUrls(props.type));
</script>

<template>
  <slot :data="data" :isLoading="isLoading"></slot>
</template>
