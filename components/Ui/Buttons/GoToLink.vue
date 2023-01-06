<script setup>
  import { ChevronRightIcon } from '@/components/Ui';
  import Link from './Link.vue';

  defineProps({
    href: { type: [String], required: true },
  });
</script>

<template>
  <Link :href="href" :external-icon="false">
    <span class="flex items-center space-x-2">
      <span>
        <slot></slot>
      </span>
      <ChevronRightIcon class="w-4 h-4" />
    </span>
  </Link>
</template>
