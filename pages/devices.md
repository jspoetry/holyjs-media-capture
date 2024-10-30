---
layout: section
---

# Devices

---

# Демо

---
class: center
---

# Получение списка устройств

```ts {monaco}
navigator.mediaDevices.enumerateDevices().then(console.log);
```

---

# Обновление списка устройств

<v-click>
```ts{all|2}
navigator.mediaDevices.addEventListener('devicechange', (event) => {
  const { devices } = event
})
```
</v-click>
