<script setup>
  import BaseButton from './BaseButton.vue';
</script>

<template>
  <BaseButton :class="['bg-orange text-white hover:bg-orange/80 hover:text-white', 'disabled:bg-transparent disabled:text-gray']">
    <slot></slot>
  </BaseButton>
</template>
