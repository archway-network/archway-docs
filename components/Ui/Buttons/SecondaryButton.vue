<script setup>
  import BaseButton from './BaseButton.vue';
</script>

<template>
  <BaseButton
    :class="[
      'bg-white text-orange hover:bg-transparent',
      'disabled:bg-transparent disabled:text-gray',
      'drop-shadow-[0_15px_54px_rgba(0,0,0,0.06)]',
    ]"
  >
    <slot></slot>
  </BaseButton>
</template>
