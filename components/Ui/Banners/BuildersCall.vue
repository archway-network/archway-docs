<script lang="ts" setup>
  import { useConfig } from '@/composables';
  import WideFeaturedSection from '@/components/Home/WideFeaturedSection.vue';

  const config = useConfig();
</script>

<template>
  <WideFeaturedSection
    title="Building something?
      We want to hear about it."
    description="Join our Builders Calls on Discord and share with other developers what you’re up to."
    :url="config.externalLinks.DISCORD"
    label="Join Discord"
  >
    <img class="w-16 dark:hidden" src="@/assets/images/builders-call.png" />
    <img class="w-16 hidden dark:block" src="@/assets/images/builders-call-dark.png" />
  </WideFeaturedSection>
</template>
