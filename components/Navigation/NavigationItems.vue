<script lang="ts" setup>
  import { PropType } from 'vue';
  import NavigationItem from '@/components/Navigation/NavigationItem.vue';
  import { Section, useNavigation, useSections } from '@/data';

  const props = defineProps({
    selectedSection: { type: Object as PropType<Section>, required: true },
  });

  const { navigation } = await useNavigation(props.selectedSection);
  const route = useRoute();
</script>

<template>
  <div class="space-y-4">
    <NavigationItem :item="item" v-for="item in navigation" :selectedSection="route.path" :mainSection="true" />
  </div>
</template>
