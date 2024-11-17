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

## Обязательные {v-click .mb-4}

<p v-click="3"> Браузер старается удовлетворить в первую очередь. Если не может - <code>OverconstrainedError</code></p> 

<v-click-gap size="3" />

<v-clicks> 

- `exact`
- `min`
- `max`

</v-clicks>

::right:: 

## Необязательные {v-click="2" .mb-4}

Браузер старается удовлетворить, но без гарантий. Ошибки нет {v-click="4"}

<v-clicks>

- `ideal`
- shorthand (`key: value`)
  - `audio: true`
  - `aspectRatio: 16 / 9`
</v-clicks>

---

# Choose wisely you must

<Image src="/yoda.jpeg" />

---  

# Обязательные констрейны — когда принципиально


<div v-click="2">
<<< @/snippets/getUserMedia.ts#getUserMedia {*|11-13|8|7,10}{lines: true, at: '+2'}
</div>

