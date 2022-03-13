<script>

export default {
  name: 'ProgressBar',
}
</script>

<template>
  <div class="mb-5">
    <div class="mb-2">
      {{$store.getters.storepercentageDone}} réalisé
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div class="bg-blue-600 h-2.5 rounded-full" :style="{width: $store.getters.storepercentageDone}"></div>
    </div>
  </div>
</template>

