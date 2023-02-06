<script setup lang="ts">
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

  defineProps({
    title: { type: String, required: true },
  });

  defineEmits(['toggle-mobile-toc']);
</script>

<template>
  <div class="w-full border-t border-gray-100">
    <div class="w-full bg-white">
      <Disclosure v-slot="{ open }">
        <DisclosureButton @click="$emit('toggle-mobile-toc')" class="p-4 flex w-full justify-between items-center text-left">
          <span class="px-2">{{ title }}</span>
          <UiButtonsIconButton>
            <UiIconsChevronDownIcon :class="{ 'rotate-180 transform': open }" class="h-5 w-5 text-purple-500" />
          </UiButtonsIconButton>
        </DisclosureButton>
        <DisclosurePanel class="px-6 py-4 border-t border-gray-100 max-h-[50vh] overflow-y-auto">
          <ClientOnly>
            <UiPageTOC />
          </ClientOnly>
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>
</template>
