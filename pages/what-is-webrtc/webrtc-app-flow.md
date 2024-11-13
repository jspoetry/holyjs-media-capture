---
clicks: 10
---

# WebRTC-приложение в двух словах

<div class="webrtc-flow flex items-center h-full">
  <v-clicks>
  <div :class="['step', $clicks > 5 && 'dimmed', $clicks === 6 && 'active']">
    <img class="icon" src="/assets/capture-media-icon.svg">
    <img src="/assets/capture-media.svg" alt="Захватываем медиа">
  </div>
  <div :class="['step', $clicks > 5 && 'dimmed', $clicks === 7 && 'active']">
    <img src="/assets/open-signaling.svg" alt="Открываем сигналинг">
    <img class="icon" src="/assets/open-signaling-icon.svg">
  </div>
  <div :class="['step', $clicks > 5 && 'dimmed', $clicks === 8 && 'active']">
    <img class="icon" src="/assets/create-peerconnection-icon.svg">
    <img src="/assets/create-peerconnection.svg" alt="Создаём PeerConnection">
  </div>
  <div :class="['step', $clicks > 5 && 'dimmed', $clicks === 9 && 'active']">
    <img src="/assets/handle-mediatracks.svg" alt="Обрабатываем медиатреки">
    <img class="icon" src="/assets/handle-mediatracks-icon.svg">
  </div>
  <div :class="['step', $clicks > 5 && 'dimmed', $clicks === 10 && 'active']">
    <img class="icon" src="/assets/exchange-sdp-icon.svg" alt="Обмениваемся SDP">
    <img src="/assets/exchange-sdp.svg" alt="Обмениваемся SDP">
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

<!--
TODO: порассказывать побольше про сигналинг сервер

TODO: предупредить очень поверхностно пройдёмся

 TODO: не важно про сигналинг
-->
