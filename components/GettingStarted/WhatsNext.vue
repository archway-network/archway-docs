<script lang="tsx" setup>
  import { Link } from '@/components/Ui';
  import { EmailIcon, TwitterBrand, DiscordBrand } from '@/components/Ui';
  import { useConfig } from '@/composables';

  const config = useConfig();

  const steps = [
    {
      title: 'Twitter ' + '\uFE0E\u2197',
      description: 'Stay up to date with regular Archway updates.',
      url: config.externalLinks.TWITTER,
      icon: <TwitterBrand />,
    },
    {
      title: 'Discord ' + '\uFE0E\u2197',
      description: 'Chat with validators, community, and more.',
      url: config.externalLinks.DISCORD,
      icon: <DiscordBrand />,
    },
    {
      title: 'Get email updates ' + '\uFE0E\u2197',
      description: 'Important updates right in your inbox.',
      url: config.externalLinks.ARCHWAY_NEWSLETTER,
      icon: <EmailIcon />,
    },
  ];
</script>

<template>
  <section class="pt-24">
    <h2 class="heading-3">What's next?</h2>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 pt-12">
      <Link
        :href="url"
        class="flex space-x-4 bg-white dark:bg-black-18 rounded-2xl shadow-card dark:shadow-black py-10 px-6"
        :external-icon="false"
        v-for="{ title, description, url, icon } in steps"
      >
        <div class="flex-shrink-0">
          <component :is="icon" class="w-6 h-6" />
        </div>
        <div class="space-y-2.5">
          <h2 class="font-medium">{{ title }}</h2>
          <p class="caption text-gray-600 dark:text-gray-300">{{ description }}</p>
        </div>
      </Link>
    </div>
  </section>
</template>
