<script lang="ts" setup>
  import { Link, ChevronRightIcon } from '@/components/Ui';
  import CosmWasmDocumentation from '@/assets/images/cosmwasm-documentation.png';
</script>

<template>
  <div class="grid pb-16">
    <p class="text-base text-gray-600 mb-4 dark:text-gray-900 leading-[150%]">Featured</p>
    <Link
      href="/developers/cosm_wasm/introduction"
      class="grounded-radiants relative border border-transparent rounded-2xl bg-white dark:bg-black-18 shadow-card dark:shadow-black"
    >
      <div class="flex justify-between">
        <div class="flex">
          <img class="w-[115px] mx-8 my-6" :src="CosmWasmDocumentation" />
          <div class="flex">
            <div class="flex">
              <div class="mt-11">
                <p class="text-gray-500 dark:text-gray-900">Dapp Developers</p>
                <h2 class="heading-3 mt-1">Learn CosmWasm</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center mx-8 justify-between w-[10%]">
          <p class="text-orange">Documentation</p>
          <ChevronRightIcon class="w-4 h-4 text-orange" />
        </div>
      </div>
    </Link>
  </div>
</template>

<style scoped>
  .grounded-radiants::after {
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    background: linear-gradient(144.94deg, #fcecb2 10.14%, #ff8b89 30.97%, #fc8adc 51.8%, #7954ff 70.54%, #70bcff 90.12%);
    content: '';
    z-index: -1;
    border-radius: 16px;
  }
</style>
