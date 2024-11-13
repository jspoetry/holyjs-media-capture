// #region basic
const mediaStream = await navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true,
});
// #endregion basic

// #region getUserMedia
const userMedia = await navigator.mediaDevices.getUserMedia({
  audio: {
    noiseSuppression: true,
  },
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
  audio: {
    noiseSuppression: true,
  },
  video: {
    width: {
      ideal: 1920,
      min: 640,
    },
    aspectRatio: 16 / 9,
    facingMode: {
      exact: "user",
    },
  },
});
// #endregion expanded

// #region deviceId
const mediaStream = await navigator.mediaDevices.getUserMedia({
  video: {
    deviceId: { exact: "4ha731adl2" },
  },
  audio: {
    deviceId: { exact: "itm53wc721" },
  },
});
// #endregion deviceId

// #region basic-with-output
const mediaStream = await navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true,
});
const localTracks = mediaStream.getTracks();

const peerConnection = new RTCPeerConnection();
localTracks.forEach((track) => peerConnection.addTrack(track));

const localVideo = document.querySelector("#local-video") as HTMLVideoElement;
localVideo.srcObject = new MediaStream(mediaStream.getVideoTracks());

// #endregion basic-with-output
export {};
