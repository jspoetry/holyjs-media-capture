---
theme: ./theme
title: Захват медиа в WebRTC-приложениях, или Как, наконец-то, включить камеру
  на созвоне
layout: cover
background: /assets/intro.png
transition: clean-transition
class: opening
mdc: true
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

<!--
TODO: Накидать скриншотиков с каждым этапов
-->

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
- Обрабатывайте ошибки и логируйте их
- Stay tuned

</v-clicks>
<!-- 
[click:3] Когда я готовил этот доклад, Permssions API для микрофона и камеры не поддерживалось фаерфокс. Но с недавней версии, с 132 версии фаерфокс стал поддерживать пермишн апи. Так что важно следить за обновлением, чтобы выпиливать старые фолбэки и костыли.
 -->

<!--
Какие вывод из этого можно сделать
Добавить визуальное сопровождение
-->

---
class: items-center wo-logo
---

<Image class="my-auto logo" src="/assets/sberdevices-logo.svg" />

<style>
  .logo {
    width: 335px;
  }
</style>

<!--
TODO: Добавить контакты про себя
TODO: ссылки на другие материалы
TODO: накинуть примеров с аудио 
TODO: Выйти с микрофоном и показать пермишн
TODO: можно опустить
-->
