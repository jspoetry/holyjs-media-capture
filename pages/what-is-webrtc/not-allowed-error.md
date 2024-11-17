---
class: relative
dragPos:
  not-found: 373,151,535,56,6
  not-allowed: 53,224,419,56
  not-readable: 34,206,383,64,-37
  overconstrained: 218,232,550,64,-25
  type-error: 79,204,803,64,19
---

# WebRTC-приложение в двух словах

<div class="code-block" v-click="1">
<<< @/snippets/getUserMedia.ts#basic {*}{lines: true}
</div>

<v-drag pos="not-allowed" v-click="2">
  <div id="not-allowed" class="error">NotAllowedError: Permission denied</div>
</v-drag>
<v-drag pos="not-found" v-click="[3, 7]">
  <div class="error">NotFoundError: Requested device not found</div>
</v-drag>
<v-drag pos="not-readable" v-click="[4, 7]">
  <div class="error">NotReadableError: Device in use</div>
</v-drag>
<v-drag pos="overconstrained" v-click="[5, 7]">
  <div class="error">OverconstrainedError: Cannot satisfy constraints</div>
</v-drag>
<v-drag pos="type-error" v-click="[6, 7]">
<div class="error">TypeError: Cannot read properties of undefined (reading 'getUserMedia')</div>
</v-drag>

<RenderWhen context="print">
  <template #default>
    <div class="webrtc-flow flex items-center h-auto absolute bottom-8">
      <img width="163" height="76" src="/capture-media.png">
    </div>
    </template>
    <template #fallback>
<div class="webrtc-flow flex items-center h-auto absolute bottom-8">
        <img class="step" src="/capture-media.svg" alt="Захватываем медиа">
        <img v-click.hide="1" class="step" src="/open-signaling.svg" alt="Открываем сигналинг">
        <img v-click.hide="1" class="step" src="/create-peerconnection.svg" alt="Создаём PeerConnection">
        <img v-click.hide="1" class="step" src="/handle-mediatracks.svg" alt="Обрабатываем медиатреки">
        <img v-click.hide="1" class="step" src="/exchange-sdp.svg" alt="Обмениваемся SDP">
</div>
  </template>
</RenderWhen>

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
-->
