
# [MediaDeviceInfo](https://www.w3.org/TR/mediacapture-streams/#device-info)

<div class="grid grid-cols-5 grid-rows-[64px_repeat(4,_minmax(37px,_1fr))]">
  <div class="header row">
    <div>Свойства</div>
    <div v-click="5">Устройство 1</div>
    <div v-click="5">Устройство 2</div>
    <div>
      <span v-click="[5, 11]">Устройство 3</span>
      <span v-click="14">Устройство 3</span>
    </div>
    <div><span v-click="15">Устройство 4</span></div>
  </div>
  <div v-click="1" class="kind row">
    <div :class="[$clicks >= 5 && $clicks <= 10 && 'table-green']">kind</div>
    <div v-click="6">videoinput</div>
    <div v-click="7">audioinput</div>
    <div>
      <span v-click="[8, 11]"><span :class="[$clicks >= 9 && 'pink']">audiooutput</span></span>
      <span v-click="14">videoinput</span>
    </div>
    <div v-click="15">audioinput</div>
  </div>
  <div v-click="2" class="label row">
    <div :class="$clicks === 16 && 'table-green'">label</div>
    <div>
      <span v-click="[13, 14]">""</span>
      <span v-click="14">Awesome cam</span>
    </div>
    <div>
      <span v-click="[13,15]">""</span>
      <span v-click="15">USB mic</span>
    </div>
    <div v-click="14">USB camera</div>
    <div v-click="15">Dropped mic</div>
  </div>
  <div v-click="3" class="groupId row">
    <div :class="$clicks >= 17 && $clicks <= 20 && 'table-green'">groupId</div>
    <div>
      <span v-click="[13, 14]">""</span>
      <span v-click="[14, 20]">ak12hsk12js</span>
      <span v-click="20">dd12h1j44dfhd</span>
    </div>
    <div>
      <span v-click="[13, 15]">""</span>
      <span v-click="[15, 20]" v-mark="{ at: [18, 19], color: 'var(--sd-green)' }">qwer123ty</span>
      <span v-click="20">dwor456ak</span>
    </div>
    <div>
        <span v-click="[14, 20]" v-mark="{ at: [18, 19], color: 'var(--sd-green)' }">qwer123ty</span>
        <span v-click="20">dwor456ak</span>
    </div>
    <div>
      <span v-click="[15, 20]">sdf4d1jre2</span>
      <span v-click="20">d453n38v4ji</span>
    </div>
  </div>
  <div v-click="4" class="deviceId row">
    <div :class="[$clicks >= 21 && 'table-green']">deviceId</div>
    <div>
      <span v-click="[13, 14]">""</span>
      <span v-click="[14, 22]">j12jsdfk3sk</span>
      <span v-click="22" v-mark="{ at: 24, color: 'var(--sd-blue)'}">4ha731adl2</span>
    </div>
    <div>
      <span v-click="[13,15]">""</span>
      <span v-click="[15, 22]">dkj3a7dds</span>
      <span v-click="22" v-mark="{ at: 24, color: 'var(--sd-blue)'}">itm53wc721</span>
    </div>
    <div>
      <span v-click="[14, 22]">sdj1kah31</span>
      <span v-click="22">df3hyue31</span>
    </div>
    <div>
      <span v-click="[15, 22]">dfs23sj2j</span>
      <span v-click="22">rtf1273hd8</span>
    </div>
  </div>
</div>

<div class="state" v-drag="[605,11,326,53]" v-click="[12,16]">

<v-click-gap size="11" />

````md magic-move
<<< @/snippets/permissionsState.ts#not-granted {*|1-2|*}{at: '+1'}

<<< @/snippets/permissionsState.ts#granted-video {*}{at: '+1'}

<<< @/snippets/permissionsState.ts#granted-both {*}{at: '+2'}
````
</div>

<div class="prompt" v-click="12" v-drag="[386,10,180,100]">
    <img v-click.hide="13" src="/assets/camera-prompt.png" />
    <img v-click="[13,14]" src="/assets/camera-prompt-granted.png" />
    <img v-click="[14,15]" src="/assets/microphone-prompt.png" />
    <img v-click="[15,16]" src="/assets/microphone-prompt-granted.png" />
