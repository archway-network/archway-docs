<script setup lang="ts">
  import { useTOC } from '@/composables';

  const { toc, displayTOC } = useTOC();
</script>

<template>
  <div class="w-[200px] flex-shrink-0" v-if="displayTOC">{{ toc }}</div>
</template>
