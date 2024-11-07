import { mediaStream } from "./capture-media";
import { peerConnection } from "./create-peerconnection";

// #region tracks
const localTracks = mediaStream.getTracks();
localTracks.forEach((track) => peerConnection.addTrack(track));

const localVideo = document.querySelector("#local-video") as HTMLVideoElement;
localVideo.srcObject = new MediaStream(mediaStream.getVideoTracks());

peerConnection.ontrack = (event) => {
  const { track, transceiver, streams } = event;
  const mediaElement = getParticipantMediaElement(track.kind, transceiver.mid);
  mediaElement.srcObject = streams[0];
  track.onended = () => mediaElement.remove();
};

// #endregion tracks

// подумать про удаления 
function getParticipantMediaElement(
  kind: string,
  id: string | null,
): HTMLMediaElement {
  return kind === "video"
    ? document.createElement("video")
    : document.createElement("audio");
}

export {};
