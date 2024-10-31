---
layout: image-right
image: /assets/me.jpg
backgroundSize: contain
class: wo-logo about-me
---

<!-- На этой странице должна быть фоточка с котами -->
# Обо мне 

<v-clicks>

- Связан ~~стогкольским синдромом~~ с WebRTC 3 года
- Работал над Voximplant WebSDK
- Сейчас — в команде SaluteJazz/SberJazz
- До работы над WebRTC-приложениями не знал ничего о IETF и RFC

</v-clicks>

<style>
  .slidev-page .grid {
    grid-template-columns: 1.5fr 1fr;
  }
  .slidev-page div:nth-child(2) {
    background-position: center right;
  }
</style>

---
layout: statement
class: slide
---

### Мой опыт погружения в WebRTC:
# В начале было сложно, потом — ещё сложнее

<style>
  .slide {
    @apply bg-no-repeat;
    background-image: url('/assets/crying-cat.png');
    background-position: left bottom;
    background-size: 25%;
  }
</style>

---
layout: statement
---

# Что такое WebRTC?

---
class: flex flex-col
---

# WebRTC каждый день

<Image v-click.hide src="/assets/jazz-preview.png" />
<Image v-after src="/assets/average-call.png" />

<style>
  .slidev-vclick-hidden {
    display: none;
  }
  </style>

<!-- 
Вы наверняка знакомы с WebRTC. Звонки наша реальность, даже если вы ходите в офис. Вот вы присоединяетесь на дейлик. 
[click:1] Хотя, если быть честным, это выглядит вот так
 -->