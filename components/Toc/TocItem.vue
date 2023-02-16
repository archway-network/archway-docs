<script setup lang="ts">
  import { PropType } from 'vue';

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
        'pl-6': selectedItem.children,
      },
    ]"
    class="border-l"
  >
    <div :class="{ 'pl-6': !mainSection }">
      <Link :href="selectedItemID"
        ><p
          :class="{
            'pl-6': !selectedItem.children,
            'text-black-light dark:text-gray-900': selectedSection !== selectedItemID,
          }"
          class="py-2 items-center flex"
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
