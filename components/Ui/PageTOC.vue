<script setup lang="ts">
  import { gsap, ScrollTrigger } from 'gsap/all';

  import { useTOC } from '@/composables';

  const { toc, displayTOC } = useTOC();
  const route = useRoute();

  gsap.registerPlugin(ScrollTrigger);

  onMounted(() => {
    refreshAnimation();
  });

  watch(
    () => JSON.stringify(toc?.value?.links),
    () => refreshAnimation()
  );

  const refreshAnimation = () => {
    removeScrollTriggers();

    const marginPageHeader = 96; // 96px for the fixed header at the top
    const marginTop = 26; // 26px for scroll trigger to leave some additional margin

    setTimeout(() => {
      // Get the list of ids
      const ids: string[] = [];
      for (const item of toc.value.links) {
        ids.push(item.id);
        if (item.children) {
          for (const children of item.children) {
            ids.push(children.id);
          }
        }
      }

      let lastEnd = gsap.utils.toArray('#main-container')?.[0]?.getBoundingClientRect().bottom;

      // Go from last to first, saving the start of the each element to use as the next's end
      for (var i = ids.length - 1; i >= 0; i--) {
        const tocId = ids[i];

        ScrollTrigger.create({
          trigger: `#${tocId}`,
          start: (instance: any) => Math.max(instance.trigger?.getBoundingClientRect().top - marginPageHeader - marginTop, 0) || undefined,
          end: (instance: any) => {
            const oldLastEnd = lastEnd;
            lastEnd = instance.trigger?.getBoundingClientRect().top - marginPageHeader - marginTop - 1 || undefined;
            return oldLastEnd;
          },
          // Set the .selected class on scroll enter
          onEnter: () => gsap.utils.toArray(`.toc-item.${tocId}`)?.[0]?.classList.add('selected'),
          onEnterBack: () => gsap.utils.toArray(`.toc-item.${tocId}`)?.[0]?.classList.add('selected'),
          onLeave: () => gsap.utils.toArray(`.toc-item.${tocId}`)?.[0]?.classList.remove('selected'),
          onLeaveBack: () => gsap.utils.toArray(`.toc-item.${tocId}`)?.[0]?.classList.remove('selected'),
        });
      }
    }, 400);
  };

  const removeScrollTriggers = () => {
    ScrollTrigger.getAll().forEach((instance: any) => {
      instance.kill();
    });
  };

  onUnmounted(() => {
    removeScrollTriggers();
  });
</script>

<template>
  <div class="w-[200px] flex-shrink-0" v-if="displayTOC">
    <TocItem :key="item.id" v-for="item in toc.links" :selectedItem="item" :selectedSection="route.hash" :mainSection="true" />
  </div>
</template>
