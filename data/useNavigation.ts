import { computed, ComputedRef, Ref } from 'vue';
import { Section } from '@/data';
import { NavigationItem } from '@/domain';

export const useNavigation: (section: Section) => Promise<{
  navigation: ComputedRef<NavigationItem[]>;
  isLoading: ComputedRef<boolean>;
}> = async (section: Section) => {
  const query = queryContent()
    .where({ _path: { $contains: section.path || '' } })
    .where({ parentSection: { $ne: '' } });
  const { data, pending } = await useAsyncData(`navigation-${section.id}`, () => fetchContentNavigation(query));

  const navigation = computed(() => {
    return ((data.value || [])?.[0]?.children || []).map(item => NavigationItem.make(item));
  });

  return { navigation, isLoading: computed(() => pending.value) };
};
