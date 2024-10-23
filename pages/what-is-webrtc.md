---
layout: two-cols
---

# Что такое WebRTC

- Сомнительно, но окей

::right::

<div class="flex items-center h-full">
<img class="object-fit" src="/assets/webrtc-stack.png">
</div>

---

## WebRTC приложение в двух словах

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

# Договоримся о терминах на берегу

<div style="height: 90%;">
  <img class="object-contain max-h-full h-full w-full" src="/assets/local-vs-remote.png" alt="Локальный vs Удалённый" />
</div>

---

# Создаем соединения

```ts {all|1|3-9|3-7}
const signaling = new WebSocket("wss://your-signaling.com")

let iceServers = [
  'stun.l.google.com:19302',
  'stun1.l.google.com:19302',
  'stun2.l.google.com:19302'
]

const peerConnection = new RTCPeerConnection(iceServers)
```

<!--
  [click] Для начала, нам нужно установиться сигналинг-соединение. Зачастую, это вебсокет-соединение, которое необходимо для передачи метаинформации. Хотя сигналинг и не нужен с точки зрения WebRTC как протокола, в действительности мало какое приложение обходиться без него.

  [click] Теперь непосредственно создадим плацдарм для нашего WebRTC-соединения - для этого нужно инстанциировать RTCPeerConnection. Тот факт, что мы создали объект ещё не означает, что мы установили соединение, как в случае с вебсокетом

  [click] При создании мы указываем STUN-сервера - это, по сути, сервера как 2ip.ru, которые просто ваш внешний IP-адреса
 --->

---

# Зaхватываем медиа

```ts
const userMedia = await navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true,
});
```

---

# Зaхватываем медиа

```ts
const userMedia = await navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true,
});
```