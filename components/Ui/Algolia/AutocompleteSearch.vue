<script lang="ts" setup>
  import algoliasearch from 'algoliasearch/lite';

  import AutocompleteInput from '@/components/Ui/Algolia/AutocompleteInput.vue';
  import { ParsedContent } from '@nuxt/content/dist/runtime/types';

  defineProps({
    componentId: { type: String, default: 'autocomplete' },
    detached: { type: Boolean, default: false },
  });

  const { algolia } = useRuntimeConfig();

  const algoliaRef =
    algolia.appId === 'mock'
      ? undefined
      : algoliasearch(algolia.appId, algolia.searchApiKey, { headers: { 'x-algolia-application-id': algolia.appId } });

  const articles = ref<ParsedContent[] | undefined>();

  onMounted(() => {
    (async () => {
      articles.value = await queryContent('/').find();
    })();
  });

  const hasArticles = computed(() => (articles.value || [])?.length > 0);
</script>

<template>
  <div v-if="hasArticles">
    <AutocompleteInput
      :componentId="componentId"
      :detached="detached"
      :indexName="algolia.docIndex"
      :algoliaRef="algoliaRef"
      :articles="articles"
    />
  </div>
</template>
