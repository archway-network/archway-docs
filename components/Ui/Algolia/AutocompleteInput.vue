<template>
  <div className="container">
    <div id="autocomplete" />
  </div>
</template>

<script lang="jsx" allowJs>
import { h, Fragment, render, onMounted } from 'vue';
import { autocomplete, getAlgoliaResults } from '@algolia/autocomplete-js';
import '@algolia/autocomplete-theme-classic';

export default {
  props: {
    indexName: { type: String, required: true },
    algoliaRef: { type: Object, required: true }
  },
  setup(props) {
    onMounted(() => {
      autocomplete({
        container: '#autocomplete',
        openOnFocus: true,
        detachedMediaQuery: '',
        getSources({ query }) {
          console.log("index ref", props.indexName, props.algoliaRef);
          return [
            {
              sourceId: 'articles',
              getItems() {
                return getAlgoliaResults({
                  searchClient: props.algoliaRef,
                  queries: [
                    {
                      indexName: props.indexName,
                      query,
                      params: {
                        hitsPerPage: 10,
                        attributesToSnippet: ['name:10', 'description:35'],
                        snippetEllipsisText: '…',
                      },
                    },
                  ],
                });
              },
              templates: {
                item({ item, components }) {
                  return (
                    <div className="aa-ItemWrapper">
                      <div className="aa-ItemContent">
                        <div className="aa-ItemContentBody">
                          <div className="aa-ItemContentTitle">
                            <components.Snippet hit={item} attribute="title" />
                          </div>
                          <div className="aa-ItemContentDescription">
                            <components.Snippet
                              hit={item}
                              attribute="description"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                },
              },
            },
          ];
        },
        renderer: { createElement: h, Fragment, render },
      });
    });
  },
};
</script>
