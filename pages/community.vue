<script lang="ts" setup>
  const community = "community";
</script>

<template>
  <div>
    <SectionsHero />
    <SectionsCategories />
    <SectionsPopularArticles :root-section="community" />
  </div>
</template>
