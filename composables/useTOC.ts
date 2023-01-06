import { computed, ComputedRef } from 'vue';

export const useTOC = (): {
  toc: any;
  displayTOC: ComputedRef<boolean>;
} => {
  const { page, toc } = useContent();

  const displayTOC = computed(() => !['/developers', '/validators', '/community'].includes(page.value._path));

  return { toc, displayTOC };
};
