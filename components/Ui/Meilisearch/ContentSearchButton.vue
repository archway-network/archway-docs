<script lang="ts" setup>
  import ContentSearchModal from './ContentSearchModal.vue';
  import SearchKeysInfo from './SearchKeysInfo.vue';
  import { useKeydownEvent, useModals } from '@/composables';

  const { isOpen, openModal, closeModal } = useModals(false);

  const eventToggleModal = (event: KeyboardEvent) => {
    if ((event.key === 'k' && event.ctrlKey) || (event.key === 'k' && event.metaKey)) {
      isOpen.value ? closeModal() : openModal();
    }
  };

  useKeydownEvent(eventToggleModal);
</script>

<template>
  <div
    id="open-search-modal"
    class="flex justify-between items-center p-4 min-w-45 h-12 bg-gray-100 dark:bg-black-100 rounded-2xl space-x-2 cursor-pointer"
    @click="openModal"
  >
    <div class="w-full flex items-center bg-transparent border-0 rounded-2xl py-0 h-12 text-black/30 dark:text-gray-800">Search</div>
    <SearchKeysInfo />
  </div>
  <ContentSearchModal :is-open="isOpen" @close="closeModal" v-if="isOpen" />
</template>
~~/composables/useKeyDownEvent
