---
src: ./lunch-prefernces.md
clicksStart: 4
clicks: 8
---

---
layout: two-cols-header
---

# Типы constraints

::left:: 

## Обязательные (mandatory) {v-click .mb-4}

Браузер старается удовлетворить в первую очередь. Если не может - OverconstrainedError {v-click="3"}

<v-click-gap size="3" />

<v-clicks> 

- `exact`
- `min`
- `max`

</v-clicks>

::right:: 

## Необязательные (optional) {v-click="2" .mb-4}

Браузер старается удовлетворить, но без гарантий. Ошибки нет {v-click="4"}

<v-clicks>

- `ideal`
- shorthand (`key: value`)
  - `audio: true`
  - `aspectRatio: 16 / 9`
</v-clicks>

<!--
TODO: чётче сделать проблематику или мотивацию

TODO: добавить про capabilties

TODO: Есть некоторые камеры, которые лукавят о том, что могут
TODO: Добавить фоллбэк на video: true
-->
