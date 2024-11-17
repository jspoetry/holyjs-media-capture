---
clicks: 10
---

# WebRTC-приложение в двух словах

<div class="webrtc-flow flex items-center h-full">
  <v-clicks>
  <div :class="['step', $clicks > 5 && 'dimmed', $clicks === 6 && 'active']">
    <RenderWhen context="print">
      <template #default>
        <img width="205" height="90" src="/capture-media.png">
      </template>
      <template #fallback>
        <img class="icon" src="/capture-media-icon.svg">
        <img src="/capture-media.svg" alt="Захватываем медиа">
      </template>
    </RenderWhen>
  </div>
  <div :class="['step', $clicks > 5 && 'dimmed', $clicks === 7 && 'active']">
  <RenderWhen context="print">
      <template #default>
        <img width="205" height="90" src="/open-signaling.png">
      </template>
      <template #fallback>
    <img src="/open-signaling.svg" alt="Открываем сигналинг">
    <img class="icon" src="/open-signaling-icon.svg">
      </template>
    </RenderWhen>
  </div>
  <div :class="['step', $clicks > 5 && 'dimmed', $clicks === 8 && 'active']">

  <RenderWhen context="print">
      <template #default>
        <img width="205" height="90" src="/create-peerconnection.png">
      </template>
      <template #fallback>
      <img class="icon" src="/create-peerconnection-icon.svg">
      <img src="/create-peerconnection.svg" alt="Создаём PeerConnection">
      </template>
    </RenderWhen>
  </div>
  <div :class="['step', $clicks > 5 && 'dimmed', $clicks === 9 && 'active']">
  <RenderWhen context="print">
      <template #default>
        <img width="205" height="90" src="/handle-tracks.png">
      </template>
      <template #fallback>
    <img src="/handle-mediatracks.svg" alt="Обрабатываем медиатреки">
    <img class="icon" src="/handle-mediatracks-icon.svg">
      </template>
    </RenderWhen>
  </div>
  <div :class="['step', $clicks > 5 && 'dimmed', $clicks === 10 && 'active']">
  <RenderWhen context="print">
      <template #default>
        <img width="205" height="90" src="/exchange-sdp.png">
      </template>
      <template #fallback>
    <img class="icon" src="/exchange-sdp-icon.svg" alt="Обмениваемся SDP">
    <img src="/exchange-sdp.svg" alt="Обмениваемся SDP">
      </template>
    </RenderWhen>
  </div>
  </v-clicks>
</div>

<style>
.step {
  max-height: 85px;
  transition: opacity 200ms;
  @apply relative object-contain;
}
.icon {
  height: 150px;
  left: 40px;
  @apply absolute;
}
.dimmed:not(.active) {
  opacity: 0.5;
}
.step:nth-child(odd) .icon {
  top: -170px;
}
.step:nth-child(even) .icon {
  bottom: -170px; 
}
.step:not(:first-child) {
  margin-left: -13px;
}
.step:nth-child(2n) {
  margin-left: -12px;
}

</style>
