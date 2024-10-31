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
---
class: flex flex-col
---

# Договоримся о терминах на берегу

<Image src="/assets/local-vs-remote.png" />

---
class: relative
---

# WebRTC-приложение в двух словах {.title}

<div class="code-block" v-click="[1, 6]">
<<< @/snippets/open-signaling.ts#signaling {*|1|3|5-15|*}{at: '+2', lines: true}
</div>
<div class="code-block" v-click="[6, 10]">
<<< @/snippets/capture-media.ts#gum {*|1,4|2-3|*}{at: '+2', lines: true}
</div>
<div class="code-block" v-click="[10, 15]">
<<< @/snippets/create-peerconnection.ts#pc {*|1,6|1-6|7-11|12-13|*}{at: '+2', lines: true}
</div>
<div class="code-block" v-click="[15, 23]">
<<< @/snippets/handle-tracks.ts#tracks {*|1-2|4-5|7-11|8|9|10|*}{at: '+1', lines: true}
</div>
<div class="code-block" v-click="[23, 27]">
<<< @/snippets/sdp-negotiation.ts#sdp {*}{at: '+1', lines: true}
</div>

<div class="webrtc-flow ">
  <img v-click="[1, 6]" class="step" src="/assets/open-signaling.svg" alt="Открываем сигналинг">
  <img v-click="[6, 10]" class="step" src="/assets/capture-media.svg" alt="Захватываем медиа">
  <img v-click="[10, 15]" class="step" src="/assets/create-peerconnection.svg" alt="Создаём PeerConnection">
  <img v-click="[15, 23]" class="step" src="/assets/handle-mediatracks.svg" alt="Обрабатываем медиатреки">
  <img v-click="[23, 27]" class="step" src="/assets/exchange-sdp.svg" alt="Обмениваемся SDP">
</div>

<style>
  .title {
    @apply mb-2;
  }
  .webrtc-flow {
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

OLD
Для начала, нам нужно установиться сигналинг-соединение. Зачастую, это вебсокет-соединение, которое необходимо для передачи информации о медиасессии, так и передачи метаинформации: кто ручку поднял, кто микрофон замьютил. Хотя сигналинг и не нужен с точки зрения WebRTC как протокола, в действительности мало какое приложение обходиться без него.

Теперь непосредственно создадим плацдарм для нашего WebRTC-соединения - для этого нужно инстанциировать RTCPeerConnection. Тот факт, что мы создали объект ещё не означает, что мы установили соединение, как в случае с вебсокетом

При создании мы указываем STUN-сервера - это, по сути, сервера как 2ip.ru, которые просто ваш внешний IP-адреса

Нужен слайд с агендой

TODO
- Поправить очередность кликов
- Заменить "Обрабатываем медиатреки -> "Отображаем медиатреки"
- Добавить картинки про ICE-кандидатов
- Добавить описание про srcObject
-
-->

---
class: relative
---
 
# WebRTC-приложение в двух словах

<div class="code-block" v-click="2">
<<< @/snippets/capture-media.ts#gum {monaco-run}{lines: true, monaco: true }
</div>

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
