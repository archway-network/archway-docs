<script setup lang="ts">
  import { gsap, ScrollTrigger } from 'gsap/all';

  import { useTOC } from '@/composables';

  const { toc, displayTOC } = useTOC();
  const route = useRoute();

  const ids = computed(() => {
    if (!toc?.value?.links) return [];

    const allIds: string[] = [];
    for (const item of toc.value.links) {
      allIds.push(item.id);
      if (item.children) {
        for (const children of item.children) {
          allIds.push(children.id);
        }
      }
    }
    return allIds;
  });

  gsap.registerPlugin(ScrollTrigger);

  onMounted(() => {
    setTimeout(() => {
      for (const item of ids.value) {
        ScrollTrigger.create({
          trigger: `#${item}`,
          start: a => {
            return a.trigger.getBoundingClientRect().top - 97 - 26;
          },
          end: a => {
            return a.trigger.getBoundingClientRect().bottom - 97 - 26 + 47;
          },
          onEnter: ({ trigger }) => {
            const el = gsap.utils.toArray(`.toc-item.${item}`);
            el[0].classList.add('selected');
          },
          onEnterBack: ({ trigger }) => {
            const el = gsap.utils.toArray(`.toc-item.${item}`);
            el[0].classList.add('selected');
          },
          onLeave: ({ trigger }) => {
            const el = gsap.utils.toArray(`.toc-item.${item}`);
            el[0].classList.remove('selected');
          },
          onLeaveBack: ({ trigger }) => {
            const el = gsap.utils.toArray(`.toc-item.${item}`);
            el[0].classList.remove('selected');
          },
        });
      }
    }, 400);
  });

  onUnmounted(() => {
    ScrollTrigger.getAll().forEach(trigger => {
      trigger.kill();
    });
  });
</script>

<template>
  <div class="w-[200px] flex-shrink-0" v-if="displayTOC">
    <TocItem :key="item.id" v-for="item in toc.links" :selectedItem="item" :selectedSection="route.hash" :mainSection="true" />
  </div>
</template>
