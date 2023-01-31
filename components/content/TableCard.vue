<script lang="ts" setup>
  import { PropType } from 'vue';
  import { TableData } from '@/domain';
  import AllIcons from '@/components/Ui/Icons';

  defineProps({
    tableData: { type: Object as PropType<TableData>, default: { header: [{}], rows: [{}] } },
  });
</script>

<template>
  <div class="prose">
    <table class="mt-[48px]">
      <tr>
        <th class="px-[26px] py-[17px]" v-for="item in tableData.header" :key="item.title">
          {{ item.title }}
        </th>
      </tr>
      <tr v-for="row in tableData.rows" :key="row">
        <td class="py-[19px] px-[28px]" v-for="item in row">
          <template v-if="!AllIcons[item]">{{ item }}</template>
          <template v-else
            ><div class="flex justify-center align-middle h-7 !min-w-0"><component :is="AllIcons[item]" class="w-4" /></div
          ></template>
        </td>
      </tr>
    </table>
  </div>
</template>