</div>

<div v-drag="[880,15,36,36]" v-click="[19, 20]" class="refresh-icon">
<svg width="100%" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" color="var(--sd-blue, rgba(255, 255, 255, 0.96))"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 5C10.8203 5 5 10.8203 5 18C5 18.5523 4.55228 19 4 19C3.44772 19 3 18.5523 3 18C3 9.71573 9.71573 3 18 3C23.5584 3 28.4089 6.02317 31 10.5121V7.11111C31 6.55883 31.4477 6.11111 32 6.11111C32.5523 6.11111 33 6.55883 33 7.11111V12.5556C33 13.1078 32.5523 13.5556 32 13.5556H30.925C30.9099 13.5559 30.8948 13.5559 30.8797 13.5556H26.5556C26.0033 13.5556 25.5556 13.1078 25.5556 12.5556C25.5556 12.0033 26.0033 11.5556 26.5556 11.5556H29.293C27.0525 7.63796 22.8334 5 18 5ZM32 17C32.5523 17 33 17.4477 33 18C33 26.2843 26.2843 33 18 33C12.4416 33 7.5911 29.9768 5 25.4879L5 28.8889C5 29.4412 4.55229 29.8889 4 29.8889C3.44772 29.8889 3 29.4412 3 28.8889L3 23.4444C3 22.8922 3.44772 22.4444 4 22.4444H5.0749C5.09009 22.4441 5.10526 22.4441 5.12039 22.4444H9.44445C9.99673 22.4444 10.4444 22.8922 10.4444 23.4444C10.4444 23.9967 9.99673 24.4444 9.44445 24.4444H6.70696C8.94746 28.362 13.1666 31 18 31C25.1797 31 31 25.1797 31 18C31 17.4477 31.4477 17 32 17Z" fill="currentColor"></path></svg>
</div>

<div v-click="[21, 23]" class="address-bar relative" v-drag="[578,2,350,91]">
  <div v-click.hide="22" class="url absolute">meet.google.com</div>
  <div v-click="22" class="url absolute">salutejazz.ru</div>
  <img src="/assets/address-bar.png" />
</div>

<div class="notes">
<div v-click="23" :class="['col-span-2', $clicks < 23 && 'hidden']" class="col-span-2">

<<< @/snippets/getUserMedia.ts#deviceId {*|3,6}{at: '24', lines: true}

</div>

<div v-click="[9,11]" class="safari blue-block col-start-2 col-end-2">

  ### Safari-нюанс

  [Audio Output Devices API](https://developer.mozilla.org/en-US/docs/Web/API/Audio_Output_Devices_API) не поддерживается. Вывести звук на определённое устройство нельзя.
  <div v-click="10">

  - `MediaDevices.selectAudioOutput()`
  - `HTMLMediaElement.setSinkId()`
  - `AudioContext.setSinkId()`
  </div>
</div>
</div>


<style>
  .slidev-vclick-target {
    transition-duration: 350ms;
  }
  .row {
    border-color: var(--sd-text-primary);
    @apply grid grid-cols-subgrid col-span-5 py-2 text-sm;
  }
  .row:not(:last-child) {
      @apply border-b;
  }
  .row span {
    position: absolute;
  }
  .header {
    @apply text-2xl py-4;
  }
  .notes {
    @apply grid grid-cols-2 mt-2;
  }
  .url {
    top: 35px;
    left: 95px;
    @apply text-sm;
  }
  .safari {
    h3 {
      @apply text-xl;
    }
    p {
      @apply my-1;
    }
    .ul {
      @apply pl-1;
    }
    li {
      @apply text-sm;
    }
    p {
      @apply text-sm
    }
  }
  .prompt img.slidev-vclick-hidden {
    display: none;
  }
  .refresh-icon {
   animation:spin 4s linear infinite;
  }
  @keyframes spin { 
  100% { 
      transform: rotate(360deg); 
  } 
}

</style>

<!--
TODO: что происходит когда пользователь переподключает 
TODO: С точки зрения подачи
TODO: Проговорить, что deviceId сохраняется, даже если открыть в другой вкладке
- Про WebRTC куча доки
- Чатгпт может выдать бойлер плейт
- Но на самом
-->
