<script lang="ts" setup>
  import { PageBreadcrumbs, PageTOC } from '@/components/Ui';
  import Navigation from '@/components/Navigation.vue';
</script>

<template>
  <div>
    <Header />
    <main class="flex-1 h-full container flex pt-[96px]">
      <div
        class="hidden xl:block xl:sticky xl:top-24 xl:h-[calc(100vh-6rem)] overflow-y-auto w-[304px] flex-shrink-0 border-r border-gray-400 py-8"
      >
        <Navigation />
      </div>
      <div class="flex-1 p-8">
        <div class="page-content flex-1 space-y-8">
          <PageBreadcrumbs />
          <slot />
        </div>
      </div>
      <div class="sticky top-24 py-8 h-[calc(100vh-6rem)] flex-shrink-0 overflow-y-auto overflow-x-visible">
        <ClientOnly>
          <PageTOC />
        </ClientOnly>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
  .page-content :deep() h2,
  .page-content :deep() h3 {
    scroll-margin-top: 7em;
  }
</style>
