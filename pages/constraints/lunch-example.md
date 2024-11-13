---
layout: cover
background: /assets/lunch-party.png
---

# Вы пошли пообедать

<!-- 
Представим, вы хотите запустить сайт. Ой, то есть, пообедать. И, допустим, вы работаете из офиса. Вы собираете группой людей и решаете куда идти есть. В зависимости от предпочтений, вы 
 -->

--- 
src: ./lunch-prefernces.md
clicks: 4
---

---

# Получаем обед {v-click.hide="6"}
# Получаем медиа {class="absolute" v-click="6"}

<div class="switch-block" v-click.hide="13">

````md magic-move

<<< @/snippets/getLunch.ts#getLunch {*|2-4|5-9|10|11-14|*}{lines: true}

<<< @/snippets/getUserMedia.ts#getUserMedia {*|2-4|5-14|6-9|10|11-13|*}{line: true, at: '+2'}

````
</div>

<div class="switch-block" v-click="13">
<<< @/snippets/getUserMedia.ts#getUserMedia {monaco-run}{line: true}
</div>

<style>
  .switch-block.slidev-vclick-hidden {
    display: none;
  }
</style>

