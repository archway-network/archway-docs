<script lang="ts" setup>
  import { PropType } from 'vue';
  import { Link } from '@/components/Ui';
  import NavigationItem from '@/components/Navigation/NavigationItem.vue';
  import { NavigationItem as NavigationItemType } from '@/domain';

  defineProps({
    item: { type: Object as PropType<NavigationItemType>, required: true },
  });
</script>

<template>
  <div>
    <Link :href="item.path">{{ item.title }}</Link>
    <NavigationItem :item="child" v-for="child in item.children" />
  </div>
</template>
