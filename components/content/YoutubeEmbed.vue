<script lang="ts" setup>
  defineProps({
    src: { type: String, required: true },
    title: { type: String, default: '' },
    width: { type: String, default: undefined },
    height: { type: String, default: undefined },
    // Because tailwind doesn't support props to build class names dinamically (https://tailwindcss.com/docs/content-configuration#dynamic-class-names)
    // For responsive sizes we can only use existing tailwind classes for width and height
    // (https://tailwindcss.com/docs/width, (https://tailwindcss.com/docs/height)
    // e.g. "w-2/3", "h-min"
    // With screen size modifiers sm: md: lg: xl: (https://tailwindcss.com/docs/screens)
    // e.g. "sm:w-1/2", "md:h-full", "lg:w-16", "xl:h-screen"
    // And to set a tailwind class as !important, add an exclamation sign before the class itself:
    // e.g. "!h-max", "md:!w-3/4"
    tailwindClasses: { type: String, default: undefined },
  });
</script>

<template>
  <div class="rounded-2xl overflow-hidden" :class="[tailwindClasses]" :style="{ width: width, height: height }">
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
