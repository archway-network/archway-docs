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
    algoliaRef: { type: Object, required: true },
    articles: { type: Array, required: true }
  },
  setup(props) {
    const { indexName, algoliaRef, articles } = props;
    
    onMounted(() => {
      autocomplete({
        container: '#autocomplete',
        openOnFocus: true,
        detachedMediaQuery: '',
        getSources({ query }) {
          console.log("index ref", indexName, algoliaRef);
          return [
            {
              sourceId: 'articles',
              getItems() {
                return getAlgoliaResults({
                  searchClient: algoliaRef,
                  queries: [
                    {
                      indexName: indexName,
                      query,
                      params: {
                        hitsPerPage: 10,
                        attributesToSnippet: ['title:10', 'description:35'],
                        snippetEllipsisText: '…',
                      },
                    },
                  ],
                });
              },
              templates: {
                item({ item, components }) {                  
                  const path = articles.find(article => article.objectID === item.objectID)?._path;
                  console.log("path", path);
                  return (
                    <div className="aa-ItemWrapper">
                      <div className="aa-ItemContent">
                        <div className="aa-ItemContentBody">
                          <a href={path}>
                            <div className="aa-ItemContentTitle">
                              <components.Snippet hit={item} attribute="title" />
                            </div>
                            <div className="aa-ItemContentDescription">
                              <components.Snippet
                                hit={item}
                                attribute="description"
                              />
                            </div>
                          </a>
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
