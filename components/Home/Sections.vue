<script setup>
  import { Link } from '@/components/Ui';
  import SectionImage from './SectionImage.vue';
  import DevelopersIllustration from '@/assets/images/developers-illustration.png';
  import ValidatorsIllustration from '@/assets/images/validators-illustration.png';
  import CommunityIllustration from '@/assets/images/community-illustration.png';
  import DarkDevelopersIllustration from '@/assets/images/dark-developers-illustration.png';
  import DarkValidatorsIllustration from '@/assets/images/dark-validators-illustration.png';
  import DarkCommunityIllustration from '@/assets/images/dark-community-illustration.png';
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-16">
    <Link href="/developers" class="rounded-2xl bg-white dark:bg-black-100 shadow-card dark:shadow-black px-6 py-8">
      <h3 class="text-gray-700 pb-4">Dapp Developers</h3>
      <SectionImage>
        <img class="w-[145px] dark:hidden" :src="DevelopersIllustration" />
        <img class="w-[145px] hidden dark:block" :src="DarkDevelopersIllustration" />
      </SectionImage>
      <h2 class="heading-3 pt-6 pb-2.5">Build a dapp</h2>
      <p class="text-gray-500 dark:text-gray-900">Get answers for your doubts and learn how to build a dapp on Archway.</p>
    </Link>
    <Link href="/validators" class="rounded-2xl bg-white dark:bg-black-100 shadow-card dark:shadow-black px-6 py-8">
      <h3 class="text-gray-700 pb-4">Node Operators</h3>
      <SectionImage>
        <img class="w-[197px] dark:hidden" :src="ValidatorsIllustration" />
        <img class="w-[197px] hidden dark:block" :src="DarkValidatorsIllustration" />
      </SectionImage>
      <h2 class="heading-3 pt-6 pb-2.5">Run a node</h2>
      <p class="text-gray-500 dark:text-gray-900">Learn, get clarity on what it takes and how to run your very own Archway node.</p>
    </Link>
    <Link href="/community" class="rounded-2xl bg-white dark:bg-black-100 shadow-card dark:shadow-black px-6 py-8">
      <h3 class="text-gray-700 pb-4">Community Members</h3>
      <SectionImage>
        <img class="w-[210px] dark:hidden" :src="CommunityIllustration" />
        <img class="w-[210px] hidden dark:block" :src="DarkCommunityIllustration" />
      </SectionImage>
      <h2 class="heading-3 pt-6 pb-2.5">Participate</h2>
      <p class="text-gray-500 dark:text-gray-900">Discover what and how you, as a community member, can make the difference.</p>
    </Link>
  </div>
</template>
