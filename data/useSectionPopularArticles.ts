import { computed, ref, ComputedRef, Ref } from 'vue';
import { Article } from '@/domain';
import fakeArticles from './_articles';

export const useSectionPopularArticles: (section?: string) => Promise<{
  articles: ComputedRef<Article[]>;
  isLoading: ComputedRef<boolean>;
}> = async (section?: string) => {
  const cacheKey = section ? `section-popular-articles-${section}` : 'popular-articles';
  // const { data, pending } = await useAsyncData(cacheKey, () => {});
  const data = ref(fakeArticles);

  const articles = computed(() => {
    return (data.value || []).map(item => Article.make(item));
  });

  return { articles, isLoading: computed(() => false) };
};
