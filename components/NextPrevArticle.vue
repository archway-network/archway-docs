<script setup lang="ts">
  import { onMounted } from 'vue';
  import { Link } from '@/components/Ui';

  const { prev, next } = useContent();
</script>
<template>
  <nav class="flex justify-between gap-4 mt-12">
    <Link class="w-1/2 flex flex-col space-y-1 rounded-2xl p-6 no-underline bg-gray-1100 dark:bg-black-100" :href="prev._path" v-if="prev">
      <span class="font-medium">Previous</span>
      <span class="font-bold">{{ prev.title }}</span>
    </Link>
    <Link class="w-1/2 flex flex-col space-y-1 rounded-2xl p-6 no-underline bg-gray-1100 dark:bg-black-100" :href="next._path" v-if="next">
      <span class="font-medium">Next</span>
      <span class="font-bold">{{ next.title }}</span>
    </Link>
  </nav>
</template>
