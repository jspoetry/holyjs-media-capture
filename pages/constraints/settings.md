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
{
    "autoGainControl": true,
    "channelCount": 1,
    "deviceId": "default",
    "echoCancellation": true,
    "groupId": "ae16cb550f844aa2fc1e2f066abc462bedc98167cbb5bb0a9a619670e82d54f8",
    "latency": 0.01,
    "noiseSuppression": true,
    "sampleRate": 48000,
    "sampleSize": 16,
    "voiceIsolation": false
} -->

<!--
Что же мы получаем, когда вызываем getUserMedia с video и audio? Но с какими параметрами? Разрешение? Стерео?\

TODO: sampleRate sampleSize вниз
-->

---

# Нужна всего лишь ложка...

<Image src="/assets/old-method.png" />

---

# [MediaStreamTrack.getSettings](https://www.w3.org/TR/mediacapture-streams/#dom-mediastreamtrack-getsettings)

````md magic-move
<<< @/snippets/getSettings.ts#basic {*|1-4|6-7|9-10}{lines: true}

<<< @/snippets/getSettings.ts#setter {*|9-10}{lines: true}
````

--- 

# settings только для чтения

<Image src="/assets/dont-do.jpg" />