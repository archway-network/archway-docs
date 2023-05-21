<script lang="ts">
  // export default {
  //   inheritAttrs: false,
  // };
</script>

<script lang="ts" setup>
  // const attr = useAttrs();

  defineProps({
    src: { type: String, required: true },
    title: { type: String, default: '' },
  });
</script>

<template>
  <div class="rounded-2xl overflow-hidden">
    <iframe
      class="aspect-video w-full h-full"
      :src="`${src}?rel=0&modestbranding=1`"
      :title="title"
      frameborder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share"
      allowfullscreen
    ></iframe>
  </div>
</template>
