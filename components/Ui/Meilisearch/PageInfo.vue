<script lang="ts" setup>
  import { PropType } from 'vue';

  import { ContentMetadata } from '@/domain';

  defineProps({
    value: { type: Object as PropType<ContentMetadata>, default: false },
    active: { type: Boolean, default: false },
  });
</script>

<template>
  <div
    class="relative cursor-default select-none p-4 mt-2 border border-gray-warm rounded-lg"
    :class="{
      'shadow-card dark:bg-black-100 !cursor-pointer': active,
    }"
  >
    <div>
      {{ value.title }}
    </div>
    <div class="caption text-gray-600 overflow-x-hidden overflow-ellipsis whitespace-nowrap">
      {{ value.description }}
    </div>
    <div
      class="absolute right-4 top-[calc(50%-10px)]"
      :class="{
        invisible: !active,
        visible: active,
      }"
    >
      ↵
    </div>
  </div>
</template>
