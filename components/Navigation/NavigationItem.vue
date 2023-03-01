<script lang="ts" setup>
  import { PropType } from 'vue';
  import { Link, ChevronRightIcon } from '@/components/Ui';
  import NavigationItem from '@/components/Navigation/NavigationItem.vue';
  import { NavigationItem as NavigationItemType } from '@/domain';

  const props = defineProps({
    item: { type: Object as PropType<NavigationItemType>, required: true },
    selectedSection: { type: String, required: true },
    mainSection: { type: Boolean, required: false },
  });

  const isOpen = ref<boolean>(false);

  // Checks if the current NavigationItem is the selected one, or has a selected children
  const isSelected = () => {
    return props.selectedSection === props.item.path || hasChildrenSelected(props.item);
  };

  // Checks if a NavigationItem has a selected children (recursive)
  const hasChildrenSelected = (dataItem: NavigationItemType) => {
    if (!dataItem?.children?.length) return false;

    for (const data of dataItem.children) {
      if (data.path === props.selectedSection || hasChildrenSelected(data)) return true;
    }

    return false;
  };

  // On mounted we check if the current NavigationItem is selected
  onMounted(() => {
    isOpen.value = isSelected();
  });

  // On selection change, check again if the current NavigationItem is now selected
  watch(
    () => props.selectedSection,
    () => {
      isOpen.value = isSelected() || isOpen.value;
    }
  );

  const isNestedChild = computed(() => props.item.children.length && !props.item.children.find(data => data.children.length));
</script>

<template>
  <div>
    <div v-if="item.children.length" class="flex items-center cursor-pointer" @click="isOpen = !isOpen">
      <p class="mr-2 ease-in-out duration-300 dark:text-gray-900" :class="{ 'rotate-90': isOpen }">
        <ChevronRightIcon class="w-4 h-4" />
      </p>
      <p class="text-black-light dark:text-gray-900">{{ item.title }}</p>
    </div>
    <div v-else>
      <Link :href="item.path"
        ><p
          class="pl-6"
          :class="[
            'hover:text-orange',
            { 'text-orange': selectedSection === item.path, 'text-black-light dark:text-gray-900': selectedSection !== item.path },
          ]"
        >
          {{ item.title }}
        </p></Link
      >
    </div>
    <div class="pl-[8px] mt-2">
      <Transition :duration="300">
        <div
          :class="{ 'border-l border-gray-400 dark:border-gray-900 dark:border-opacity-20': isNestedChild }"
          class="pt-2 space-y-4"
          v-if="item.children.length"
          v-show="isOpen"
        >
          <NavigationItem :item="child" v-for="child in item.children" :selectedSection="selectedSection" />
        </div>
      </Transition>
    </div>
  </div>
</template>
