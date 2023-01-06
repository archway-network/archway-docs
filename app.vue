<script setup>
  const nuxtApp = useNuxtApp();

  nuxtApp.hook('page:finish', () => {
    window.scrollTo(0, 0);
  });
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
