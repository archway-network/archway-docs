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
      '/developers/developer-tools/litmus',
      'Testing framework that facilitates integration and end-to-end testing of CosmWasm smart contracts',
      'Litmus',
      '/images/docs/tools//tools-litmus.png'
    )
  ];
</script>

<template>
  <div class="pt-16">
    <h2 class="heading-3 pb-8">Featured Tools</h2>
    <div class="space-y-4">
      <!-- Loop through each tool in the tools array -->
      <div 
        v-for="tool in tools" 
        :key="tool.title" 
        class="flex space-x-3 px-4 py-4 border border-transparent rounded-2xl bg-white dark:bg-black-100 shadow-card dark:shadow-black"
      >
        <div class="flex-shrink-0 min-w-0">
          <img class="w-[64px]" :src="tool.image" :alt="tool.title" />
        </div>
        <div class="space-y-2 min-w-0">
          <Link class="truncate" :href="tool.path">
            <h2>{{ tool.title }}</h2>
          </Link>
          <p class="caption text-gray-600 dark:text-gray-900">{{ tool.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>