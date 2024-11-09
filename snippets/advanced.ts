// #region advanced
const mediaStream = await navigator.mediaDevices.getUserMedia({
  video: {
    width: 1920,
    height: 1080,
    advanced: [
      { frameRate: 60 },
      { frameRate: 45 },
      { frameRate: 30 },
      { frameRate: 25 },
    ],
  },
});
// #endregion advanced

export {};
