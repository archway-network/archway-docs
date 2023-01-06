import { computed, ComputedRef } from 'vue';
import { Article } from '@/domain';

export const useAboutArchwayArticles = async (): Promise<{
  articles: ComputedRef<Article[]>;
  isLoading: ComputedRef<boolean>;
}> => {
  const { data, pending } = await useAsyncData('overview-articles', () =>
    queryContent('/overview')
      .where({ parentSection: { $ne: '' } })
      .find()
  );

  const articles = computed(() => {
    return (data.value || []).map(item => Article.make(item));
  });

  return { articles, isLoading: computed(() => pending.value) };
};
