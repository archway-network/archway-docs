<script setup>
  import BaseButton from './BaseButton.vue';
</script>

<template>
  <BaseButton
    :class="[
      'h-12 w-12 !p-3 rounded-lg',
      'bg-gray-100 !text-black hover:bg-gray-300',
      'dark:bg-black-100 dark:!text-white dark:hover:bg-gray-500',
      'disabled:bg-transparent disabled:text-gray',
      'drop-shadow-[0_15px_54px_rgba(0,0,0,0.06)]',
    ]"
  >
    <slot></slot>
  </BaseButton>
</template>
