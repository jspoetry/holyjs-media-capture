// #region gum
const mediaStream = await navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true,
});
// #endregion gum

export { mediaStream };
