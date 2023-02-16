<template>
  <div class="auto-container min-w-38 bg-[#F7F7F7] rounded-2xl">
    <div :id="componentId" class="w-full"></div>
    <div class="keys">
      <kbd class="key">⌘</kbd>
      <kbd class="key">K</kbd>
    </div>
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
    articles: { type: Array, required: true },
    componentId: { type: String, default: 'autocomplete' },
    detached: { type: Boolean, default: false },
  },
  setup(props) {
    onKeyStroke(['Command', 'k'], (e) => {
      const btn = document.getElementsByClassName('aa-DetachedSearchButton');
      btn[0].click();
    });
    const { componentId, detached, indexName, algoliaRef, articles } = props;
    let lastRootDir = '';

    onMounted(() => {
      autocomplete({
        container: `#${componentId}`,
        openOnFocus: detached,
        detachedMediaQuery: detached ? '' : undefined,
        placeholder: detached ? undefined : 'Search',
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
  .keys {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;    
    margin-right: 6px !important;
  }
  .key {
    align-items: center!important;
    background-image: none!important;
    border: 1px solid #a5a5a5!important;
    border-radius: 0.5rem!important;
    display: flex!important;
    font-size: .875rem!important;
    height: 1.5rem!important;
    justify-content: center!important;
    line-height: 1.25rem!important;
    margin: 0!important;
    padding: 0!important;
    top: auto!important;
    width: 1.5rem!important;
    color: rgba(128,126,162,0.6);    
    margin-right: 6px !important;
  }
  .auto-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 4px;
    --aa-search-input-height: 48px;
  }
  .aa-DetachedSearchButton,
  .aa-Form { 
    border-radius: 1em;   
    background-color: rgb(247, 247, 247);
    border: none;
  }
  .aa-Input {
    width: 100%;
    padding: 0 1em;
  }
  .aa-DetachedSearchButton:focus,
  .aa-Form:focus-within {
    box-shadow: none;
  }
  .aa-DetachedSearchButtonIcon,
  .aa-InputWrapperPrefix {
    display: none;
  }
  .aa-DetachedSearchButtonPlaceholder {
    padding-left: 10px;
  }
</style>