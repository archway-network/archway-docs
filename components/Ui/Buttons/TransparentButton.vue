<script setup>
  import BaseButton from './BaseButton.vue';
</script>

<template>
  <BaseButton class="text-black bg-transparent hover:text-orange disabled:text-gray">
    <slot></slot>
  </BaseButton>
</template>
