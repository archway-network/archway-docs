<script lang="ts" setup>
  import { PropType } from 'vue';
  import { Link, ChevronRightIcon } from '@/components/Ui';
  import NavigationItem from '@/components/Navigation/NavigationItem.vue';
  import { Section } from '@/data';
  import { NavigationItem as NavigationItemType } from '@/domain';

  const props = defineProps({
    item: { type: Object as PropType<NavigationItemType>, required: true },
    selectedSection: { type: Object as PropType<string>, required: true },
    mainSection: { type: Boolean, required: false },
  });

  let doesSelectedItemChildExist = false;
  const doesChildExist = (dataItem: NavigationItemType) => {
    dataItem.children.forEach((data: NavigationItemType) => {
      if (data.children.length) {
        doesChildExist(data);
      }
      if (data.path === props.selectedSection) {
        doesSelectedItemChildExist = true;
      }
    });
  };

  doesChildExist(props.item);

  const shouldOpen = ref(props.selectedSection === props.item.path || doesSelectedItemChildExist);
  const isNestedChild = computed(() => props.item.children.length && !props.item.children.find(data => data.children.length));
</script>

<template>
  <div>
    <div v-if="item.children.length" class="flex items-center cursor-pointer" @click="shouldOpen = !shouldOpen">
      <p class="mr-2 ease-in-out duration-300" :class="{ 'rotate-90': shouldOpen }"><ChevronRightIcon class="w-4 h-4" /></p>
      <p class="text-black-light dark:text-gray-400">{{ item.title }}</p>
    </div>
    <div v-else>
      <Link :href="item.path"
        ><p :class="{ 'text-orange': selectedSection === item.path, 'text-black-light dark:text-gray-900': selectedSection !== item.path }">
          {{ item.title }}
        </p></Link
      >
    </div>
    <div class="pl-[8px] mt-2">
      <Transition :duration="300">
        <div :class="{ 'border-l border-gray-400 pl-[32px]': isNestedChild }" class="pt-2 space-y-4" v-if="item.children.length" v-show="shouldOpen">
          <NavigationItem :item="child" v-for="child in item.children" :selectedSection="selectedSection" />
        </div>
      </Transition>
    </div>
  </div>
</template>
