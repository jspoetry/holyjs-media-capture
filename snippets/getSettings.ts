import { mediaStream } from "./capture-media";

// #region basic
const [audioTrack] = mediaStream.getAudioTracks();
audioTrack.getSettings();

// #endregion basic
