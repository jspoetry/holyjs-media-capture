---
layout: section
---

# Devices

---

# Демо

<Devices />

---
class: center
---

# Получение списка устройств

<v-click>
```ts
const devices = await navigator.mediaDevices.enumerateDevices();
```
</v-click>

---

# Обновление списка устройств

<v-click>
```ts{all|2}
navigator.mediaDevices.addEventListener('devicechange', (event) => {
  const { devices } = event
})
```

</v-click>
