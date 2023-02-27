<script lang="ts" setup>
  import { computed, PropType } from 'vue';
  import { InfoIcon, StarIcon, SuccessIcon, WarningIcon } from '@/components/Ui';

  const props = defineProps({
    variant: { type: String as PropType<'default' | 'warning' | 'error' | 'success' | 'info'>, default: 'default' },
  });

  const isWarning = computed(() => props.variant === 'warning');
  const isInfo = computed(() => props.variant === 'info');
  const isError = computed(() => props.variant === 'error');
  const isSuccess = computed(() => props.variant === 'success');
</script>

<template>
  <div
    class="border-l-[3px] pl-8 space-y-6"
    :class="{
      'border-orange text-orange': isWarning,
      'border-blue text-blue': isInfo,
      'border-red text-red': isError,
      'border-green text-green': isSuccess,
      'border-gray-600 text-gray-600': !isWarning && !isError && !isSuccess,
    }"
  >
    <div class="not-prose dark:not-prose-invert flex items-center space-x-4">
      <InfoIcon class="w-4 h-6" v-if="isError || isInfo" />
      <SuccessIcon class="w-4 h-6" v-else-if="isSuccess" />
      <WarningIcon class="w-4 h-6" v-else-if="isWarning" />
      <StarIcon class="w-4 h-6" v-else />
      <div>
        <slot name="title" />
      </div>
    </div>
    <div class="pb-px">
      <ContentSlot :use="$slots.default" />
    </div>
  </div>
</template>
