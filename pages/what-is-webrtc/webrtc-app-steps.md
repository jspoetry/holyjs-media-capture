---
class: relative
---

# WebRTC-приложение в двух словах {.title}

<div class="code-block">
<<< @/snippets/getUserMedia.ts#basic-with-output {*|1-4|5|7-8|10-11}{lines: true}
</div>

<RenderWhen context="print">
  <template #default>
  <div class="webrtc-flow">
    <img v-click="[1, 3]" class="step" src="/capture-media.png" alt="Захватываем медиа">
    <img class="step opacity-half" src="/open-signaling.png" alt="Открываем сигналинг">
    <img v-click="[3, 4]" class="step" src="/create-peerconnection.png" alt="Создаём PeerConnection">
    <img v-click="4" class="step" src="/handle-tracks.png" alt="Обрабатываем медиатреки">
    <img class="step opacity-half" src="/exchange-sdp.png" alt="Обмениваемся SDP">
  </div>
  </template>
  <template #fallback>
  <div class="webrtc-flow">
    <img v-click="[1, 3]" class="step" src="/capture-media.svg" alt="Захватываем медиа">
    <img class="step opacity-half" src="/open-signaling.svg" alt="Открываем сигналинг">
    <img v-click="[3, 4]" class="step" src="/create-peerconnection.svg" alt="Создаём PeerConnection">
    <img v-click="4" class="step" src="/handle-mediatracks.svg" alt="Обрабатываем медиатреки">
    <img class="step opacity-half" src="/exchange-sdp.svg" alt="Обмениваемся SDP">
  </div>
  </template>
</RenderWhen>

<style>
  .webrtc-flow {
    scale: 0.8;
    @apply flex items-center absolute bottom-8 overflow-hidden;
  }
  .step {
    max-height: 85px;
    transition: opacity 200ms;
    @apply object-contain;
  }
  img:not(:first-child) {
    margin-left: -13px;
  }
  .step:nth-child(2n) {
    margin-left: -12px;
  }
  .slidev-vclick-hidden.code-block {
    display: none;
  }
  .slidev-vclick-target.step {
    opacity: 1 !important;
  }
  .opacity-half {
    opacity: 0.5;
  }
  .slidev-vclick-hidden.step {
    opacity: 0.5 !important;
  }
</style>

<!--
[click:1] Давайте посмотрим, как эти этапы выглядят с точки зрения кода
[click:2] Устанавливаем соединение с сигналингом
[click:6] Дальше мы захватываем видео и аудио пользователя.
[click:7] Для этого вызываем функцию getUserMedia
[click:8] В аргументах мы указываем наши пожелания: получить видео и аудио
[click:9] В
[click:10] Далее создаём PeerConnection. Этот объект представляет собой WebRTC-соединение.
[click:11] При создании мы указываем ICE-сервера. Это, по сути, адреса
[click:19] Нам нужны только видеотреки, т.к. нам не нужно слышать самих себя
-->
