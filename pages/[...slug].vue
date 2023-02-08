<script lang="ts" setup>
  import { useAlgoliaSearch } from '@/data';

  const searchAlgolia = await useAlgoliaSearch();

  onMounted(async () => {    
    const { objectID } = await queryContent(window.location.pathname).findOne();
    const doc = await searchAlgolia.findObject(item => item.objectID === objectID);
    
    await searchAlgolia.updateObjectsPartially([{
      objectID: doc.object.objectID,
      viewed: doc.object.viewed + 1
    }], false);
  });
</script>

<template>
  <div class="prose">
    <ContentDoc />
  </div>
</template>
