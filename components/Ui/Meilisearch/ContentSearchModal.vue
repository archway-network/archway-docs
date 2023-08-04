<script lang="ts" setup>
  import { ref } from 'vue';
  import {
    TransitionChild,
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
    Dialog,
    DialogPanel,
    TransitionRoot,
  } from '@headlessui/vue';
  import debounce from 'lodash.debounce';

  import { useArticles, useContentSearch } from '@/data';
  import { ContentMetadata } from '@/domain';
  import PageInfo from './PageInfo.vue';

  defineProps({
    isOpen: { type: Boolean, default: false },
  });

  const { data: articles, hasArticles } = await useArticles();

  const query = ref('');
  const selectedOption = ref();

  const { data, loading } = await useContentSearch(query, true);

  const debounceFunc = ref(debounce(event => (query.value = event.target.value), 400));

  const onChangeQuery = (event: Event) => {
    debounceFunc.value(event);
  };

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
                <div class="flex flex-1 justify-between items-center min-w-45 h-12 bg-gray-100 dark:bg-black-100 rounded-2xl">
                  <ComboboxInput
                    class="w-full bg-transparent border-0 rounded-2xl py-0 px-4 h-12 placeholder-black/30 dark:placeholder-gray-800 focus:border-none focus:ring-transparent"
                    @change="onChangeQuery"
                    placeholder="Search"
                    @keyup.esc="$emit('close')"
                  />
                  <div
                    class="flex flex-shrink-0 flex-row justify-between items-center space-x-1 text-black/30 hover:text-black dark:text-gray-100 hover:dark:text-white"
                  >
                    <UiIconsLoadingIcon v-if="loading" class="w-6 h-6 mr-2 animate-spin flex-shrink-0" />
                  </div>
                </div>
                <div class="flex flex-0 justify-center items-center px-2 cursor-pointer" @click="$emit('close')">Cancel</div>
              </div>
              <ComboboxOptions
                static
                as="div"
                class="w-full h-full px-6 overflow-auto bg-white dark:bg-black text-base focus:outline-none z-50"
              >
                <div class="pt-2 pb-4 border-t border-black/30 dark:border-gray-600">
                  <div v-if="data?.length === 0 && query !== ''" class="relative cursor-default select-none pt-2 text-gray-700">
                    No matches found.
                  </div>
                  <ComboboxOption v-for="aux in data" as="template" :key="aux.objectID" :value="aux" v-slot="{ active }">
                    <PageInfo :value="aux" :active="active" />
                  </ComboboxOption>
                </div>
              </ComboboxOptions>
              <div class="flex pt-4 mx-6 mb-6 border-t border-black/30 text-black/30 dark:border-gray-600 dark:text-gray-600 space-x-6">
                <div class="flex items-center space-x-2">
                  <kbd class="flex justify-center items-center rounded-lg caption w-6 h-6 border dark:border-gray-600 dark:text-gray-600"
                    >↵</kbd
                  >
                  <span>to Select</span>
                </div>
                <div class="flex items-center space-x-2">
                  <kbd class="flex justify-center items-center rounded-lg caption w-6 h-6 border dark:!border-gray-600 dark:!text-gray-600"
                    >↑️</kbd
                  >
                  <kbd
                    class="flex justify-center items-center rounded-lg caption w-6 h-6 border !ml-1 dark:!border-gray-600 dark:!text-gray-600"
                    >↓</kbd
                  >
                  <span>to Navigate</span>
                </div>
                <div class="flex items-center space-x-2">
                  <kbd class="flex justify-center items-center rounded-lg text-2xl w-6 h-6 border dark:!border-gray-600 dark:!text-gray-600"
                    >␛</kbd
                  >
                  <span>to Close</span>
                </div>
              </div>
            </Combobox>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
