<script setup lang="ts">
import { NSelect, SelectOption } from 'naive-ui'
import { useObservable } from '@vueuse/rxjs'
import { selectedCamera$, selectedSpeaker$, selectSpeaker, speakers$ } from '../services/devices';
import { computed } from 'vue';

const speakers = useObservable(speakers$)
const selectedSpeaker = useObservable(selectedSpeaker$)
const speakersOptions = computed(() => speakers.value?.map((device): SelectOption => ({
  label: device.label,
  value: device.deviceId,
})))
</script>

<template>
  <div class="container">
    <n-select :value="selectedSpeaker" @update:value="selectSpeaker" :options="speakersOptions" />
  </div>
</template>