<script lang="ts" setup>
  import { useAlgoliaSearch } from '@/data';
  import Page404 from '@/pages/404.vue'

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
  <div class="prose dark:prose-invert">
    <ContentDoc>
      <template #not-found>
        <Page404 />
      </template>
    </ContentDoc>
  </div>
</template>
