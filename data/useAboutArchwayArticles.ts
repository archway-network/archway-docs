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
    const fetchedArticles = (data.value || []).map(item => Article.make(item));
    
    // Scavenger hunt article information
    const newArticle = Article.make({
      _id: 'scavenger-hunt',
      title: 'Scavenger Hunt',
      description: 'Congratulations on finding the third clue! Keyword #3 is “DEVELOPER REWARDS”. Click on this module to go to the fourth clue\'s location!',
      _path: 'https://archway.io/ecosystem',
      logo: 'ScavengerHuntIcon',
    });

    return [...fetchedArticles, newArticle];
  });

  return { articles, isLoading: computed(() => pending.value) };
};
