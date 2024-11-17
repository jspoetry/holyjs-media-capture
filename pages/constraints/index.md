---
layout: section
bgNum: 3
---

# Constraints

---

# Вернёмся к началу

<<< @/snippets/getUserMedia.ts#basic

<!-- 
  Допустим, мы победили все препоны: 
  - У нас есть все пермишины
  - У пользователя есть хотя бы один микрофон или камера
  - Медиаустройства не заняты другими приложениями
 -->

---
class: grid grid-cols-2
---

<div>

# Где находится медиа пользователя

<v-clicks> 

1. Медиа (видео- и аудиосигналы)
2. Источник медиа (камера, микрофон)
3. `MediaStreamTrack` - репрезентация в браузере медиа источника 
4. `MediaStream` - контейнер для `MediaStreamTrack`
</v-clicks>
</div>

<Image class="h-full" src="/media-pipeline-meme.png" />

<!-- Да, мы уже узнал, что вызывая getUserMedia, браузер захватывает медиа с медиаисточника, мы получаем медиапоток, там лежат медиатреки, а уже в самих треках и лежит медиа. 
-->

---
src: ./settings.md
---

---
src: ./lunch-example.md
---

---
src: ./constraint-types.md
---

---
src: ./advanced.md
---

---
src: ./applyConstraints.md
---
