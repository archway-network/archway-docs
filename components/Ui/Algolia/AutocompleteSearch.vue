<script lang="ts" setup>
    import algoliasearch from 'algoliasearch/lite';
    import AutocompleteInput from '@/components/Ui/Algolia/AutocompleteInput.vue';
    
    const { algolia } = useRuntimeConfig();
    const algoliaRef = algoliasearch(algolia.appId, algolia.searchApiKey, { headers: { "x-algolia-application-id": algolia.appId } });
    const articles = ref(await queryContent('/').find());    
</script>

<template>
    <div>
        <AutocompleteInput :indexName="algolia.docIndex" :algoliaRef="algoliaRef" :articles="articles" />
    </div>
</template>