<script lang="ts" setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
  import { Link, ChevronDownIcon } from '@/components/Ui';

  import { MenuItem } from '@/types';

  interface FlyOutMenuProps {
    label: string;
    items: MenuItem[];
  }

  const props = defineProps<FlyOutMenuProps>();
</script>

<template>
  <Disclosure v-slot="{ open }">
    <DisclosureButton :class="['group flex justify-between items-center py-4', 'text-black hover:no-underline focus:outline-none']">
      <span>{{ label }}</span>
      <ChevronDownIcon class="w-6 h-6" :class="{ 'rotate-180 transform': !open }" aria-hidden="true" />
    </DisclosureButton>

    <DisclosurePanel as="div" class="grid grid-cols-1">
      <div :key="`accordion-menu-${label}-${item.label}`" class="py-4" v-for="item in items">
        <Link class="text-black hover:no-underline focus:outline-none" :href="item.url">
          {{ item.label }}
        </Link>
      </div>
      <slot name="footer"></slot>
    </DisclosurePanel>
  </Disclosure>
</template>
