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

<!--
Не читать значения
-->

---

# MediaDeviceInfo.label

Название устройства

<v-clicks>

- Поле пустое, если нет пермишина

</v-clicks>


<div v-click class="yellow-block mt-auto w-6/12">

### Firefox-нюанс

Лейблы не пустые, если есть доступ к&nbsp;устройствам хотя бы одного типа 

</div>

---

# MediaDeviceInfo.groupId

Идентификатор группы устройств

<v-clicks depth="2"> 

- Для группировки разных типов устройств, которые принадлежат одному физическому устройству
  - камера с микрофоном
  - наушники с микрофоном
- Уникален для каждой сессии

</v-clicks>

---

# MediaDeviceInfo.deviceId

Идентификатор устройства

<v-clicks>

- Уникален для каждого домена (по аналогии с localStorage)
- При очистки куки, очищаются и deviceId
- Нужен для захвата медиа с конкретного устройства

</v-clicks>

<!--
TODO: Проговорить, что deviceId сохраняется, даже если открыть в другой вкладке
-->
