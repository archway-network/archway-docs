import { computed, ComputedRef } from 'vue';

export type Section = {
  id: string;
  title?: string;
  description: any;
  path: string;
};

export const useSections = async (): Promise<{
  sections: ComputedRef<Section[]>;
  selectedSection: ComputedRef<Section | undefined>;
  isLoading: ComputedRef<boolean>;
}> => {
  const route = useRoute();

  const { data, pending } = await useAsyncData('sections', () => queryContent().where({ parentSection: '' }).find());

  const sections = computed(() => {
    return (data.value || []).map(({ _id, title, description, _path }) => ({ id: _id, title, description, path: _path || '' }));
  });

  const selectedSection = computed(() => sections.value.find(({ path }) => route.path.includes(path || '')));

  return { sections, selectedSection, isLoading: computed(() => pending.value) };
};
