---
layout: section
bgNum: 2
---

# Devices

---

# Что нам нужно

<v-clicks>

- Получать список медиаустройств
- Отслеживать добавление и удаление медиаустройств

</v-clicks>

---
class: center
---

# Получение списка устройств


```ts
const devices = await navigator.mediaDevices.enumerateDevices();
```

<style>
.twoslash-popup-container {
  @apply text-xl
}
  </style>

---
src: ./devicechange.md
---

---
src: './media-device-info.md'
---