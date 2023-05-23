<script lang="ts" setup>
  import { YoutubeMovie } from '@/components/Ui';
</script>

<template>
  <section class="pt-12">
    <h2 class="heading-3">Getting Started</h2>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 pt-12">
      <YoutubeMovie
        class="w-full min-h-[200px] md:min-h-[415px] lg:min-h-[235px]"
        src="https://www.youtube.com/embed/ZS9o-Xsnupg"
        title="How to create a Cosmos Address using Keplr Wallet"
      />
      <YoutubeMovie
        class="w-full min-h-[200px] md:min-h-[415px] lg:min-h-[235px]"
        src="https://www.youtube.com/embed/TxkLv0ZhAtQ"
        title="How to create a Cosmos Address with Cosmostation"
      />
      <YoutubeMovie
        class="w-full min-h-[200px] md:min-h-[415px] lg:min-h-[235px]"
        src="https://www.youtube.com/embed/8_LwImbTtQM"
        title="How to create a Cosmos Address using Ledger"
      />
    </div>
  </section>
</template>
