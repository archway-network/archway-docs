<script lang="tsx" setup>
  import { ArchwayBrandAndLogo, Link } from '@/components/Ui';
  import { useConfig } from '@/composables';
  import { FooterNavigation } from '@/domain';

  import { MenuItem } from '@/types';

  const config = useConfig();

  const navigation = new FooterNavigation(config.externalLinks, { features: config.features });
  const learn = navigation.learnResources();
  const developer = navigation.developerResources();
  const network = navigation.networkResources();
  const community = navigation.communityResources();
  const legal = navigation.legalResources();
  const social = navigation.socialMediaResources();

  const Block = ({ title, items }: { title: string; items: MenuItem[] }) => (
    <div class="flex flex-col space-y-2.5">
      <h4 class="caption font-semibold dark:text-white">{title}</h4>
      {items.map(({ label, url }) => (
        <div>
          <Link class="caption !text-black hover:!text-orange dark:!text-white  dark:hover:!text-orange" href={url}>
            {label}
          </Link>
        </div>
      ))}
    </div>
  );
</script>

<template>
  <footer class="pt-12 md:pt-24">
    <div class="container py-10 lg:py-20 relative">
      <div>
        <ArchwayBrandAndLogo />
      </div>
      <div class="pt-12 md:pt-16">
        <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-8">
          <Block title="Learn" :items="learn" />
          <Block title="Developers" :items="developer" />
          <Block title="Network" :items="network" />
          <Block title="Community" :items="community" />
          <Block title="Legal" :items="legal" />
        </div>
      </div>
      <div class="pt-12 md:pt-8">
        <div class="flex flex-col-reverse md:flex-row md:items-center space-y-reverse space-y-4 md:space-y-0">
          <div class="flex-1 small">&copy; Archway Foundation {{ `${new Date().getFullYear()}` }}</div>
          <div class="flex space-x-6">
            <Link class="!text-gray-800 dark:!text-gray-700" :href="url" :external-icon="false" v-for="{ url, icon } in social">
              <component :is="icon" class="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
      <div class="pt-8">
        <p class="small">
          <strong>
            The ARCH tokens will not be offered in the United States or to U.S. persons or to residents of certain other prohibited
            jurisdictions.
          </strong>
          <Link class="!text-black hover:!text-orange dark:!text-white dark:hover:!text-orange" href="https://docs.archway.io/overview/faq">
            Learn more here
          </Link>
          The information provided in this website is for general informational purposes only. It does not constitute, and should not be
          considered, a formal offer to sell or a solicitation of an offer to buy any security in any jurisdiction, legal advice, investment
          advice, or tax advice. If you are in need of legal advice, investment advice or tax advice, please consult with a professional
          adviser. The Archway protocol is under development and is subject to change. As such, the protocol documentation and contents of
          this website may not reflect the current state of the protocol at any given time. The protocol documentation and website content
          are not final and are subject to change.
        </p>
      </div>
    </div>
  </footer>
</template>
