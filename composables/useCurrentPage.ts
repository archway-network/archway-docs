import { computed, ComputedRef } from 'vue';

import { Article } from '@/domain';

export const useCurrentPage = (): {
  page: ComputedRef<Article>;
  isParentSection: ComputedRef<boolean>;
} => {
  const { page } = useContent();

  const currentPage = computed(() => Article.make(page.value));
  const isParentSection = computed(() => !page.value?.parentSection);

  return { page: currentPage, isParentSection };
};
