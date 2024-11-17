---
layout: two-cols-header
---

# Параметры медиа

::left:: 

## Видеопараметры{v-click="1"}

<v-click-gap size="2" />

<v-clicks>

- width <span v-click="14">- `640`</span>
- height <span v-click="14">- `480`</span>
- frameRate <span v-click="14">- `30`</span>
- aspectRatio <span v-click="14">- `1.3333` (16 / 9)</span>
- facingMode <span v-click="14">- `'user'`</span>

</v-clicks>

::right::

## Аудиопараметры{v-click="2"}


<v-clicks>

- latency <span v-click="15">- `0.01`</span> 
- channelCount <span v-click="15">- `1`</span> 
- noiseSuppression <span v-click="15">- `true`</span> 
- echoCancellation <span v-click="15">- `true`</span> 
- sampleRate <span v-click="15">- `48000`</span> 
- sampleSize <span v-click="15">- `16`</span> 

</v-clicks>

<!--
Что же мы получаем, когда вызываем getUserMedia с video и audio? Но с какими параметрами? Разрешение? Стерео?
-->

---

# Нужна всего лишь ложка...

<ImageWrapper ><img src="/old-method.png"></ImageWrapper>

---

# [MediaStreamTrack.getSettings](https://www.w3.org/TR/mediacapture-streams/#dom-mediastreamtrack-getsettings)

````md magic-move
<<< @/snippets/getSettings.ts#basic {*|1-4|6-7|9-10}{lines: true}

<<< @/snippets/getSettings.ts#setter {*|9-10}{lines: true}
````

--- 

# settings только для чтения

<ImageWrapper ><img src="/dont-do.jpg"></ImageWrapper>