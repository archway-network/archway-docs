<script lang="ts" setup>
  import { ArchwayBrandAndLogo, Link } from '@/components/Ui';
  import { FooterNavigation } from '@/domain';

  const developer = FooterNavigation.developerResources();
  const network = FooterNavigation.networkResources();
  const community = FooterNavigation.communityResources();
  const socialMedia = FooterNavigation.socialMediaResources();
</script>

<template>
  <footer class="border-t border-gray-400 dark:border-gray-900">
    <div class="container py-10 lg:py-20 relative">
      <div>
        <div class="lg:flex">
          <div class="w-full lg:w-1/3 pb-12">
            <ArchwayBrandAndLogo />
          </div>
          <div class="w-full lg:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="flex flex-col space-y-3">
              <h4 class="caption font-bold">Developers</h4>
              <div :key="`footer-${label}`" v-for="{ label, url } in developer">
                <Link :href="url" class="caption"> {{ label }} </Link>
              </div>
            </div>
            <div class="flex flex-col space-y-3">
              <h4 class="caption font-bold">Network</h4>
              <div :key="`footer-${label}`" v-for="{ label, url } in network">
                <Link :href="url" class="caption">
                  {{ label }}
                </Link>
              </div>
            </div>
            <div class="flex flex-col space-y-3">
              <h4 class="caption font-bold">Community</h4>
              <div :key="`footer-${label}`" v-for="{ label, url } in community">
                <Link :href="url" class="caption">
                  {{ label }}
                </Link>
              </div>
            </div>
            <div class="flex flex-col space-y-3">
              <h4 class="caption font-bold">Social</h4>
              <div :key="`footer-${label}`" v-for="{ label, url, icon } in socialMedia">
                <Link :href="url" :social="true">
                  <div class="flex items-center space-x-2">
                    <component :is="icon" :key="`footer-${label}`" class="flex-shrink-0 w-6 h-6 text-gray-700" aria-hidden="true" />
                    <span class="caption">{{ label }}</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:flex pt-16 pb-16 lg:pb-4 space-y-4 lg:space-y-0">
        <div class="w-full lg:w-1/3 label text-gra-700">&copy; Archway 2022</div>
        <div class="w-full lg:w-2/3 flex flex-row space-x-6">
          <Link class="label text-gray-700" href="https://archway.io/privacy" :external-icon="false">Privacy Policy</Link>
          <Link class="label text-gray-700" href="https://archway.io/terms" :external-icon="false">Terms & Conditions</Link>
        </div>
      </div>
      <div class="pt-4 border-t border-black/20">
        <p class="label text-gray-700">
          The ARCH tokens will not be offered in the United States or to U.S. persons or to residents of certain other prohibited
          jurisdictions. <Link href="/overview/faq">Learn more here</Link>. The information provided in this
          website is for general informational purposes only. It does not constitute, and should not be considered, a formal offer to sell
          or a solicitation of an offer to buy any security in any jurisdiction, legal advice, investment advice, or tax advice. If you are
          in need of legal advice, investment advice or tax advice, please consult with a professional adviser. The Archway protocol is
          under development and is subject to change. As such, the protocol documentation and contents of this website may not reflect the
          current state of the protocol at any given time. The protocol documentation and website content are not final and are subject to
          change.
        </p>
      </div>
    </div>
  </footer>
</template>
