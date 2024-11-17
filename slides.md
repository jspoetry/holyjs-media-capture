---
theme: ./theme
title: Захват медиа в WebRTC-приложениях, или Как, наконец-то, включить камеру на созвоне
templateTitle: '%s - HolyJS'
author: Николай Пугачев (@jspoetry)
layout: cover
background: /intro.png
transition: clean-transition
class: opening
mdc: true
drawing: false
contextMenu: false
record: false
presenter: false
drawings:
  enabled: false
htmlAttrs:
  lang: ru
---

# Захват медиа в <br> WebRTC-приложениях, <br> или Как, наконец-то, <br> включить камеру на созвоне
## Николай Пугачев {.text-xl .mt-18}

<style>
  .opening {
    @apply block;
  }
  .name {
    @apply text-xl mt-18;
  }
</style>

---
src: './pages/introduction.md'
---

---
src: ./pages/what-is-webrtc/index.md
---

---
src: ./pages/permissions/index.md
---

---
src: ./pages/devices/index.md
---

---
src: ./pages/constraints/index.md
---

---

# Выводы

<v-clicks> 

- UX-паттерны не менее важны, чем сам захват медиа
- Обрабатывайте ошибки и логируйте их. Вы в будущем скажете себе спасибо
- Stay tuned with browsers updates

</v-clicks>

<!-- 
[click:3] Когда я готовил этот доклад, Permssions API для микрофона и камеры не поддерживалось фаерфокс. Но с недавней версии, с 132 версии фаерфокс стал поддерживать пермишн апи. Так что важно следить за обновлением, чтобы выпиливать старые фолбэки и костыли.
 -->

---
class: items-center wo-logo
---

<ImageWrapper class="my-auto logo" ><img src="/sberdevices-logo.svg"></ImageWrapper>

<style>
  .logo {
    width: 335px;
  }
</style>
