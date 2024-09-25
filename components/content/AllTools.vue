<script lang="ts" setup>
  import { Link } from '@/components/Ui';

  // Tool class definition
  class Tool {
    constructor(
      public title: string,
      public path: string,
      public description: string,
      public label: string,
      public image: string // Image path for the tool
    ) {}

    static make(attributes: any) {
      return new Tool(
        attributes?.title || '',
        attributes?.path || '',
        attributes?.description || '',
        attributes?.label || '',
        attributes?.image || ''
      );
    }
  }

  // Array of tool objects
  const tools = [
    new Tool(
      'Archway Developer CLI',
      '/developers/developer-tools/developer-cli',
      'Build, deploy, interact with smart contracts',
      'Archway Developer CLI',
      '/images/docs/tools/tools-archway-developer-cli.png'
    ),
    new Tool(
      'Arch3.js',
      '/developers/developer-tools/arch3js/introduction',
      'JavaScript library for interacting with the Archway Protocol',
      'Arch3.js',
      '/images/docs/tools//tools-arch3js.png'
    ),
    new Tool(
      'Litmus',
      '/',
      'Testing framework that facilitates integration and end-to-end testing of CosmWasm smart contracts',
      'Litmus',
      '/images/docs/tools//tools-litmus.png'
    ),
    new Tool(
      'Archwayd',
      '/developers/developer-tools/archwayd',
      'The archwayd binary is the core implementation of the Archway protocol',
      'Archwayd',
      '/images/docs/tools//tools-archwayd.png'
    ),
    new Tool(
      'Arch3.rs',
      '/',
      'Rust library for interacting with the Archway Protocol',
      'Arch3.rs',
      '/images/docs/tools//tools-arch3rs.png'
    ),
    new Tool(
      'Relayer Exporter',
      '/',
      'Monitor and export key metrics for IBC relayers on the Archway blockchain.',
      'Relayer Exporter',
      '/images/docs/tools//tools-relayer-exporter.png'
    ),
    new Tool(
      'Validator Exporter',
      '/',
      'Monitoring tool for Archway blockchain validators',
      'Validator Exporter',
      '/images/docs/tools//tools-validator-exporter.png'
    ),
    new Tool(
      'Network Registry',
      '/',
      'JavaScript library for interacting with the Archway Protocol',
      'Network Registry',
      '/images/docs/tools//tools-network-registry.png'
    ),
    new Tool(
      'Archway Multisig',
      '/',
      'The archwayd binary is the core implementation of the Archway protocol',
      'Archway Multisig',
      '/images/docs/tools//tools-archway-multisig.png'
    ),
    new Tool(
      'Keyring Go',
      '/',
      'Go-based library designed to provide secure storage and handling of cryptographic keys',
      'Keyring Go',
      '/images/docs/tools//tools-keyring-go.png'
    ),
    new Tool(
      'Crates',
      '/',
      'Rust packages that offer reusable code to streamline the development of smart contracts',
      'Crates',
      '/images/docs/tools//tools-archway-crates.png'
    ),
  ];
</script>

<template>
  <div class="pt-16">
    <div class="space-y-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
        <!-- Loop through each tool in the tools array -->
        <div 
          v-for="tool in tools" 
          :key="tool.title" 
          class="px-4 py-4 border border-transparent rounded-2xl bg-white dark:bg-black-100 shadow-card dark:shadow-black"
        >
          <div class="flex-shrink-0 min-w-0">
            <img class="w-[64px] my-0" :src="tool.image" :alt="tool.title" />
          </div>
          <div class="">
            <Link class="no-underline" :href="tool.path">
              <h3>{{ tool.title }}</h3>
            </Link>
            <p class="caption text-gray-600 dark:text-gray-900">{{ tool.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>