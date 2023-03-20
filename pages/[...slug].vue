<script lang="ts" setup>
  import { useAlgoliaSearch } from '@/data';
  import NextPrevArticle from '@/components/NextPrevArticle.vue';
  import Page404 from '@/pages/404.vue';

  const searchAlgolia = await useAlgoliaSearch();
  const router = useRouter();

  onMounted(async () => {
    try {
      const { objectID } = await queryContent(window.location.pathname).findOne();
      const doc = await searchAlgolia.findObject(item => item.objectID === objectID);

      await searchAlgolia.updateObjectsPartially(
        [
          {
            objectID: doc.object.objectID,
            viewed: doc.object.viewed + 1,
          },
        ],
        false
      );
    } catch (err: any) {
      if (err?.name === 'FetchError' && err?.status === 404) {
        router.replace('/404');
      }
    }
  });
</script>

<template>
  <div class="prose dark:prose-invert min-w-full">
    <ContentDoc />
    <!-- <ContentDoc>
      <template #not-found> <Page404 /></template>
    </ContentDoc> -->
    <NextPrevArticle />
  </div>
</template>
