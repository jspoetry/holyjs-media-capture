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

<Image class="h-full w-full" src="/webrtc-explained.png" />


---
class: flex flex-col
---

# Что такое WebRTC?

<div class="grid grid-cols-2 grid-rows-2">
<Image src="/protocol-stack.png" />
<Image src="/topologies.png" />
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

<Image v-click.hide src="/jazz-preview.png" />
<Image v-after src="/average-call.png" />

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

<Image src="/local-vs-remote.png" />

<!--
Сегодня мы не будем говорить про передачу видео, про отображение удалённых участников? передачу
-->

---
src: ./not-allowed-error.md
---
