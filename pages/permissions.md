---
layout: section
---

# Permissions

<!-- Перейдем к обсуждению разрешению -->

---
layout: two-cols-header
---

# Два типа API

::left::

<v-clicks>

- DOM API
- Fetch API
- Console API

</v-clicks>


::right::

<v-clicks>

- Geolocation API 
- Notifications API 
- Clipboard API 
- Media Capture and Streams API 

</v-clicks>

<!-- quote -->

---
layout: statement
---

# Powerful feature ✊

---
layout: two-cols-header
---

# Два типа API

::left::

- DOM API
- Fetch API
- Canvas API

::right::

- Geolocation API {v-click.hide="1"}
  - `geolocation`
- Notifications API {v-click.hide="1"}
  - `notifications`
- Clipboard API {v-click.hide="1"}
  - `clipboard-read`
  - `clipboard-write`
- Media Capture and Streams API
  - `microphone`
  - `camera`

---
class: flex flex-col
---

# Пользователь даёт доступ к powerful feature

<Image src="/assets/granting-permissions.png" />

<!--
Поправить мем - сделать побольше картинку и поставить её повыше
-->

---
class: responsive
---

# Захват медиа

<div class="number-blocks" v-click="5">
<v-clicks>

1. Приложение запрашивает медиа через функцию `getUserMedia()`{.accent}
2. У пользователя появляется окно с запросом доступа
3. Пользователь нажимает "Разрешить" 
4. Приложение получает `MediaStream`{.accent}

</v-clicks>
</div>

 <style>
  .number-blocks.slidev-vclick-hidden {
    opacity: 1 !important;
  }
  .number-blocks.slidev-vclick-current li:not(:nth-child(3)) {
    opacity: 0;
  }

  </style>

---
layout: two-cols-header
---

# Пользователь не дал доступ к устройству

::left::
<v-clicks>

- Получаем ошибку `NotAllowedError` <br> (`DOMException`в Firefox)
- При повторном вызове `getUserMedia` попап с запросом на разрешение больше не&nbsp;появится
- Нужно объяснить пользователю, как дать доступ к устройству через настройки

</v-clicks>

::right::

<Image v-after src="/assets/permission-explainer.png" />

<style>
  .two-cols-header {
    @apply gap-x-4;
  }
</style>


---
layout: statement
---

# Предоставление доступа к&nbsp;камере и микрофону — сценарий с большим «трением»

---
class: responsive
---

# [Less friction, more control](https://web.dev/case-studies/google-meet-permissions-best-practices)

<Image src="/assets/google-meet.png" />

<!-- 
Мы можем отобразить пользователю, что доступ к девайсам нет и просто пустить его в конференцию. А как, кстати, понять, если доступ к девайсам?
 -->

--- 

# Permissions API

<div v-click="1" class="mb-8">
<<< @/snippets/permissions-api.ts#query {*|1,3|2|4}{lines: true, at:'+2'}
</div>

<v-clicks> 

- `granted` - доступ есть
- `denied` - доступа нет
- `prompt` - доступ ещё не запрашивали

</v-clicks>