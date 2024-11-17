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
try {
  await videoTrack.applyConstraints({
    width: 1920,
    height: 1080,
    frameRate: {
      min: 10,
      ideal: 30,
    },
  });
} catch (err) {
  if (err instanceof OverconstrainedError) {
    console.error("try again");
  }
}
// #endregion safe

// #region safe-with-getter
const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
const [videoTrack] = mediaStream.getVideoTracks();
try {
  await videoTrack.applyConstraints({
    ...videoTrack.getConstraints(),
    width: 1920,
    height: 1080,
    frameRate: {
      min: 10,
      ideal: 30,
    },
  });
} catch (err) {
  if (err instanceof OverconstrainedError) {
    console.error("try again");
  }
}
// #endregion safe-with-getter

// #region deviceId
const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
const [videoTrack] = mediaStream.getVideoTracks();
try {
  await videoTrack.applyConstraints({
    // DON'T USE: deviceId, groupId, facingMode
    width: 1920,
    height: 1080,
    frameRate: {
      min: 10,
      ideal: 30,
    },
  });
} catch (err) {
  if (err instanceof OverconstrainedError) {
    console.error("try again");
  }
}
// #endregion deviceId

export {};
