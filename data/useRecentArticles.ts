import { computed, ref, ComputedRef, Ref } from 'vue';
import { Article } from '@/domain';
import { useAlgoliaSearch } from '@/data/useAlgoliaSearch';
import fakeArticles from './_articles';

export const useRecentArticles = async (section?: string): Promise<{
  articles: ComputedRef<Article[]>;
  refresh: () => void,
  isLoading: ComputedRef<boolean>;
}> => {
  const searchAlgolia = await useAlgoliaSearch();

  const data = ref(fakeArticles);
  
  const refresh = async () => {
    // get the last modified docs
    const objs = await searchAlgolia.search('');
    // take top 5
    const topFive = objs.hits.slice(0, 5);    
    // convert to expected type
    const finalList: { 
      id: string,
      title: string,
      description: string,
      path: string,
    }[] = [];
    for (let i = 0; i < topFive.length; i++) {
      const item = topFive[i];
      const { data: queryData } = await useAsyncData('recent-articles', () => queryContent().where({ objectID: item.objectID }).findOne());      
      finalList.push({ 
        id: queryData.value?._id, 
        title: queryData.value?.title, 
        description: queryData.value?.description, 
        path: queryData.value?._path 
      });
    };
    data.value = finalList;
  }

  const articles = computed(() => {    
    return (data.value || []).map((item: any) => Article.make(item));
  });

  return { articles, refresh, isLoading: computed(() => false) };
};
