<script lang="ts" setup>
    import algoliasearch from 'algoliasearch/lite';
    /// @ts-ignore
    import { AisInstantSearch, AisHits, AisPagination } from 'vue-instantsearch/vue3/es/index.js';
    import { history } from 'instantsearch.js/es/lib/routers';
    import { singleIndex } from 'instantsearch.js/es/lib/stateMappings';
    import AutocompleteInput from '@/components/Ui/Algolia/AutocompleteInput.vue';
    
    const { algolia } = useRuntimeConfig();
    const algoliaRef = algoliasearch(algolia.appId, algolia.searchApiKey, { headers: { "x-algolia-application-id": algolia.appId } });

    const routing = ref({
        router: history(),
        stateMapping: singleIndex(algolia.docIndex)
    });
</script>

<template>
    <div>
        <ais-instant-search :index-name="algolia.docIndex" :search-client="algoliaRef" :routing="routing">
            <AutocompleteInput :indexName="algolia.docIndex" />
            <ais-hits />
            <ais-pagination />
        </ais-instant-search>
    </div>
</template>