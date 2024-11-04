<script lang="ts" setup>
defineProps<{ src: string }>()
</script>

<template>
  <div class="max-w-full overflow-hidden flex justify-center items-center rounded-xl">
    <img class="h-full object-contain rounded-xl" :src="src">
  </div>
</template>