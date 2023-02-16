<script lang="ts" setup>
  import { gsap, ScrollTrigger } from 'gsap/all';

  import { PageBreadcrumbs, PageTOC } from '@/components/Ui';
  import Navigation from '@/components/Navigation.vue';
  import { useTOC, useCurrentPage } from '@/composables';

  const { toc, displayTOC } = useTOC();
  const { page } = useCurrentPage();

  const currentTitle = ref<string>(page.value.title);

  gsap.registerPlugin(ScrollTrigger);

  onMounted(() => {
    setTimeout(() => {
      refreshAnimation();
    }, 400);
  });

  watch(
    () => page.value.title,
    () => {
      currentTitle.value = page.value.title;
    }
  );

  watch(
    () => JSON.stringify(toc?.value?.links),
    () => {
      setTimeout(() => {
        refreshAnimation();
      }, 400);
    }
  );

  const refreshAnimation = () => {
    removeScrollTriggers();

    if (!displayTOC || !toc?.value?.links) return;

    const marginPageHeader = 96; // 96px for the fixed header at the top
    const marginTop = 20; // 26px for scroll trigger to leave some additional margin

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

    // End of component
    let lastEnd = gsap.utils.toArray('#main-container')?.[0]?.getBoundingClientRect().bottom;

    // Loop through titles, from first to last
    ids.forEach((tocId, index) => {
      // Set the .selected class on scroll enter
      const handleEnter = (element: any) => {
        gsap.utils.toArray(`.toc-item.${tocId}`)?.forEach((item: any) => item.classList.add('selected'));
        currentTitle.value = element?.trigger?.innerText || currentTitle.value;
      };
      // Remove the .selected class on leave
      const handleLeave = () => gsap.utils.toArray(`.toc-item.${tocId}`)?.forEach((item: any) => item.classList.remove('selected'));
      ScrollTrigger.create({
        trigger: `#${tocId}`,
        // Area starts at top of header with some margin (or first element starts at -1)
        start: (instance: any) =>
          index === 0 ? -1 : Math.max(instance.trigger?.getBoundingClientRect().top - marginPageHeader - marginTop, 0) || undefined,
        // Area ends at top of next header (or end of the component)
        end: () =>
          index < ids.length - 1
            ? gsap.utils.toArray(`#${ids[index + 1]}`)?.[0]?.getBoundingClientRect().top - marginPageHeader - marginTop - 1 || lastEnd
            : lastEnd,
        onEnter: handleEnter,
        onEnterBack: handleEnter,
        onLeave: handleLeave,
        onLeaveBack: handleLeave,
      });
    });
  };

  const handleToggleMobileToc = () => {
    ScrollTrigger.refresh();
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
  <div>
    <Header />
    <main id="main-container" class="flex-1 h-full container flex pt-[96px]">
      <div
        class="hidden lg:block lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] overflow-y-auto w-[304px] flex-shrink-0 border-r border-gray-400 dark:border-gray-900 py-8"
      >
        <Navigation class="pr-8" />
      </div>
      <div class="flex-1 p-8">
        <div class="page-content flex-1 space-y-8">
          <PageBreadcrumbs />
          <slot />
        </div>
      </div>
      <div class="hidden lg:block sticky top-24 py-8 h-[calc(100vh-6rem)] flex-shrink-0 overflow-y-auto overflow-x-hidden">
        <ClientOnly>
          <PageTOC />
        </ClientOnly>
      </div>
    </main>
    <Footer />
    <div v-if="displayTOC" class="sm:hidden fixed inset-x-0 bottom-0 z-50">
      <UiPageMobileTOC @toggle-mobile-top="handleToggleMobileToc" :title="currentTitle" />
    </div>
  </div>
</template>

<style scoped>
  /* Add margin to intrapage links moving scroll to content titles */
  .page-content :deep() h2 {
    scroll-margin-top: 3.5em;
  }
  .page-content :deep() h3 {
    scroll-margin-top: 7em;
  }
</style>
