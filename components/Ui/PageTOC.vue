<script setup lang="ts">
  import { useTOC } from '@/composables';

  const { toc, displayTOC } = useTOC();
  const route = useRoute();
</script>

<template>
  <div v-if="displayTOC && toc?.links">
    <TocItem :key="item.id" v-for="item in toc.links" :selectedItem="item" :selectedSection="route.hash" :mainSection="true" />
  </div>
</template>
