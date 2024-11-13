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