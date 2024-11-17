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

<style>
.twoslash-popup-container {
  @apply text-xl
}
</style>

---
src: ./devicechange.md
---

--- 

# Получение списка устройств

<RenderWhen :context="['presenter', 'visible']">

```ts twoslash
const devices = await navigator.mediaDevices.enumerateDevices();
//    ^?
```
</RenderWhen>

<style>
.twoslash-popup-container {
  @apply text-xl
}
</style>

---
src: './media-device-info.md'
clicks: 20
---

---

<Image src="/groupId-meme.png" />

---
src: './media-device-info.md'
clicksStart: 20
---