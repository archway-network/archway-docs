<script lang="tsx" setup>
  import { Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue';
  import { Section, useSections } from '@/data';
  import { ChevronDownIcon } from '@/components/Ui';

  const emit = defineEmits(['switch']);

  const router = useRouter();
  const { sections, selectedSection } = await useSections();

  const selectedWithDefault = computed(() => selectedSection.value || sections.value[0])

  watch(
    selectedWithDefault,
    (current, old) => {
      if (current === old) return;
      emit('switch', current);
    },
    { immediate: true }
  );

  const switchSection = (section: Section) => {
    if (!section?.path) return;

    router.push({ path: section.path });
  };
</script>

<template>
  <div>
    <Listbox v-slot="{ open }" :model-value="selectedWithDefault" @update:model-value="switchSection">
      <ListboxLabel class="block pb-2">I want to:</ListboxLabel>
      <div class="relative">
        <ListboxButton class="relative w-full cursor-default rounded-lg bg-gray-100 dark:bg-black-warm px-4 py-4 text-left focus:outline-none">
          <span class="block truncate caption" :class="{ 'text-gray-600 dark:text-gray-400': !open, 'text-orange': open }">{{ selectedWithDefault?.title }}</span>
          <span class="pointer-events-none flex items-center absolute inset-y-0 right-0 pr-2">
            <ChevronDownIcon class="w-4 h-4" :class="{ 'rotate-180 transform': open }" />
          </span>
        </ListboxButton>

        <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
          <ListboxOptions
            :class="[
              'absolute mt-2 max-h-90 overflow-auto px-4 py-4 space-y-1',
              'rounded-2xl bg-white dark:bg-black focus:outline-none shadow-[40px_64px_128px_-8px_rgba(0,0,0,0.14)] dark:shadow-[40px_64px_128px_-8px_rgba(255,255,255,0.14)]',
            ]"
          >
            <ListboxOption v-slot="{ active, selected }" v-for="section in sections" :key="section.title" :value="section" as="template">
              <li
                :class="[
                  active || selected ? 'bg-gray-100 dark:bg-black-warm text-orange' : 'bg-white dark:bg-black',
                  'relative cursor-default select-none rounded-lg',
                  'space-y-2 px-4 py-4',
                ]"
              >
                <span class="block caption">{{ section.title }}</span>
                <span class="block label text-gray-600 dark:text-gray-300">{{ section.description }}</span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>
