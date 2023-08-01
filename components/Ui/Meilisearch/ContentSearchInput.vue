<script lang="ts" setup>
  import { ref, computed } from 'vue';
  import { Combobox, ComboboxInput, ComboboxOptions, ComboboxOption, ComboboxButton } from '@headlessui/vue';
  import { ParsedContent } from '@nuxt/content/dist/runtime/types';
  import debounce from 'lodash.debounce';

  import { useContentSearch } from '@/data';
  import PageInfo from './PageInfo.vue';
  import SearchKeysInfo from './SearchKeysInfo.vue';

  import { MeilisearchContentResult } from '@/types';

  onMounted(() => {
    (async () => {
      articles.value = await queryContent('/').find();
    })();
  });

  const articles = ref<ParsedContent[] | undefined>();
  const hasArticles = computed(() => (articles.value || [])?.length > 0);

  const query = ref('');
  const selectedOption = ref();

  const { data, loading } = await useContentSearch(query);

  const debounceFunc = ref(debounce(event => (query.value = event.target.value), 0));

  const onChangeQuery = (event: Event) => {
    debounceFunc.value(event);
  };

  const onSelectOption = (item: MeilisearchContentResult) => {
    if (!item) return;

    return navigateTo(articles.value?.find(article => article.objectID === item.objectID)?._path);
  };

  const onInputClick = (event: Event, isOpen: boolean) => {
    if (isOpen) event.stopPropagation();
  };
</script>

<template>
  <div>
    <Combobox :modelValue="selectedOption" @update:modelValue="onSelectOption" nullable v-if="hasArticles">
      <div class="relative">
        <ComboboxButton class="w-full" v-slot="{ open }">
          <div class="flex justify-between items-center px-1 pr-4 min-w-45 h-12 bg-gray-100 dark:bg-black-18 rounded-2xl">
            <ComboboxInput
              class="w-full bg-transparent border-0 rounded-2xl py-0 h-12 placeholder-black/30 dark:placeholder-gray-800 focus:border-none focus:ring-transparent"
              @change="onChangeQuery"
              @click="(event: Event) => onInputClick(event, open)"
              placeholder="Search"
            />
            <div
              class="flex flex-shrink-0 flex-row justify-between items-center space-x-1 text-black/30 hover:text-black dark:text-gray-100 hover:dark:text-white"
            >
              <UiIconsLoadingIcon v-if="loading" class="w-6 h-6 mr-2 animate-spin flex-shrink-0" />
              <SearchKeysInfo />
            </div>
          </div>
        </ComboboxButton>
        <ComboboxOptions
          v-if="!loading"
          class="absolute max-h-[600px] w-full px-4 pt-2 pb-4 overflow-auto rounded-md bg-white dark:bg-black text-base shadow-lg ring-1 ring-black dark:ring-gray-800 ring-opacity-5 focus:outline-none z-50"
        >
          <div v-if="data?.length === 0 && query !== ''" class="relative cursor-default select-none pt-2 text-gray-700">
            No matches found.
          </div>
          <ComboboxOption v-for="aux in data" as="template" :key="aux.objectID" :value="aux" v-slot="{ active }">
            <PageInfo :value="aux" :active="active" />
          </ComboboxOption>
        </ComboboxOptions>
      </div>
    </Combobox>
  </div>
</template>
