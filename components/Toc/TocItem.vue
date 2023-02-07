<script setup lang="ts">
  import { PropType, ref } from 'vue';

  import { Link } from '@/components/Ui';
  import { PageTOC } from '@/domain';
  import TocItem from '@/components/Toc/TocItem.vue';

  const props = defineProps({
    selectedItem: { type: Object as PropType<PageTOC>, required: true },
    selectedSection: { type: String, required: true },
    mainSection: { type: Boolean, required: false },
  });

  const selectedItemID = computed(() => `#${props.selectedItem.id}`);
</script>

<template>
  <div
    :key="selectedItemID"
    :class="[
      `toc-item ${props.selectedItem.id}`,
      {
        'pl-[24px]': selectedItem.children,
      },
    ]"
    class="border-l"
  >
    <div :class="{ 'pl-[24px]': !mainSection }">
      <Link :href="selectedItemID"
        ><p
          :class="{
            'pl-[24px]': !selectedItem.children,
            'text-black-light dark:text-gray-400': selectedSection !== selectedItemID,
          }"
          class="min-h-[40px] items-center flex"
        >
          {{ selectedItem.text }}
        </p></Link
      >
    </div>
  </div>
  <TocItem :key="selectedItemID" v-for="item in selectedItem.children" :selectedItem="item" :selectedSection="selectedSection" />
</template>

<style scoped>
  /* When the selected class is added by the gsap scroll trigger, apply orange colors */
  .toc-item.selected {
    @apply border-orange;
  }
  .toc-item.selected div a p {
    @apply text-orange;
  }
</style>
