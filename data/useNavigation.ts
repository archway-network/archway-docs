import { computed, ComputedRef, Ref } from 'vue';
import jsonQ from 'js-jsonq';
import { Section } from '@/data';
import { NavigationItem } from '@/domain';

export const useNavigation: (section: Section) => Promise<{
  navigation: ComputedRef<NavigationItem[]>;
  isLoading: ComputedRef<boolean>;
}> = async (section: Section) => {
  // const query = queryContent()
  //   .where({ _path: { $contains: section.path || '' } })
  //   .where({ parentSection: { $ne: '' } });

  const { data, pending } = await useAsyncData(`navigation-${section.id}`, () => fetchContentNavigation());

  const navigation = computed(() => {
    const q = new jsonQ(data.value || []);
    const parent = q.whereContains('_path', section.path).where('parentSection', '=', '').first();
    return new jsonQ(parent || { children: [] })
      .from('children')
      .where('_path', '!=', section.path)
      .fetch()
      .map((item: any) => NavigationItem.make(item));
  });

  return { navigation, isLoading: computed(() => pending.value) };
};
