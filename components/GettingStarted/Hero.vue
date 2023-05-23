<script lang="ts" setup>
  import { YoutubeMovie } from '@/components/Ui';
</script>

<template>
  <section>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <h1 class="heading-1 pb-8">Welcome<br /><span class="text-orange">to Archway</span>.</h1>
        <p class="title-1">Learn how to set up and use the tools you need to be part of the Archway community.</p>
      </div>
      <YoutubeMovie
        class="w-full min-h-[200px] md:min-h-[415px] lg:min-h-[360px]"
        src="https://www.youtube.com/embed/Z9FLBDI91SM"
        title="Learn how to set up and use the tools you need to be part of the Archway community."
      />
    </div>
  </section>
</template>
