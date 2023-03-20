<script lang="ts" setup>
  const props = defineProps({
    noOfTabs: { type: String, required: true },
  });

  const totalTabs = Array(Number(props.noOfTabs)).fill('');
  const selectedTab = ref<Number>(0);

  const switchTab = (value: Number) => {
    selectedTab.value = value;
  };
</script>

<template>
  <div class="prose dark:prose-invert">
    <div class="flex border border-solid border-gray-100 dark:border-black rounded-lg min-w-[246px] w-max">
      <div
        @click="switchTab(index)"
        class="flex items-center justify-center px-3 py-6 bg-white dark:bg-black cursor-pointer h-12 m-[5px] min-w-[116px] w-max"
        v-for="(item, index) in totalTabs"
        :key="index"
        :class="{
          'text-orange drop-shadow-[0_15px_54px_rgba(0,0,0,0.08)]': selectedTab === index,
          'text-gray-700': selectedTab !== index,
          'rounded-l-lg': index === 0,
          'rounded-r-lg': index === totalTabs.length - 1,
        }"
      >
        <ContentSlot :use="$slots[`title${index}`]" />
      </div>
    </div>
    <div class="mb-[27px]" v-for="(item, index) in totalTabs" :key="index" v-show="selectedTab === index">
      <ContentSlot :use="$slots[`desc${index}`]" />
    </div>
  </div>
</template>
