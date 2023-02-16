<script setup>
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
  import { Link, SwitchColorMode, ArchwayBrand, ArchwayLogo, CloseIcon, MenuIcon, SearchIcon } from '@/components/Ui';
  import AutocompleteSearch from '@/components/Ui/Algolia/AutocompleteSearch.vue';
  import BrandGithub from '@/components/Ui/Brands/Github.vue';

  const openSearch = () => {
    const btn = document.getElementsByClassName('aa-DetachedSearchButton');
    btn[0].click();
  };
</script>

<template>
  <ClientOnly>
    <div class="fixed inset-x-0 bg-white dark:bg-black z-50">
      <div class="container">
        <div class="relative border-b border-gray-400 dark:border-gray-900 h-24 flex items-center py-4 lg:space-x-10">
          <div class="flex justify-start">
            <NuxtLink to="/" class="dark:hover:text-gray-400">
              <span class="sr-only">Archway</span>
              <span class="flex items-center space-x-2">
                <ArchwayLogo class="h-6" />
                <ArchwayBrand class="h-6" />
                <span class="text-gray-500 dark:text-gray-800">Docs</span>
              </span>
            </NuxtLink>
          </div>
          <div class="flex-1 hidden lg:flex justify-end items-center space-x-6">
            <Link href="https://github.com/archway-network" :social="true">
              <BrandGithub class="flex-shrink-0 w-6 h-6 text-black/60 dark:text-white" aria-hidden="true" />
            </Link>
            <SwitchColorMode />
            <AutocompleteSearch detached />
            <Link href="https://archway.io" :external-icon="false">Back to Archway</Link>
          </div>
          <div class="flex-1 flex justify-end items-center lg:hidden space-x-2">
            <UiButtonsIconButton aria-hidden="true">
              <SearchIcon @click="openSearch" class="h-6 w-6" />
            </UiButtonsIconButton>
            <Popover class="relative" v-slot="{ open }">
              <PopoverButton
                class="bg-transparent text-black rounded-full inline-flex items-center justify-center hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                <span class="sr-only">Open menu</span>
                <UiButtonsIconButton aria-hidden="true" :class="{ 'bg-black text-white hover:bg-black-warm': open }">
                  <CloseIcon v-if="open" class="h-6 w-6" />
                  <MenuIcon v-else class="h-6 w-6" />
                </UiButtonsIconButton>
              </PopoverButton>
              <PopoverPanel class="fixed mt-[97px] inset-0 bg-white dark:bg-black">
                <div class="container my-4">
                  <Navigation />
                </div>
              </PopoverPanel>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
