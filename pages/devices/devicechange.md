# Обновление списка устройств

<v-click>
````md magic-move

<<< @/snippets/devices.ts#devicechange-in-spec {*|3-4|7-8|3-4|3-4}{lines: true}

<<< @/snippets/devices.ts#devicechange-real {*|2|3|4-6|*}{lines: true, at: '3'}

<<< @/snippets/devices.ts#devicechange-update {*}{lines: true}

<<< @/snippets/devices.ts#devicechange-update-debounce {*|12-15}{lines: true}

````

</v-click>

<v-drag pos="732,114,153,128">
<div v-click="[5,6]" class="rounded-full max-w-[170px] ">
<p class="number"> 0 </p>
<span class="text-2xl leading-3">браузеров реализовало</span>
</div>
</v-drag>

<style>
.rounded-full {
  width: fit-content;
}
.number {
  width: min-content;
  color: transparent;
  background: var(--sd-gradient);
  background-clip: text;
  -webkit-text-stroke: 2px transparent;
  @apply text-8xl my-1;
}

</style>

