<script lang="ts">
  export default {
    inheritAttrs: false,
  };
</script>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { TransitionChild, Combobox, ComboboxOptions, Dialog, DialogPanel, TransitionRoot } from '@headlessui/vue';
  import debounce from 'lodash.debounce';

  import { useArticles } from '@/data';
  import { ContentMetadata } from '@/domain';
  import { Link, NodeOpsLogo } from '@/components/Ui';

  defineProps({
    isOpen: { type: Boolean, default: false },
  });

  const { data: articles, hasArticles } = await useArticles();

  const selectedOption = ref();

  const onSelectOption = (item: ContentMetadata) => {
    if (!item) return;

    navigateTo(articles.value?.find(article => article.objectID === item.objectID)?._path);
    emit('close');
  };

  const emit = defineEmits(['close']);
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog :open="isOpen" as="div" @close="$emit('close')" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black dark:bg-white bg-opacity-25 dark:bg-opacity-25 transition-opacity" />
      </TransitionChild>
      <div class="fixed top-0 right-0 bottom-0 w-full sm:w-[600px] h-full">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0 scale-95"
          enter-to="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100 scale-100"
          leave-to="opacity-0 scale-95"
        >
          <DialogPanel class="w-full h-full flex flex-col transform bg-white dark:bg-black transition-all">
            <Combobox :modelValue="selectedOption" @update:modelValue="onSelectOption" nullable>
              <div class="px-6 pt-6 pb-4 flex space-x-4">
                <div class="flex flex-1 justify-between items-center">
                  <!-- <img class="w-[140px]" src="@/assets/images/nodeops.png" /> -->
                  <NodeOpsLogo class="h-12" />
                </div>
                <div class="flex flex-0 justify-center items-center px-2 cursor-pointer" @click="$emit('close')">Close</div>
              </div>

              <ComboboxOptions
                static
                as="div"
                class="w-full h-full px-6 overflow-auto bg-white dark:bg-black text-base focus:outline-none z-50"
              >
                <div class="pt-2 pb-4 border-t border-black/30 dark:border-gray-600">
                  <div class="flex-1 flex flex-col">
                    <slot></slot>
                  </div>
                </div>
              </ComboboxOptions>
              <div
                class="flex justify-end pt-4 mx-6 mb-6 border-t border-black/30 text-black/30 dark:border-gray-600 dark:text-gray-600 space-x-6"
              >
                <div class="flex items-center space-x-6 self-end">
                  <Link class="caption !text-gray-600 dark:hover:!text-white outline-none" href="https://playground-v2.nodeops.xyz/"
                    >Use Full Playground</Link
                  >
                  <Link class="caption !text-gray-600 dark:hover:!text-white outline-none" href="https://archway.nodeops.xyz"
                    >archway.nodeops.xyz</Link
                  >
                </div>
              </div>
            </Combobox>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
