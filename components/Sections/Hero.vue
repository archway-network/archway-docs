<script lang="ts" setup>
  import { computed } from 'vue';
  import DevelopersIllustration from '@/assets/images/developers-illustration.png';
  import ValidatorsIllustration from '@/assets/images/validators-illustration.png';
  import CommunityIllustration from '@/assets/images/community-illustration.png';
  import DarkDevelopersIllustration from '@/assets/images/dark-developers-illustration.png';
  import DarkValidatorsIllustration from '@/assets/images/dark-validators-illustration.png';
  import DarkCommunityIllustration from '@/assets/images/dark-community-illustration.png';

  const route = useRoute();

  const title = computed(() => {
    return {
      developers: 'dapp developer',
      validators: 'node operator',
      community: 'community member',
    }[route.name as string];
  });

  const description = computed(() => {
    return {
      developers: 'Are you looking for more information<br/>or comprehensive guides to help you get started?',
      validators: 'Trying to install and run an Archway node?<br />Or interested in becoming a validator?',
      community: 'How can we help you be part of the network?',
    }[route.name as string];
  });

  const image = computed(() => {
    return {
      developers: {
        src: DevelopersIllustration,
        darkSrc: DarkDevelopersIllustration,
        right: '70px',
        height: '80%',
      },
      validators: {
        src: ValidatorsIllustration,
        darkSrc: DarkValidatorsIllustration,
        right: '0',
        height: '100%',
      },
      community: {
        src: CommunityIllustration,
        darkSrc: DarkCommunityIllustration,
        right: 0,
        height: '90%',
      },
    }[route.name as string];
  });
</script>

<template>
  <div class="bg-gray-100 dark:bg-black-warm rounded-2xl px-6 md:px-8 py-12 relative">
    <h1 class="heading-1 relative z-20">
      Welcome,<br />
      <span class="text-orange"> {{ title }} </span>{{ '.' }}
    </h1>
    <p class="title-1 pt-8 relative z-20" v-html="description" />
    <img
      class="hidden sm:block dark:!hidden h-5/6 absolute bottom-0 z-10"
      :src="image?.src"
      :style="{ height: image?.height, right: image?.right }"
    />
    <img
      class="hidden dark:sm:block h-5/6 absolute bottom-0 z-10"
      :src="image?.darkSrc"
      :style="{ height: image?.height, right: image?.right }"
    />
  </div>
</template>
