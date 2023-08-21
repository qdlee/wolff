<script setup lang="ts"></script>

<template>
  <div
    class="bg-back grid h-screen w-screen grid-cols-[auto_minmax(0_1fr)_auto] grid-rows-[auto_minmax(0_fr)_auto] bg-full"
  >
    <div class="col-span-3 bg-yellow-400">标题</div>
    <div class="w-[460px]">
      <Panel
        title="养殖周期虫态总体分布"
        subtitle="Overall distribution of insect state during culture cycle"
      ></Panel>
    </div>
    <div class="bg-red-500">center</div>
    <div class="bg-green-500">right</div>
    <div class="col-span-3 bg-purple-600">bottom</div>
  </div>
</template>
