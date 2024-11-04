<script setup lang="ts">
const props = defineProps({
  bgNum: {
    default: 1,
  },
});
const backgroundClass = `background-${props.bgNum}`;
</script>

<template>
  <div
    class="slidev-layout section w-full h-full grid items-end bg-cover"
    :class="[backgroundClass]"
  >
    <div class="text-left mb-8">
      <slot />
    </div>
  </div>
</template>

<style lang="css">
.slidev-layout.section.background-1 {
  background-image: url("../assets/section-background1.png");
}
.slidev-layout.section.background-2 {
  background-image: url("../assets/section-background2.png");
}
.slidev-layout.section.background-3 {
  background-image: url("../assets/section-background3.jpg");
}
.slidev-layout.section.background-4 {
  background-image: url("../assets/section-background4.png");
}
</style>
