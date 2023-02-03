import { computed, ref, ComputedRef, Ref } from 'vue';
import { ArticleInput } from '@/types';
import { Article } from '@/domain';
import { useAlgoliaSearch } from '@/data/useAlgoliaSearch';
import { SortingReplicas } from '@/domain/AlgoliaSearch';

export const useSectionPopularArticles: (section?: string) => Promise<{
  articles: ComputedRef<Article[]>;
  refresh: () => void;
  isLoading: ComputedRef<boolean>;
}> = async (section?: string) => {
  const searchAlgolia = await useAlgoliaSearch();
  const asyncKey = section ? `most-popular-articles-${section}` : 'most-popular-articles';  
  const data = ref<ArticleInput[]>([]);
  const pending = ref(false);

  const refresh = async () => {
    pending.value = true;
    // get the last modified docs
    const objs = await searchAlgolia.search('', SortingReplicas.DocsByViewed);
    // take top 5
    const topFive = objs.hits.slice(0, 5);
    // convert to expected type
    const finalList: ArticleInput[] = [];
    for (let i = 0; i < topFive.length; i++) {
      const item = topFive[i];
      const { data: queryData } = await useAsyncData(asyncKey, () => queryContent().where({ objectID: item.objectID }).findOne());      
      finalList.push({ 
        _id: queryData.value?._id, 
        title: queryData.value?.title, 
        description: queryData.value?.description, 
        _path: queryData.value?._path 
      });
    };
    data.value = finalList;
    pending.value = false;
  }

  const articles = computed(() => {
    return (data.value || []).map(item => Article.make(item));
  });

  return { articles, refresh, isLoading: computed(() => pending.value) };
};
