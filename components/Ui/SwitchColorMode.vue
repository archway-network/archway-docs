<script lang="ts" setup>
  import { useDark } from '@vueuse/core';
  import { LightModeIcon, DarkModeIcon } from '@/components/Ui';

  const isDark = useDark();

  const toggleDarkMode = () => {
    isDark.value = !isDark.value;
  };
</script>

<template>
  <button @click.prevent="toggleDarkMode">
    <DarkModeIcon class="w-6 h-6 text-white" v-if="isDark" />
    <LightModeIcon class="w-6 h-6 text-black/60" v-if="!isDark" />
  </button>
</template>
