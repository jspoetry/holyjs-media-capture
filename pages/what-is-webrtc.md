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

# Договоримся о терминах на берегу

<div style="height: 90%;">
  <img class="object-contain max-h-full h-full w-full" src="/assets/local-vs-remote.png" alt="Локальный vs Удалённый" />
</div>

---
layout: two-cols
---

# Есть два ГУМа

<v-click>
## Бро

```ts twoslash
navigator.mediaDevices.getUserMedia;
//                     ^?
```

</v-click>

---

# Есть два ГУМа

## Не бро

```ts
navigator.getUserMedia;
//        ^?
```
