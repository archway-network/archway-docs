<script lang="ts">
  export default {
    inheritAttrs: false,
  };
</script>

<script lang="ts" setup>
  const attr = useAttrs();

  defineProps({
    src: { type: String, required: true },
    controls: { type: Boolean, default: false },
    loop: { type: Boolean, default: true },
    autoplay: { type: Boolean, default: true },
  });
</script>

<template>
  <section class="overflow-hidden relative">
    <video
      class="w-full h-full"
      v-bind="attr"
      :controls="controls"
      :loop="loop"
      :autoplay="autoplay"
      :muted="true"
      :playsinline="true"
      preload="auto"
    >
      <source :src="src" type="video/mp4" />
    </video>
  </section>
</template>
