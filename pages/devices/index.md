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

<v-click>

```ts
const devices = await navigator.mediaDevices.enumerateDevices();
```
</v-click>

<!--
<v-switch>
<template #1>

</template>
<template #2>

<RenderWhen :context="$clicks === 2">

```ts twoslash
const devices = await navigator.mediaDevices.enumerateDevices();
//    ^?
```
</v-switch>
-->

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