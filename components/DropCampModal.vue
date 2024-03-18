<script setup>
  import { PrimaryButton, CloseIcon } from '@/components/Ui';
  import { useLocalStorage } from '@vueuse/core';

  const SHOW_DROPCAMP_MODAL = 'show-dropcamp-live-modal';

  const isOpen = useLocalStorage(SHOW_DROPCAMP_MODAL, true);

  const close = () => {
    isOpen.value = false;
  };
</script>

<template>
  <div class="fixed right-0 bottom-0 mx-4 md:mx-8 mb-8 z-20" v-if="isOpen">
    <div class="select-none bg-white dark:bg-black-warm p-4 rounded-lg shadow space-y-4 relative">
      <img src="/images/dropcamp.png" class="rounded-lg" />
      <div class="space-y-1">
        <h1 class="text-2xl">Drop Camp is here!</h1>
        <p class="label text-gray-700">Join the queue and be one of the first to get in!.</p>
      </div>
      <PrimaryButton class="w-full" href="https://connect.archway.io/dropcamp"> Go Camping ↗ </PrimaryButton>
      <div class="absolute -top-16 right-0 p-2 bg-black dark:bg-white rounded-full cursor-pointer" @click="close">
        <CloseIcon class="w-4 h-4 text-white dark:text-black" aria-hidden="true" />
      </div>
    </div>
  </div>
</template>
