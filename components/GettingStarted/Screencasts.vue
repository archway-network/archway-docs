<script lang="ts" setup>
  import { YoutubeMovie } from '@/components/Ui';
</script>

<template>
  <section class="pt-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
      <YoutubeMovie
        class="w-full min-h-[200px] lg:min-h-[360px]"
        src="https://www.youtube.com/embed/zuE8cJPzUnQ"
        title="An overview of Archway's usecases"
      />
      <YoutubeMovie
        class="w-full min-h-[200px] lg:min-h-[360px]"
        src="https://www.youtube.com/embed/JyK8OWMtWk0"
        title="Set up a Ledger device with Keplr"
      />
    </div>
  </section>
</template>
