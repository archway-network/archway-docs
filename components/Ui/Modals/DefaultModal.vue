<script lang="ts">
  export default {
    inheritAttrs: false,
  };
</script>

<script lang="ts" setup>
  import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
  import { CloseIcon } from '@/components/Ui';

  defineProps({
    isOpen: { type: Boolean, default: false },
  });

  const attr = useAttrs();

  const emit = defineEmits(['close']);
</script>

<template>
  <ClientOnly>
    <TransitionRoot as="template" :show="isOpen">
      <Dialog as="div" class="relative z-50" @close="() => emit('close')">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-white bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center">
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel
                :class="[
                  'relative transform overflow-hidden rounded-2xl bg-white transition-all sm:my-8 sm:w-full max-w-2xl',
                  'shadow-[0px_60px_124px_rgba(0,0,0,0.16)]',
                  'flex flex-col min-h-[calc(100vh/2)]',
                ]"
                v-bind="attr"
              >
                <div class="absolute top-0 right-0 hidden pt-6 pr-6 sm:block">
                  <button type="button" class="text-black hover:text-black/80 focus:outline-none" @click="emit('close')">
                    <span class="sr-only">Close</span>
                    <CloseIcon class="w-6 h-6" />
                  </button>
                </div>
                <div class="flex-1 flex flex-col">
                  <slot></slot>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </ClientOnly>
</template>
