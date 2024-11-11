# Получение списка устройств

<RenderWhen context="visible">

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
clicks: 5
---

# MediaDeviceInfo

<div class="list max-w-fit">

<v-clicks depth="2">

- kind
- label{v-mark="{ at: 5, color: 'var(--sd-yellow)'}"}
- groupId{v-mark="{ at: 5, color: 'var(--sd-yellow)'}"}
- deviceId{v-mark="{ at: 5, color: 'var(--sd-yellow)'}"}

</v-clicks>

</div>

<style>
.slidev-layout .list li {
  @apply text-xl;
}
</style>

<!--
TODO: Добавить иллюстрацию
-->

---

# MediaDeviceInfo.kind

Тип устройства

<v-clicks depth="2">

- 3 типа
  - `videoinput` - камера
  - `audioinput` - микрофон
  - `audiooutput` - динамики/наушники

</v-clicks>

<!--
Не читать значения
-->

---

# MediaDeviceInfo.label

Название устройства

---

# MediaDeviceInfo.groupId

Идентификатор группы устройств

<v-clicks depth="2"> 

- Для группировки разных типов устройств, которые принадлежат одному физическому устройству
  - камера с микрофоном
  - наушники с микрофоном
- Уникален для каждой сессии

</v-clicks>

<!--
TODO: groupId 
TODO: что происходит когда пользователь переподключает 
TODO: С точки зрения подачи
- Про WebRTC куча доки
- Чатгпт может выдать бойлер плейт
- Но на самом
-->

---

# MediaDeviceInfo.deviceId

Идентификатор устройства

<v-clicks>

- Уникален для каждого домена (по аналогии с localStorage)
- При очистке куки, очищаются и deviceId
- Нужен для захвата медиа с конкретного устройства

</v-clicks>

<!--
TODO: Проговорить, что deviceId сохраняется, даже если открыть в другой вкладке
-->
