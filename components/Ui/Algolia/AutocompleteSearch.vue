<script lang="ts" setup>
  import algoliasearch from 'algoliasearch/lite';
  import AutocompleteInput from '@/components/Ui/Algolia/AutocompleteInput.vue';

  defineProps({
    componentId: { type: String, default: 'autocomplete' },
    detached: { type: Boolean, default: false },
  });
  const { algolia } = useRuntimeConfig();
  const algoliaRef = algoliasearch(algolia.appId, algolia.searchApiKey, { headers: { 'x-algolia-application-id': algolia.appId } });
  const articles = ref(await queryContent('/').find());
</script>

<template>
  <div>
    <AutocompleteInput :componentId="componentId" :detached="detached" :indexName="algolia.docIndex" :algoliaRef="algoliaRef" :articles="articles" />
  </div>
</template>
