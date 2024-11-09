---
src: ./lunch-prefernces.md
clicksStart: 4
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
