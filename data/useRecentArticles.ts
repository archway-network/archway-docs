import { computed, ref, ComputedRef, Ref } from 'vue';
import { Article } from '@/domain';
import fakeArticles from './_articles';

export const useRecentArticles: () => Promise<{
  articles: ComputedRef<Article[]>;
  isLoading: ComputedRef<boolean>;
}> = async (section?: string) => {
  // const { data, pending } = await useAsyncData('recent-articles', () => {});
  const data = ref(fakeArticles);

  const articles = computed(() => {
    return (data.value || []).map(item => Article.make(item));
  });

  return { articles, isLoading: computed(() => false) };
};
