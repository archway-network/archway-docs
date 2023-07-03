<script lang="ts" setup>
  import { EcosystemPartner } from '@/config/ecosystem';
  import NewRelayersTable from '@/components/content/IBC/NewRelayersTable.vue';

  definePageMeta({
    layout: 'home',
  });
</script>

<template>
  <EcosystemPartners :type="EcosystemPartner.TestnetIBCRelayers" v-slot="{data, isLoading}">
    <NewRelayersTable :relayers="data" :isLoading="isLoading" />
  </EcosystemPartners>
  <HomeHero />
  <HomeSections />
  <HomeFeaturedSections />
  <HomeHighlightedArticles />
  <HomeLearnAboutArchway />
</template>
