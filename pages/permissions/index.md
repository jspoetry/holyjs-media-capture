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


## Простые API {.mb-6 v-click}

<v-clicks>

- DOM API
- Fetch API
- Console API

</v-clicks>


::right::

## Продвинутые API {.mb-6 v-click}

<v-clicks>

- Geolocation API 
- Notifications API 
- Clipboard API 
- Media Capture and Streams API 

</v-clicks>

<!-- quote -->

---
layout: cover
background: /assets/thanos-fist.jpg
---

# Powerful features

<style>
  .slidev-layout h1 {
    @apply text-8xl;
  }
</style>

---
layout: two-cols-header
---

# Powerful features

::left::

<v-clicks>

- Имеют доступ к чувствительной информации
- Могут отвлекать пользователя
- Есть возможность угроза безопасности
- Имеют доступ к управлению устройствами

</v-clicks>

::right::

- Geolocation API{v-click="[1, 5]"} 
  - `geolocation`
- Notifications API{v-click="[2, 5]"}
  - `notifications`
- Clipboard API{v-click="[3, 5]"}
  - `clipboard-read`
  - `clipboard-write`
- Media Capture and Streams API{v-click="4"}
  - `microphone`
  - `camera`

<style>
  .slidev-layout {
    @apply gap-x-6;
  }
  </style>


---
class: flex flex-col
---

# Пользователь даёт доступ к powerful feature

<Image src="/assets/granting-permissions.png" />

<!--
TODO: Поправить мем - сделать побольше картинку и поставить её повыше
-->

---
class: responsive
---

# Захват медиа

<div class="number-blocks" v-click="5">
<v-clicks>

1. Приложение запрашивает медиа через функцию `getUserMedia()`
2. У пользователя появляется окно с запросом доступа
3. Пользователь нажимает "Разрешить" 
4. Приложение получает `MediaStream`

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

<!--
Нужно поддерживать отображение всех иконок, чтобы показать пользователю
-->

---
layout: statement
---

# Предоставление доступа к&nbsp;камере и микрофону — сценарий с большим «трением»

---
src: './less-friction.md'
clicks: 0
---

---

# Запросить доступ, когда пользователь будет готов

<div class="grid grid-cols-[1fr_minmax(260px,_30%)] grid-rows-1 gap-x-8 max-w-full overflow-hidden">  

<v-clicks>

- Пользователю важно как можно быстрее подключиться ко встрече
- Пользователь возможно вообще не включит камеру/микрофон на встрече
- Пользователь не знаком с интерфейсом и не хочет сейчас включать камеру/микрофон

</v-clicks>

<SlidevVideo class="h-full rounded-xl object-contain" autoplay muted loop>
  <source src="/assets/no-update-no-issues.mp4" type="video/mp4">
</SlidevVideo>
</div>

<!--
TODO: Четче сформулировать речь по слайду
-->

---
src: './less-friction.md'
clicksStart: 1
---

--- 
layout: statement
---

# Permissions API

<!-- В этом нам поможет пермишнс апи -->

---

# Что там по доступам

<div v-click="1" class="mb-8">
<<< @/snippets/permissions-api.ts#query {*|1,3|2|4}{lines: true, at:'+2'}
</div>

<v-clicks> 

- `granted` — доступ есть
- `denied` — доступа нет
- `prompt` — доступ ещё не запрашивали

</v-clicks>

---
layout: two-cols-header
---

# Отслеживаем изменения статуса

<div v-click="1" class="mb-6">

<<< @/snippets/permissions-api.ts#change-event {*|1|3-5|4|*}{lines: true, at:'+2'}

</div>

::left::

<div v-click class="blue-block h-full">

### Safari-нюанс

`change` ивент не работает.<br>
В&nbsp;статусе `prompt` дожидаемся ответа с&nbsp;`getUserMedia()`

</div>

::right::

<div v-click class="yellow-block h-full">

### Firefox-нюанс

Permissions API для `microphone` и `camera` в принципе нет

<div v-click="8"> 
* Появится в 131 версии
</div>
</div>

<style>
  .slidev-layout {
    @apply gap-x-10 gap-y-7;
  }
</style>

<!--
TODO: Написать пару слов про то, что состояния granted и denied конечные
-->

---
layout: statement
---

# А если нет ни камеры, ни&nbsp;микрофона?
