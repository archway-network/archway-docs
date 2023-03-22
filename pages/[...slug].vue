<script lang="ts" setup>
  import NextPrevArticle from '@/components/NextPrevArticle.vue';
  import Page404 from '@/pages/404.vue';

  const router = useRouter();

  onMounted(async () => {
    try {
      const { objectID } = await queryContent(window.location.pathname).findOne();
      $fetch('/api/algolia/increaseViews', { method: 'POST', body: { objectID } });
    } catch (err: any) {
      if (err?.name === 'FetchError' && err?.status === 404) {
        router.replace({ path: '/404' });
      }
    }
  });
</script>

<template>
  <div class="prose dark:prose-invert min-w-full">
    <ContentDoc>
      <template #not-found><Page404 /></template>
    </ContentDoc>
    <NextPrevArticle />
  </div>
</template>
