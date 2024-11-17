---
layout: statement
---

# Что такое WebRTC?

<!--
Если вдруг вы задавались вопросом, что такое WebRTC, то вы наверняка сталкивалсь с лавиной протоколов и терминов.
-->

---
class: flex flex-col
---

# Что такое WebRTC?

<ImageWrapper class="h-full w-full" ><img src="/webrtc-explained.png"></ImageWrapper>


---
class: flex flex-col
---

# Что такое WebRTC?

<div class="grid grid-cols-2 grid-rows-2">
<ImageWrapper ><img src="/protocol-stack.png"></ImageWrapper>
<ImageWrapper ><img src="/topologies.png"></ImageWrapper>
</div>

<!--
Николай Константинов WebTransport. Когда и как можно использовать?
-->

---
layout: statement
---

# Что такое WebRTC&#8209;приложение?

---
class: flex flex-col
---

# WebRTC-приложение каждый божий день

<ImageWrapper v-click.hide ><img src="/jazz-preview.png"></ImageWrapper>
<ImageWrapper v-after ><img src="/average-call.png"></ImageWrapper>

<style>
  .slidev-vclick-hidden {
    display: none;
  }
</style>

<!--
Если вы видите похожий интерфейс раз в неделю, то с большой вероятностью, это WebRTC-приложение
[click:1] Хотя, если быть честным, это выглядит вот так
-->

---
src: ./webrtc-app-flow.md
---

---
src: ./webrtc-app-steps.md
---

---

# Договоримся на берегу

<ImageWrapper ><img src="/local-vs-remote.png"></ImageWrapper>

<!--
Сегодня мы не будем говорить про передачу видео, про отображение удалённых участников? передачу
-->

---
src: ./not-allowed-error.md
---
