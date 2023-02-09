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
    <span class="flex" ref="selectedSlot" @mouseover="showIcon = true" @mouseleave="showIcon = false">
      <ContentSlot :use="$slots.default" />
      <div v-if="showIcon" class="flex absolute gap-x-1 p-8 w-[65ch] justify-end mt-[1.7142857em]">
        <TickIcon v-if="copied" />
        <CopyIcon v-if="showIcon && !copied" class="cursor-pointer" @click="copyText()" />
      </div>
    </span>
  </div>
</template>
