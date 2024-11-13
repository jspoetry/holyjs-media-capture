---
class: relative
---

# WebRTC-приложение в двух словах


<div class="code-block" v-click="[0, 2]">
<<< @/snippets/getUserMedia.ts#basic-with-output {*}{lines: true, monaco: true }
</div>

<RenderWhen context="visible">
<div class="code-block" v-click="2">
<<< @/snippets/capture-media.ts#gum {monaco-run}{lines: true, monaco: true }
</div>
</RenderWhen>

<div class="webrtc-flow flex items-center h-auto absolute bottom-8">
  <img class="step" src="/assets/capture-media.svg" alt="Захватываем медиа">
  <img v-click.hide="1" class="step" src="/assets/open-signaling.svg" alt="Открываем сигналинг">
  <img v-click.hide="1" class="step" src="/assets/create-peerconnection.svg" alt="Создаём PeerConnection">
  <img v-click.hide="1" class="step" src="/assets/handle-mediatracks.svg" alt="Обрабатываем медиатреки">
  <img v-click.hide="1" class="step" src="/assets/exchange-sdp.svg" alt="Обмениваемся SDP">
</div>

<style>
  h3 {
    @apply mb-2;
  }
  .webrtc-flow {
    scale: 0.8;
  }
  .code-block.slidev-vclick-hidden {
    position: absolute;
  }
  .step {
    max-height: 85px;
    transition: opacity 200ms;
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
</style>

<!--
О каждом этапе можно рассказать отдельный доклад, но сегодня тема захвата медиа, поэтому мы будем говорить только про этот этап.

TODO: Рассказать что тут объебываются больше всего 
И тут может много чего пойти не так, 

TODO: рассказть про NotReadableError 

TODO: можно накидать экзепшинов
В самых простых строчках куча можно пожрать дерьмища


TODO: Накинуть ошибки и "Но давайте по порядку"
-->
