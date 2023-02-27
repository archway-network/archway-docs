<script setup lang="ts">
  import { Link } from '@/components/Ui';

  const { prev, next } = useContent();
</script>
<template>
  <nav class="flex gap-4 mt-12">
    <Link class="rounded-2xl grow shrink basis-0 p-6 no-underline bg-gray-1100 dark:bg-black-100" v-if="prev" :href="prev._path"
      ><p class="my-0.5 font-medium">Previous</p>
      <p class="my-0.5 font-bold">{{ prev.title }}</p></Link
    >
    <Link class="rounded-2xl grow shrink basis-0 p-6 no-underline bg-gray-1100 dark:bg-black-100" v-if="next" :href="next._path"
      ><p class="my-0.5 font-medium">Next</p>
      <p class="my-0.5 font-bold">{{ next.title }}</p></Link
    >
  </nav>
</template>
