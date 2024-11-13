<div class="container relative w-full h-full">
  <img class="absolute slow-rotate" src="/assets/layer-5.svg" />
  <img class="absolute slow-rotate-reverse" src="/assets/layer-4.svg" />
  <img class="absolute slow-rotate" src="/assets/layer-3.svg" />
  <img class="absolute slow-rotate-reverse" src="/assets/layer-2.svg" />
  <img class="absolute slow-rotate" src="/assets/layer-1.svg" />
  <img v-drag="[166,152,190,189]" class="absolute" src="/assets/jazz-camera.svg" />
</div>

<style>
.container img {
  transform-origin: center;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
}
.slow-rotat {
  animation: slow-rotation 10s linear infinite;
}
.slow-rotate-revers {
  animation: slow-rotation 10s linear infinite reverse;
}

@keyframes slow-rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
