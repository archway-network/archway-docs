<template>
  <div className="w-40">
    <div id="autocomplete" />
  </div>
</template>

<script lang="jsx" allowJs>
import { h, Fragment, render, onMounted } from 'vue';
import { autocomplete, getAlgoliaResults } from '@algolia/autocomplete-js';
import { onKeyStroke } from '@vueuse/core';
import '@algolia/autocomplete-theme-classic';

export default {
  props: {
    indexName: { type: String, required: true },
    algoliaRef: { type: Object, required: true },
    articles: { type: Array, required: true }
  },
  setup(props) {
    onKeyStroke(['Command', 'k'], (e) => {
      const btn = document.getElementsByClassName('aa-DetachedSearchButton');
      btn[0].click();
    });
    const { indexName, algoliaRef, articles } = props;
    let lastRootDir = '';

    onMounted(() => {
      autocomplete({
        container: '#autocomplete',
        openOnFocus: true,
        detachedMediaQuery: '',
        getSources({ query }) {
          return [
            {
              sourceId: 'articles',
              getItemUrl({ item }) {
                const path = articles.find(article => article.objectID === item.objectID)?._path;
                
                return path;
              },
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
                  const rootDir = item.objectID.split('|')[0];

                  if (!lastRootDir || lastRootDir != rootDir) { // start of new category section
                    lastRootDir = rootDir;
                    return (
                      <div>
                        <div className="flex !flex-col justify-start space-y-2">
                          <div className="pt-4">
                            <h1 className="text-lg font-bold">
                              {`${rootDir.charAt(0).toUpperCase()}${rootDir.slice(1)}`}
                            </h1>
                          </div >
                          <div className="aa-ItemWrapper">
                            <div className="aa-ItemContent">
                              <div className="pl-4">
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
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div className="aa-ItemWrapper">
                        <div className="aa-ItemContent">
                          <div className="pl-4">
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
                      </div>
                    );
                  }
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

<style>  
  .aa-DetachedSearchButton {
    background-color: rgb(247, 247, 247);
    border: 0;
    border-radius: 12px;    
  }
  .aa-DetachedSearchButtonIcon {
    display: none;
  }
  .aa-DetachedSearchButtonPlaceholder {
    padding-left: 10px;
  }
</style>