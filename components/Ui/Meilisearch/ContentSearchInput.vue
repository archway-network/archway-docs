<script lang="ts" setup>
  import { ref } from 'vue';
  import { Combobox, ComboboxInput, ComboboxOptions, ComboboxOption, ComboboxButton } from '@headlessui/vue';
  import debounce from 'lodash.debounce';

  import { useArticles, useContentSearch } from '@/data';
  import PageInfo from './PageInfo.vue';
  import SearchKeysInfo from './SearchKeysInfo.vue';
  import { ContentMetadata } from '@/domain';

  const { data: articles, hasArticles } = await useArticles();

  const query = ref('');
  const selectedOption = ref();

  const { data, loading } = await useContentSearch(query);

  const debounceFunc = ref(debounce(event => (query.value = event.target.value), 400));

  const onChangeQuery = (event: Event) => {
    debounceFunc.value(event);
  };

  const onSelectOption = (item: ContentMetadata) => {
    if (!item) return;

    return navigateTo(articles.value?.find(article => article.objectID === item.objectID)?._path);
  };
</script>

<template>
  <div>
    <Combobox :modelValue="selectedOption" @update:modelValue="onSelectOption" nullable v-if="hasArticles">
      <div class="relative">
        <div class="flex justify-between items-center px-1 pr-4 min-w-45 h-12 bg-gray-100 dark:bg-black-100 rounded-2xl">
          <ComboboxInput
            class="w-full bg-transparent border-0 rounded-2xl py-0 h-12 placeholder-black/30 dark:placeholder-gray-800 focus:border-none focus:ring-transparent"
            @change="onChangeQuery"
            placeholder="Search"
          />
          <div
            class="flex flex-shrink-0 flex-row justify-between items-center space-x-1 text-black/30 hover:text-black dark:text-gray-100 hover:dark:text-white"
          >
            <UiIconsLoadingIcon v-if="loading" class="w-6 h-6 mr-2 animate-spin flex-shrink-0" />
            <ComboboxButton>
              <SearchKeysInfo />
            </ComboboxButton>
          </div>
        </div>
        <ComboboxOptions
          v-if="!loading && query"
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
