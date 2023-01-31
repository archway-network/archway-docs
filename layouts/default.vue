<script lang="ts" setup>
  import { PageBreadcrumbs, PageTOC } from '@/components/Ui';
  import Navigation from '@/components/Navigation.vue';
</script>

<template>
  <div>
    <Header />
    <main class="flex-1 h-full container flex pt-[96px]">
      <div class="hidden xl:block w-[304px] flex-shrink-0 border-r border-gray-400 py-8">
        <Navigation />
      </div>
      <div class="flex-1 pl-8 py-8">
        <div class="flex space-x-8">
          <div class="flex-1 space-y-8">
            <PageBreadcrumbs />
            <slot />
          </div>
          <PageTOC />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
