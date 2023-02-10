<script lang="ts" setup>
  import { computed } from 'vue';
  import { LoadingIcon } from '@/components/Ui';

  const props = defineProps({
    href: { type: [String], default: null },
    loading: { type: [Boolean], default: false },
  });

  const isLink = computed<boolean>(() => !!props.href);

  const className = [
    'h-12 px-6 inline-flex items-center justify-center whitespace-nowrap rounded-lg',
    'text-base leading-none hover:no-underline',
  ];
</script>

<template>
  <a :href="href" :class="className" v-if="isLink">
    <slot></slot>
  </a>
  <button :class="className" v-else>
    <span class="flex-1 flex justify-center items-center" v-if="loading">
      <LoadingIcon class="w-5 h-5 text-white dark:text-black animate-spin" />
    </span>
    <slot v-else></slot>
  </button>
</template>
