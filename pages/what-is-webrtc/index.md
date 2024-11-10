---
layout: statement
---

# Что такое WebRTC?

---
class: flex flex-col
---

# Что такое WebRTC?

<Image src="/assets/protocol-stack.png" />

<!--
TODO: Объединить в слайд
-->

---
class: flex flex-col
---

# Что такое WebRTC?

<Image src="/assets/topologies.png" />

<!--
TODO: объединиться в один слайд и объяснить
-->

---
layout: statement
---

# Что такое WebRTC&#8209;приложение?

---
class: flex flex-col
---

# WebRTC-приложение каждый божий день

<Image v-click.hide src="/assets/jazz-preview.png" />
<Image v-after src="/assets/average-call.png" />

<style>
  .slidev-vclick-hidden {
    display: none;
  }
  </style>

<!--
Вы наверняка знакомы с WebRTC. Звонки наша реальность, даже если вы ходите в офис. Вот вы присоединяетесь на дейлик. 
[click:1] Хотя, если быть честным, это выглядит вот так
-->

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

<!--
TODO: Попиздеть на 30 сек
TODO: рассказать про возможности WebRTC
TODO: самая важная часть - это видео
-->

---
clicksStart: 4
src: ./webrtc-app-flow.md
---

---
src: ./sdp.md
---

---
src: ./webrtc-app-steps.md
---

---
class: relative
---

# WebRTC-приложение в двух словах

<RenderWhen context="visible">
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
  .webrtc-flow {
    scale: 0.8;
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
-->
