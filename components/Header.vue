<script setup>
  import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue';
  import { Link, SwitchColorMode, ArchwayBrand, ArchwayBrandAndLogo, ArchwayLogo, CloseIcon, MenuIcon } from '@/components/Ui';
  import BrandGithub from '@/components/Ui/Brands/Github.vue';

  const route = useRoute();
</script>

<template>
  <ClientOnly>
    <div class="fixed inset-x-0 bg-white dark:bg-black z-50">
      <div class="container">
        <Popover as="header" ref="header" :key="route.path" class="relative border-b border-gray-400">
          <div class="h-24 flex items-center py-4 lg:space-x-10">
            <div class="flex justify-start">
              <NuxtLink to="/">
                <span class="sr-only">Archway</span>
                <span class="flex items-center space-x-2">
                  <ArchwayLogo class="h-6" />
                  <ArchwayBrand class="h-6" />
                  <span class="text-gray-500">Docs</span>
                </span>
              </NuxtLink>
            </div>
            <div class="flex-1 hidden lg:flex justify-end items-center space-x-6">
              <Link href="https://github.com/archway-network" :social="true">
                <BrandGithub class="flex-shrink-0 w-6 h-6 text-gray-700" aria-hidden="true" />
              </Link>
              <SwitchColorMode />
              <Link href="https://archway.io">Back to Archway</Link>
            </div>
            <div class="flex-1 flex justify-end items-center lg:hidden">
              <PopoverButton
                class="w-10 h-10 bg-transparent text-black-warm rounded-full inline-flex items-center justify-center hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                <span class="sr-only">Open menu</span>
                <MenuIcon class="w-6 h-6" aria-hidden="true" />
              </PopoverButton>
            </div>
          </div>

          <PopoverPanel class="absolute top-0 inset-x-0 transition transform origin-top-right lg:hidden">
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div class="pt-4 pb-6 px-6">
                <div class="flex items-center justify-between">
                  <NuxtLink to="/">
                    <span class="sr-only">Archway</span>
                    <ArchwayBrandAndLogo />
                  </NuxtLink>
                  <div class="-mr-2">
                    <PopoverButton
                      class="w-10 h-10 bg-white text-black-warm rounded-full inline-flex items-center justify-center hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <span class="sr-only">Close menu</span>
                      <CloseIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <!-- <div class="mt-2">
                  <nav class="grid grid-cols-1 divide-y">
                    <AccordionMenu label="Developers" :items="developer" />
                    <Link class="py-4" href="/founders"> Founders </Link>
                    <Link class="py-4" href="/rewards"> Rewards </Link>
                    <AccordionMenu label="Network" :items="network" />
                    <AccordionMenu label="Community" :items="community" />
                  </nav>
                </div> -->
              </div>
            </div>
          </PopoverPanel>
        </Popover>
      </div>
    </div>
  </ClientOnly>
</template>
