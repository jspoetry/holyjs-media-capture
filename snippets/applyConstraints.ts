// #region basic
const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
const [videoTrack] = mediaStream.getVideoTracks();
await videoTrack.applyConstraints({
  width: 1920,
  height: 1080,
  frameRate: {
    min: 10,
    ideal: 30,
  },
});
// #endregion basic

// #region safe
const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
const [videoTrack] = mediaStream.getVideoTracks();
await videoTrack.applyConstraints({
  ...videoTrack.getConstraints(),
  width: 1920,
  height: 1080,
  frameRate: {
    min: 10,
    ideal: 30,
  },
});
// #endregion safe

export {};
