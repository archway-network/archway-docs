import { ref, Ref } from 'vue';

export const useModals = (open: boolean): { isOpen: Ref<boolean>; openModal: () => void; closeModal: () => void } => {
  const isOpen = ref(open);

  return {
    isOpen,
    openModal: () => {
      isOpen.value = true;
    },
    closeModal: () => {
      isOpen.value = false;
    },
  };
};
