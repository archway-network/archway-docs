<script lang="ts" setup>
  import { PropType, ref } from 'vue';
  import { TabData } from '@/domain';
  import { Tab } from '@/types';

  const props = defineProps({
    tabData: { type: Object as PropType<TabData[Tab]>, required: true },
  });

  const selectedTab = ref<Tab>({ id: props.tabData[0]?.id, title: props.tabData[0]?.title, description: props.tabData[0]?.description });

  const switchTab = (tabInfo: Tab) => {
    selectedTab.value = tabInfo;
  };
</script>

<template>
  <div class="prose">
    <div class="flex border border-solid border-gray-100 rounded-lg w-min">
      <div
        @click="switchTab(item)"
        class="flex items-center justify-center w-[116px] px-3 py-6 bg-white cursor-pointer h-12"
        v-for="(item, index) in tabData"
        :key="item.id"
        :class="{
          'text-orange drop-shadow-[0_15px_54px_rgba(0,0,0,0.08)]': selectedTab.id === item.id,
          'text-gray-700': selectedTab.id !== item.id,
          'rounded-l-lg': index === 0,
          'rounded-r-lg': index === tabData.length - 1,
        }"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="mt-6 mb-[27px]" v-for="item in tabData" :key="item.id" v-show="selectedTab.id === item.id">
      <h3>{{ item.description }}</h3>
    </div>
  </div>
</template>
