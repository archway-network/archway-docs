<script lang="tsx" setup>
  import { Link, ArchwayLogo } from '@/components/Ui';
  import { useAboutArchwayArticles } from '@/data/useAboutArchwayArticles';
  import { CardIcon, CogIcon, DictionaryIcon, GlobeIcon, HeartIcon, ListIcon, PeopleIcon, QuestionIcon } from '@/components/Ui';

  const { articles } = await useAboutArchwayArticles();

  const getLogo = (logo?: string) => {
    switch (logo) {
      case 'ArchwayLogo':
        return ArchwayLogo;
      case 'CardIcon':
        return CardIcon;
      case 'CogIcon':
        return CogIcon;
      case 'DictionaryIcon':
        return DictionaryIcon;
      case 'GlobeIcon':
        return GlobeIcon;
      case 'HeartIcon':
        return HeartIcon;
      case 'ListIcon':
        return ListIcon;
      case 'PeopleIcon':
        return PeopleIcon;
      case 'QuestionIcon':
        return QuestionIcon;
      default:
        return ArchwayLogo;
    }
  };
</script>

<template>
  <div>
    <h2 class="heading-2 pb-5">Learn more about Archway</h2>
    <p>Archway is an incentivized smart contract platform that rewards developers.</p>
    <p>Explore our documentation and guides to level up your workflow.</p>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-x-8 lg:gap-y-6 pt-12">
      <Link
        :key="id"
        :href="path"
        class="flex space-x-4 bg-white dark:bg-black-18 rounded-2xl shadow-card dark:shadow-black py-10 px-6"
        v-for="{ id, title, description, path, logo } in articles"
      >
        <div class="flex-shrink-0">
          <component :is="getLogo(logo)" class="w-6 h-6" />
        </div>
        <div class="space-y-2.5">
          <h2 class="font-medium">{{ title }}</h2>
          <p class="caption text-gray-600 dark:text-gray-300">{{ description }}</p>
        </div>
      </Link>
    </div>
  </div>
</template>
