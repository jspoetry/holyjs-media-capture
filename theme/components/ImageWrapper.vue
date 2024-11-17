<script lang="ts" setup>
defineProps<{ src: string }>()
</script>

<template>
  <div class="image-wrapper max-w-full overflow-hidden flex justify-center items-center rounded-xl">
    <slot></slot>
  </div>
</template>

<style>
.image-wrapper > img {
  @apply h-full object-contain rounded-xl;
}
</style>