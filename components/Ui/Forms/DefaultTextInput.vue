<script lang="ts" setup>
  import { computed, DefineComponent, PropType } from 'vue';
  import { Input, TextInput, TextInputLabel } from '@/components/Ui/Forms/TextInput';

  const props = defineProps({
    label: { type: String, default: undefined },
    placeholder: { type: String, default: undefined },
    icon: { type: Object as PropType<DefineComponent>, default: undefined },
    legend: { type: String, default: undefined },
    errors: { type: String, default: undefined },
    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  });

  const hasLabel = computed(() => props.label !== undefined);
  const hasIcon = computed(() => props.icon !== undefined);
  const hasLegend = computed(() => props.legend !== undefined);
  const hasErrors = computed(() => props.errors !== undefined);
</script>

<template>
  <TextInput>
    <TextInputLabel class="block pb-2 caption text-gray-600" v-if="label"> {{ label }}{{ required ? '*' : '' }} </TextInputLabel>
    <div class="relative" :class="{ 'mt-1': hasLabel }">
      <div class="relative">
        <Input
          type="text"
          :class="[
            'w-full h-14 flex items-center pl-4',
            { 'pr-10': hasIcon, 'pr-4': !hasIcon },
            'text-sm text-gray-600 placeholder-shown:text-sm placeholder-shown:text-gray-600',
            'border border-gray-100 rounded-lg',
            'focus:ring-0 focus:border-gray-400 focus-visible:outline-none',
          ]"
          :placeholder="placeholder"
          :required="required"
          :disabled="disabled"
        />
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4" v-if="hasIcon">
          <component :is="icon" class="w-4 h-4 text-gray-600" aria-hidden="true" />
        </div>
      </div>
    </div>
    <p class="pt-3 caption text-red" v-if="hasErrors">
      {{ errors }}
    </p>
    <p class="pt-3 caption text-gray-600" v-if="hasLegend">
      {{ legend }}
    </p>
  </TextInput>
</template>
