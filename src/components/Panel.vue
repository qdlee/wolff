<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
}>();
</script>

<template>
  <div class="grid grid-rows-[auto_minmax(0_1fr)]">
    <div class="bg-panelTitle flex h-8 items-end bg-full px-6 py-1.5">
      <span
        class="text-base font-medium leading-none text-[#e8f2ff]"
        :style="{ textShadow: '0px 2px 0px #123466' }"
        >{{ title }}</span
      >
      <span
        class="gilroy ml-3 min-w-0 flex-1 truncate text-[8px] leading-none text-[#8bc9ff]"
        >{{ subtitle }}</span
      >
    </div>
    <div class="min-h-0 overflow-x-hidden overflow-y-scroll">
      <slot />
    </div>
  </div>
</template>
