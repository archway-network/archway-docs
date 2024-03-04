<script lang="ts" setup>
  import { ref } from 'vue';
  import { CopyIcon, TickIcon } from '@/components/Ui';
  import { PlaygroundModal } from '~~/components/Ui';
  import { useModals } from '@/composables';
  import { useRuntimeConfig } from '#imports';

  const { isOpen, openModal, closeModal } = useModals(false);

  const selectedSlot = ref();
  const isLoading = ref(false);
  const resultCode = ref();
  const showIcon = ref(false);
  let copied = ref(false);
  const showDiv = ref(false);

  const copyText = async () => {
    try {
      copied.value = true;
      await navigator.clipboard.writeText(selectedSlot.value.textContent);
      setTimeout(() => (copied.value = false), 1000);
    } catch (e) {
      console.error(e);
    }
  };

  const {
    public: {
      nodeops_playground_lite: { host, basicAuth, user },
    },
  } = useRuntimeConfig();

  const executeCode = async () => {
    const code = selectedSlot.value.textContent;
    openModal();
  };

  const executePlayground = async () => {
    resultCode.value.innerText = '';
    showDiv.value = false;
    const code = selectedSlot.value.innerText;

    isLoading.value = true;
    try {
      const response = await fetch(host, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${basicAuth}`,
          User: user,
        },
        body: JSON.stringify({
          lang: 'bash',
          code: btoa(code),
        }),
      });

      const result = await response.text();
      resultCode.value.innerText = result;
      showDiv.value = true;
      isLoading.value = false;
    } catch (error) {
      console.log('error', error);
      resultCode.value.innerText = error;
      isLoading.value = false;
    }
  };

  const handleClose = () => {
    closeModal();
    showDiv.value = false;
  };
</script>
<template>
  <div class="rounded-2xl mb-6 prose dark:prose-invert bg-gray-1000 dark:bg-black-warm">
    <div class="flex relative" @mouseover="showIcon = true" @mouseleave="showIcon = false">
      <div class="textContent w-5/6" ref="selectedSlot">
        <ContentSlot :use="$slots.default" />
      </div>
      <div class="flex items-center absolute" style="top: 12px; right: 12px; gap: 8px">
        <div v-if="showIcon" class="flex pb-0 white dark:black">
          <TickIcon v-if="copied" />
          <CopyIcon v-if="showIcon && !copied" class="cursor-pointer" @click="copyText()" />
        </div>
        <div
          :class="[
            'text-center cursor-pointer bg-orange text-white hover:bg-orange/80 hover:text-white',
            'disabled:bg-transparent disabled:text-gray',
          ]"
          style="padding: 4px 24px; border-radius: 12px"
          @click="executeCode()"
        >
          Try It
        </div>
      </div>
    </div>
  </div>
  <PlaygroundModal :is-open="isOpen" @close="handleClose" v-if="isOpen">
    <div class="flex flex-col">
      <div class="px-5 text-left">
        <div class="flex justify-end items-center" style="padding: 8px">
          <div
            :class="[
              'text-center cursor-pointer bg-orange text-white hover:bg-orange/80 hover:text-white',
              'disabled:bg-transparent disabled:text-gray',
            ]"
            style="padding: 8px 24px; border-radius: 12px"
            @click="executePlayground()"
          >
            <div class="text-sm">Run</div>
          </div>
        </div>
        <div
          class="rounded-2xl mb-6 prose dark:prose-invert overflow-x-auto bg-gray-100 dark:bg-black-100"
          style="max-height: calc(100vh / 3)"
        >
          <div class="flex relative textContent">
            <ContentSlot :use="$slots.default" />
          </div>
        </div>
      </div>

      <div class="px-5 text-left">
        <div
          class="rounded-2xl mb-6 prose dark:prose-invert overflow-x-auto bg-gray-100 dark:bg-black-100"
          style="max-height: calc(100vh / 3)"
        >
          <div v-show="showDiv">
            <pre class="flex relative overflow-x-auto">
            <code ref="resultCode"></code>
          </pre>
          </div>
          <div
            class="flex justify-center flex-shrink-0 flex-row items-center space-x-1 text-gray-100 hover:text-black dark:text-gray-100 hover:dark:text-white"
          >
            <UiIconsLoadingIcon v-if="isLoading" class="w-6 h-6 mr-2 animate-spin flex-shrink-0" />
          </div>
        </div>
      </div>
    </div>
  </PlaygroundModal>
</template>

<style module="classes">
  .textContent > :not(pre) {
    margin-left: 16px;
    margin-right: 16px;
  }
</style>
