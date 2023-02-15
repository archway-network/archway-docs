<script lang="ts" setup>
  definePageMeta({
    layout: 'home',
  });
</script>

<template>
  <main>
    <div class="space-y-12">
      <div>
        <h3 class="title-3">404</h3>
        <h1 class="hero-1 uppercase">You're probably a web3 pioneer</h1>
      </div>
      <h2 class="heading-2 text-gray-600 dark:text-gray-900">Your curiosity is appreciated, but this page does not exist (yet).</h2>
      <UiButtonsPrimaryButton @click="$router.go(-1)">Go back</UiButtonsPrimaryButton>
    </div>
  </main>
</template>
