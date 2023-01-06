<script lang="ts" setup>
  import { PropType } from 'vue';
  import NavigationItem from '@/components/Navigation/NavigationItem.vue';
  import { Section, useNavigation } from '@/data';

  const props = defineProps({
    selectedSection: { type: Object as PropType<Section>, required: true },
  });

  const { navigation } = await useNavigation(props.selectedSection);
</script>

<template>
  <div class="space-y-2">
    <NavigationItem :item="item" v-for="item in navigation" />
  </div>
</template>
