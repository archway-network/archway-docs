<script lang="ts" setup>
  const validators = "validators";
</script>

<template>
  <div>
    <SectionsHero />
    <SectionsCategories />
    <SectionsPopularArticles :root-section="validators" />
  </div>
</template>
