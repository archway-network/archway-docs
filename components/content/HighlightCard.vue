<script lang="ts" setup>
  import Vue from 'vue';
  import { PropType, ref } from 'vue';
  import { CopyIcon, TickIcon } from '@/components/Ui';

  const selectedSlot = ref();
  const showIcon = ref(false);
  let copied = ref(false);

  const copyText = async () => {
    try {
      copied.value = true;
      await navigator.clipboard.writeText(selectedSlot.value.textContent);
      setTimeout(() => (copied.value = false), 1000);
    } catch (e) {
      console.error(e);
    }
  };
</script>
<template>
  <div class="rounded-2xl">
    <div class="flex relative" ref="selectedSlot" @mouseover="showIcon = true" @mouseleave="showIcon = false">
      <ContentSlot :use="$slots.default" />
      <div v-if="showIcon" class="flex absolute right-0 p-8 pb-0 justify-end mt-4">
        <TickIcon v-if="copied" />
        <CopyIcon v-if="showIcon && !copied" class="cursor-pointer" @click="copyText()" />
      </div>
    </div>
  </div>
</template>
