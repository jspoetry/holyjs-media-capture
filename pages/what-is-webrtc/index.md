---
class: flex flex-col
---

# Что такое WebRTC

<Image src="/assets/protocol-stack.png" />

---
class: flex flex-col
---

# Что такое WebRTC

<Image src="/assets/topologies.png" />

---
src: ./webrtc-app-flow.md
---

---
src: ./webrtc-app-flow.md
clicks: 1
---

---

# Идеальный сигналинг

<Image src="/assets/sdp-message.png" />

---
clicksStart: 1
clicks: 4
src: ./webrtc-app-flow.md
---

---

# Договоримся о терминах на берегу

<Image src="/assets/local-vs-remote.png" />

---
clicksStart: 4
src: ./webrtc-app-flow.md
---

---

# SDP {.title v-click.hide}

# Session Description Protocol {.title v-after}

<div v-click="3"> 

<<< @/snippets/sdp.txt {*|7-29|7|25-28|22|19|10-13}{maxHeight: '400px', lines: true, at: '4'}

</div>

<style>
  .title.slidev-vclick-hidden {
    display: none;
  }
</style>

---
src: ./webrtc-app-steps.md
---

---
class: relative
---
 
# WebRTC-приложение в двух словах

<RenderWhen context='visilbe'>
<div class="code-block" v-click="2">
<<< @/snippets/capture-media.ts#gum {monaco-run}{lines: true, monaco: true }
</div>
</RenderWhen>

<div class="webrtc-flow flex items-center h-auto absolute bottom-8">
  <img v-click.hide="1" class="step" src="/assets/open-signaling.svg" alt="Открываем сигналинг">
  <img class="step" src="/assets/capture-media.svg" alt="Захватываем медиа">
  <img v-click.hide="1" class="step" src="/assets/create-peerconnection.svg" alt="Создаём PeerConnection">
  <img v-click.hide="1" class="step" src="/assets/handle-mediatracks.svg" alt="Обрабатываем медиатреки">
  <img v-click.hide="1" class="step" src="/assets/exchange-sdp.svg" alt="Обмениваемся SDP">
</div>

<style>
  h3 {
    @apply mb-2;
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
