# MediaDeviceInfo

<div class="list">

<v-clicks depth="2">

- kind
- label
- groupId
- deviceId

</v-clicks>

</div>

<style>
.slidev-layout .list li {
  @apply text-xl;
}
</style>

---

# MediaDeviceInfo.kind

Тип устройства

<v-clicks depth="2">

- 3 типа
  - `videoinput` - камера
  - `audioinput` - микрофон
  - `audiooutput` - динамики/наушники

</v-clicks>

---

# MediaDeviceInfo.label

Название устройства

- Поле пустое, если нет пермишина
- Firefox-нюанс: лейблы не пустые, если есть хотя бы одно устройство

---

# MediaDeviceInfo.groupId

Идентификатор группы устройств

<v-clicks depth="2"> 

- Для группировки разных типов устройств, которые принадлежат одному физическому устройству
  - камера с микрофоном
  - наушники с микрофоном
- Уникален для каждой сессии

</v-clicks>

----

# MediaDeviceInfo.deviceId

Идентификатор устройства

<v-clicks>

- Уникален для каждого домена (по аналогии с localStorage)
- При очистки куки, очищаются и deviceId
- Нужен для захвата медиа с конкретного устройства

</v-clicks>

