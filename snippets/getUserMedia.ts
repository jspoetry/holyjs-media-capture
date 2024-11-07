navigator.mediaDevices.getUserMedia = () => {
  throw OverconstrainedError("deviceId");
};

// #region getUserMedia
const userMedia = await navigator.mediaDevices.getUserMedia({
  audio: true,
  video: {
    width: {
      ideal: 1920,
      min: 640,
    },
    aspectRatio: 16 / 9,
    deviceId: {
      exact: "ho14ly11js20the24best123conf",
    },
  },
});
// #endregion getUserMedia

// #region expanded
const userMedia = await navigator.mediaDevices.getUserMedia({
  audio: true,
  video: {
    width: {
      ideal: 1920,
      min: 640,
    },
    aspectRatio: 16 / 9,
    deviceId: {
      exact: "ho22ly49js25the394best123conf",
    },
  },
});
// #endregion expanded

export {};
