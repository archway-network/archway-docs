<script lang="ts" setup>
  import { ref } from 'vue';
  import NavigationItems from '@/components/Navigation/NavigationItems.vue';
  import { Section } from '@/data';

  const selectedSection = ref<Section>();

  const switchSection = (section: Section) => {
    selectedSection.value = section;
  };
</script>

<template>
  <div>
    <SectionsToggle @switch="switchSection" />
    <NavigationItems :key="selectedSection.id" class="pt-6" :selected-section="selectedSection" v-if="!!selectedSection?.path" />
  </div>
</template>
