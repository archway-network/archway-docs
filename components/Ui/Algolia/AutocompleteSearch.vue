<script lang="ts" setup>
    import algoliasearch from 'algoliasearch/lite';
    import AutocompleteInput from '@/components/Ui/Algolia/AutocompleteInput.vue';
    
    const { algolia } = useRuntimeConfig();
    const algoliaRef = algoliasearch(algolia.appId, algolia.searchApiKey, { headers: { "x-algolia-application-id": algolia.appId } });
</script>

<template>
    <div>
        <AutocompleteInput :indexName="algolia.docIndex" :algoliaRef="algoliaRef" />
    </div>
</template>