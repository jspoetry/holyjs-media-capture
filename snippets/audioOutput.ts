const audioContext = new AudioContext();
const audioElement = document.createElement("audio");

// #region basic
const headphones = (await navigator.mediaDevices.enumerateDevices()).find(
  (device) => device.kind === "audiooutput",
);

navigator.mediaDevices.selectAudioOuptput(headphones.deviceId);
audioElement.setSinkId(headphones.deviceId);
audioContext.setSinkId(headphones.deviceId);
// #endregion basic

export {};
