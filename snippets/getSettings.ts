// #region basic
const mediaStream = await navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true,
});

const [videoTrack] = mediaStream.getVideoTracks();
const [audioTrack] = mediaStream.getAudioTracks();

videoTrack.getSettings();
audioTrack.getSettings();
// #endregion basic

// #region setter
const mediaStream = await navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true,
});

const [videoTrack] = mediaStream.getVideoTracks();
const [audioTrack] = mediaStream.getAudioTracks();

videoTrack.setSettings({ width: 1920, height: 1080 }); // ?
audioTrack.setSettings({ sampleSize: 24 }); // ?
// #endregion setter

export {};
