export const useKeydownEvent = (callback: (event: KeyboardEvent) => void) => {
  onMounted(() => {
    document.addEventListener('keydown', callback);
  });

  onUnmounted(() => {
    document.removeEventListener('keydown', callback);
  });
};
