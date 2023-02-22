<template>
  <div class="flex justify-between items-center pr-4 min-w-45 bg-gray-100 dark:bg-black-18 rounded-2xl">
    <div :id="componentId" class="w-full"></div>
    <div class="flex flex-row justify-between items-center space-x-1">
      <kbd class="key">⌘</kbd>
      <kbd class="key">K</kbd>
    </div>
  </div>
</template>

<script lang="jsx" allowJs>
  import { h, Fragment, render, onMounted } from 'vue';
  import { autocomplete, getAlgoliaResults } from '@algolia/autocomplete-js';
  import { onKeyStroke } from '@vueuse/core';
  import './AlgoliaCustomTheme.scss';

  export default {
    props: {
      indexName: { type: String, required: true },
      algoliaRef: { type: Object, required: true },
      articles: { type: Array, required: true },
      componentId: { type: String, default: 'autocomplete' },
      detached: { type: Boolean, default: false },
    },
    setup(props) {
      onKeyStroke(['Command', 'k'], e => {
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

                    if (!lastRootDir || lastRootDir != rootDir) {
                      // start of new category section
                      lastRootDir = rootDir;
                      return (
                        <div className="flex !flex-col justify-start space-y-2">
                          <div className="pt-4">
                            <h1 className="text-lg font-bold">{`${rootDir.charAt(0).toUpperCase()}${rootDir.slice(1)}`}</h1>
                          </div>
                          <div className="aa-ItemWrapper">
                            <div className="aa-ItemContent">
                              <div className="pl-4">
                                <div className="aa-ItemContentBody">
                                  <a href={path}>
                                    <div className="aa-ItemContentTitle">
                                      <components.Snippet hit={item} attribute="title" />
                                    </div>
                                    <div className="aa-ItemContentDescription">
                                      <components.Snippet hit={item} attribute="description" />
                                    </div>
                                  </a>
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
                                    <components.Snippet hit={item} attribute="description" />
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  },
                  noResults() {
                    return 'No matches found.';
                  },
                  footer() {
                    return (
                      <div class="flex pt-4 mx-6 mb-6 border-t border-black/30 text-black/30 space-x-6">
                        <div class="flex items-center space-x-2">
                          <kbd class="key !text-base">↵</kbd>
                          <span>to Select</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <kbd class="key !text-base">↑️</kbd>
                          <kbd class="key !text-base !ml-1">↓</kbd>
                          <span>to Navigate</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <kbd class="key !text-2xl">␛</kbd>
                          <span>to Close</span>
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

<style>
  .key {
    @apply flex justify-center items-center rounded-lg caption w-6 h-6 text-black/30 border border-black/30;
  }
  .dark .key {
    @apply text-gray-100 border-gray-100;
  }
  /* .aa-DetachedSearchButton,
  .aa-Form {
    border-radius: 1em;
    border: none;
    @apply bg-gray-100 text-black/30;
  }
  .dark .aa-DetachedSearchButton,
  .dark .aa-Form {
    @apply bg-black-18 text-gray-100;
  }
  .dark .aa-ClearIcon {
    @apply text-gray-100;
  }
  .aa-Input {
    width: 100%;
    padding: 0 1em;
    @apply caret-white text-white placeholder-white;
  }
  .dark .aa-Input {
    @apply caret-white text-white placeholder-white;
  }
  .dark .aa-DetachedContainer {
    --aa-background-color-rgb: 0, 0, 0;
  }
  .dark .aa-Panel {
    --aa-background-color-rgb: 24, 24, 24;
  }
  .dark .aa-DetachedCancelButton {
    @apply text-white;
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
  .dark .aa-Panel {
    @apply text-gray-100;
  }
  .dark .aa-PanelLayout .aa-ItemContentDescription {
    @apply text-gray-100;
  }
  .dark .aa-GradientBottom {
  } */
</style>
