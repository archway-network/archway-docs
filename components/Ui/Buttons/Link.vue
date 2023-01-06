<script lang="ts" setup>
  import { computed } from 'vue';

  const props = defineProps({
    href: { type: [String], required: true },
    social: { type: [Boolean], default: false },
    externalIcon: { type: [Boolean], default: true },
  });

  const isExternal = computed<boolean>(() => /^(http|https):\/\//.test(props.href));
  const isAnchor = computed<boolean>(() => props.href.includes('#'));
  const isInternalRoute = !isExternal.value;
</script>

<template>
  <NuxtLink :to="href" class="text-black hover:text-black-warm" v-if="isInternalRoute">
    <slot />
  </NuxtLink>
  <a
    :href="href"
    class="text-black hover:text-black-warm"
    :class="{ external: isExternal && !social && externalIcon }"
    target="_blank"
    rel="noopener noreferrer"
    v-else
  >
    <slot />
  </a>
</template>

<style scoped>
  .external {
    position: relative;
    padding-right: 1em;
  }
  .external:after {
    content: '\2197';
    position: absolute;
    bottom: 0.166em;
    right: 0;
    font-size: 0.85em;
    line-height: 1;
  }
</style>
