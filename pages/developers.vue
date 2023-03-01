<script lang="ts" setup>
  const developers = "developers";
</script>

<template>
  <div>
    <SectionsHero />
    <SectionsCategories />
    <SectionsPopularArticles :root-section="developers" />
  </div>
</template>
