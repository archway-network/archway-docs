import { computed, ref, ComputedRef, Ref } from 'vue';
import { ArticleInput } from '@/types';
import { Article } from '@/domain';
import { useAlgoliaSearch } from '@/data/useAlgoliaSearch';
import { SortingReplicas } from '@/domain/AlgoliaSearch';
/// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

export const useHighlightedArticles: (
  sortingReplica: SortingReplicas,
  section?: string
) => Promise<{
  articles: ComputedRef<Article[]>;
  refresh: () => Promise<void>;
  isLoading: ComputedRef<boolean>;
  search: (searchSection?: string) => Promise<Article[]>;
}> = async (sortingReplica: SortingReplicas, section?: string) => {
  const searchAlgolia = await useAlgoliaSearch(sortingReplica);
  const asyncKey = section ? `highlighted-articles-${section}-${sortingReplica}` : `highlighted-articles-${sortingReplica}`;
  const data = ref<Article[]>([]);
  const pending = ref(true);

  const refresh = async () => {
    data.value = await search(section);
  };

  const search = async (searchSection?: string) => {
    pending.value = true;
    // get the last modified docs
    const objs = searchSection ? await searchAlgolia.search('', `group:${searchSection}`) : await searchAlgolia.search('');
    // take top 5
    const topFive = objs.hits.slice(0, 5);
    // convert to expected type
    const finalList: ArticleInput[] = [];
    for (let i = 0; i < topFive.length; i++) {
      const item = topFive[i];
      const { data: queryData } = await useAsyncData(`${asyncKey}-${uuidv4()}`, () =>
        queryContent().where({ objectID: item.objectID }).findOne()
      );
      finalList.push({
        _id: queryData.value?._id,
        title: queryData.value?.title,
        description: queryData.value?.description,
        _path: queryData.value?._path,
      });
    }
    pending.value = false;

    return (finalList || []).map((item: any) => Article.make(item));
  };

  const articles = computed(() => {
    return data.value;
  });

  return { articles, refresh, isLoading: computed(() => pending.value), search };
};
