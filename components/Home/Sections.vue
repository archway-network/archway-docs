<script setup>
  import { Link } from '@/components/Ui';
  import SectionImage from './SectionImage.vue';
  import DevelopersIllustration from '@/assets/images/developers-illustration.png';
  import ValidatorssIllustration from '@/assets/images/validators-illustration.png';
  import CommunityIllustration from '@/assets/images/community-illustration.png';
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-16">
    <Link href="/developers" class="rounded-2xl bg-white shadow px-6 py-8">
      <h3 class="text-gray-700 pb-4">Dapp Developers</h3>
      <SectionImage>
        <img class="w-[145px]" :src="DevelopersIllustration" />
      </SectionImage>
      <h2 class="heading-3 pt-6 pb-2.5">Build a dapp</h2>
      <p class="text-gray-500">Get answers for your doubts and learn how to build a dapp on Archway.</p>
    </Link>
    <Link href="/validators" class="rounded-2xl bg-white shadow px-6 py-8">
      <h3 class="text-gray-700 pb-4">Node Operators</h3>
      <SectionImage>
        <img class="w-[197px]" :src="ValidatorssIllustration" />
      </SectionImage>
      <h2 class="heading-3 pt-6 pb-2.5">Run a node</h2>
      <p class="text-gray-500">Learn, get clarity on what it takes and how to run your very own Archway node.</p>
    </Link>
    <Link href="/community" class="rounded-2xl bg-white shadow px-6 py-8">
      <h3 class="text-gray-700 pb-4">Community Members</h3>
      <SectionImage>
        <img class="w-[210px]" :src="CommunityIllustration" />
      </SectionImage>
      <h2 class="heading-3 pt-6 pb-2.5">Participate</h2>
      <p class="text-gray-500">Discover what and how you, as a community member, can make the difference.</p>
    </Link>
  </div>
</template>
