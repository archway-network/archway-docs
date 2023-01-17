<script setup lang="ts">
  import { Link } from '@/components/Ui';
  import { PropType, ref } from 'vue';
  import { PageTOC } from '@/domain';
  import TocItem from '@/components/Toc/TocItem.vue';

  const props = defineProps({
    selectedItem: { type: Object as PropType<PageTOC>, required: true },
    selectedSection: { type: Object as PropType<string>, required: true },
    mainSection: { type: Boolean, required: false },
  });

  const selectedItemID = computed(() => `#${props.selectedItem.id}`);
</script>

<template>
  <div
    :key="selectedItemID"
    :class="{
      'border-orange': selectedSection === selectedItemID,
      'pl-[24px]': selectedItem.children,
    }"
    class="border-l"
  >
    <div :class="{ 'pl-[24px]': !mainSection }">
      <Link :href="selectedItemID"
        ><p
          :class="{
            'text-orange': selectedSection === selectedItemID,
            'pl-[24px]': !selectedItem.children,
            'text-black-light': selectedSection !== selectedItemID,
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
