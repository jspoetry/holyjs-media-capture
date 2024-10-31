import { signaling } from "./signaling.ts";

// #region pc
const peerConnection = new RTCPeerConnection({
  iceServers: [
    { urls: "stun:stun.l.google.com:19302" },
    { urls: "turn:your.turn-server.com:3478?transport=udp" },
  ],
});
peerConnection.onicecandidate = (event) => {
  if (event.candidate) {
    signaling.send({ type: "candidate", candidate: event.candidate });
  }
};
signaling.on("candidate", (candidate) => {
  peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
});
// #endregion pc

export { peerConnection };
