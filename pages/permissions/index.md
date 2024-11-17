---
layout: section
---

# Permissions

<!--
Перейдем к обсуждению разрешению


-->

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

---
layout: cover
background: /thanos-fist.jpg
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

- Имеют доступ к чувствительной информации {v-mark="{ at: 1, color: 'var(--sd-light-green)' }"}
- Могут отвлекать пользователя{v-mark="{ at: 2, color: 'var(--sd-green)' }"}
- Есть угроза безопасности{v-mark="{ at: 3, color: 'var(--sd-pink)' }"}
- Имеют доступ к управлению устройствами{v-mark="{ at: 4, color: 'var(--sd-blue)' }"}

</v-clicks>

::right::

- Geolocation API{v-click="[1, 5]" v-mark.box="{ at: 1, color: 'var(--sd-light-green)', padding: 1 }"} 
  - <code> geolocation</code>
- Notifications API{v-click="[2, 5]" v-mark.box="{ at: 2, color: 'var(--sd-green)', padding: 1  }"}
  - <code> notifications</code>
- Clipboard API{v-click="[3, 5]" v-mark.box="{ at: 3, color: 'var(--sd-pink)', padding: 1  }"}
  - <code> clipboard-read </code>
  - <code> clipboard-write </code>
- Media Capture and Streams API{v-click="4" v-mark.box="{ at: 4, color: 'var(--sd-blue)', padding: 1  }"}
  - <code>microphone</code>
  - <code>camera</code>

<style>
  .slidev-layout {
    @apply gap-x-6;
  }
  </style>


---
class: flex flex-col
---

# Пользователь даёт доступ к powerful feature

<Image src="/granting-permissions.png" />



---
src: ./media-flow.md
---
 

---
layout: two-cols-header
---

# Пользователь не дал доступ к устройству

::left::
<v-clicks>

- Получаем ошибку `NotAllowedError`
- При повторном вызове `getUserMedia` попап с запросом на разрешение больше не&nbsp;появится
- Нужно объяснить пользователю, как дать доступ к устройству через настройки

</v-clicks>

::right::

<Image v-after src="/permission-explainer.png" />

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

# Запросить доступ, когда пользователь будет готов

<div class="grid grid-cols-[1fr_minmax(260px,_30%)] grid-rows-1 gap-x-8 max-w-full overflow-hidden">  

<v-clicks>

- Пользователю важно как можно быстрее подключиться ко встрече
- Пользователь возможно вообще не включит камеру/микрофон на встрече
- Пользователь не знаком с интерфейсом и не хочет сейчас включать камеру/микрофон

</v-clicks>

<SlidevVideo class="h-full rounded-xl object-contain" autoplay muted loop>
  <source src="/no-update-no-issues.mp4" type="video/mp4">
</SlidevVideo>
</div>



---
src: './less-friction.md'
---

--- 
layout: statement
---

# Permissions API

<!-- В этом нам поможет пермишнс апи -->

---

# Что там по доступам


<div v-click="1" class="mb-8">

[Permissions.query](https://w3c.github.io/permissions/#query-method)

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

[PermissionsStatus.onchange](https://w3c.github.io/permissions/#dom-permissionstatus-onchange)

<<< @/snippets/permissions-api.ts#change-event {*|1|3-5|4|*}{lines: true, at:'+2'}

</div>

::left::

<div v-click class="blue-block h-full">

### Safari-нюанс

`change` ивент не работает.<br>
В&nbsp;статусе `prompt` дожидаемся ответа с&nbsp;`getUserMedia()`

</div>

<style>
  .slidev-layout {
    @apply gap-x-10 gap-y-7;
  }
</style>



---

# Проверяем доступ и захватываем

<div>

<<< @/snippets/permissions-api.ts#permission-granted {*|1-4|5-6|8-17|*|13}{lines: true}

</div>

<v-drag v-click="4" pos="409,414,503,64">
  <div class="error">NotFoundError: Requested device not found</div>
</v-drag>

<style>
  .slidev-vclick-hidden {
    display: none;
  }
</style>
