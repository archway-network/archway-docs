<script lang="ts" setup>
  import { computed } from 'vue';
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
      developers: 'Are you looking for clarifications,<br />or a full guide to get you started?',
      validators: 'Trying to install and run an Archway node?<br />Or interested in becoming a validator?',
      community: 'How can we help you be part of the network?',
    }[route.name as string];
  });
</script>

<template>
  <div class="bg-gray-100 rounded-2xl px-6 md:px-8 py-12">
    <h1 class="heading-1">
      Welcome,<br />
      <span class="text-orange"> {{ title }} </span>{{ '.' }}
    </h1>
    <p class="title-1 pt-8" v-html="description" />
  </div>
</template>
