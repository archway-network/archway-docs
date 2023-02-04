<template>
  <div ref="autocompleteContainer"></div>
</template>

<script lang="jsx" allowJs>
  import { h as createElement, Fragment, render } from 'vue';
  import { createWidgetMixin } from 'vue-instantsearch/vue3/es';
  import { connectSearchBox } from 'instantsearch.js/es/connectors';
  import { autocomplete } from '@algolia/autocomplete-js';
  import { createLocalStorageRecentSearchesPlugin } from '@algolia/autocomplete-plugin-recent-searches';
  import '@algolia/autocomplete-theme-classic';
  
  export default {
    props: {
      indexName: { type: String, required: true }
    },
    mixins: [createWidgetMixin({ connector: connectSearchBox })],
    mounted() {
      const { instantSearchInstance, $props } = this;
      console.log("indexName", $props.indexName);

      function setInstantSearchUiState({ query }) {
        instantSearchInstance.setUiState((uiState) => ({
          ...uiState,
          [$props.indexName]: {
            ...uiState[$props.indexName],
            // We reset the page when the search state changes
            page: 1,
            query,
          },
        }));
      }

      const recentSearchesPlugin = createLocalStorageRecentSearchesPlugin({
        key: 'recentSearch',
        limit: 3,
        transformSource({ source }) {
          return {
            ...source,
            onSelect({ item }) {
              setInstantSearchUiState({ query: item.label });
            },
          };
        },
      });

      const initialState = instantSearchInstance.mainIndex.getHelper()?.state || {};

      this.autocompleteInstance = autocomplete({
        container: this.$refs.autocompleteContainer,
        placeholder: 'Search',
        detachedMediaQuery: '',
        openOnFocus: '',
        plugins: [recentSearchesPlugin],
        initialState: { query: initialState.query || '' },
        onSubmit({ state }) {
          setInstantSearchUiState({ query: state.query });
        },
        onReset() {
          setInstantSearchUiState({ query: '' });
        },
        onStateChange({ prevState, state }) {
          if (prevState.query !== state.query) {
            setInstantSearchUiState({ query: state.query });
          }
        },
        // Use Vue implementation of createElement and Fragment
        // instead of those provided with Autocomplete
        renderer: { createElement, Fragment, render },
      });
    },
    beforeUnmount() {
      this.autocompleteInstance?.destroy();
    }
  };
</script>