# WebRTC-приложение в двух словах

<div class="webrtc-flow flex items-center h-full">
  <img v-click class="step" src="/assets/open-signaling.svg" alt="Открываем сигналинг">
  <img v-click class="step" src="/assets/capture-media.svg" alt="Захватываем медиа">
  <img v-click class="step" src="/assets/create-peerconnection.svg" alt="Создаём PeerConnection">
  <img v-click class="step" src="/assets/handle-mediatracks.svg" alt="Обрабатываем медиатреки">
  <img v-click class="step" src="/assets/exchange-sdp.svg" alt="Обмениваемся SDP">
</div>

<style>
.step {
  max-height: 85px;
}
img:not(:first-child) {
  margin-left: -13px;
}
.step:nth-child(2n) {
  margin-left: -12px;
}
</style>