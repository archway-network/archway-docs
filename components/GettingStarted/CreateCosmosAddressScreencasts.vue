<script lang="ts" setup>
  import { YoutubeMovie } from '@/components/Ui';
</script>

<template>
  <section class="pt-12">
    <h2 class="heading-2">Getting Started</h2>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 pt-12">
      <YoutubeMovie
        class="w-full min-h-[200px] md:min-h-[415px] lg:min-h-[235px]"
        src="https://www.youtube.com/embed/TxkLv0ZhAtQ"
        title=""
      />
      <YoutubeMovie
        class="w-full min-h-[200px] md:min-h-[415px] lg:min-h-[235px]"
        src="https://www.youtube.com/embed/TxkLv0ZhAtQ"
        title=""
      />
      <YoutubeMovie
        class="w-full min-h-[200px] md:min-h-[415px] lg:min-h-[235px]"
        src="https://www.youtube.com/embed/TxkLv0ZhAtQ"
        title=""
      />
    </div>
  </section>
</template>
