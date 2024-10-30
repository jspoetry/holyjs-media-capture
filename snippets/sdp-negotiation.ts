// #region sdp
import { peerConnection } from "./create-peerconnection";
import { signaling } from "./signaling";

peerConnection.onnegotiationneeded = async () => {
  const offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offer);
  signaling.send({ type: "sdp-exchange", sdp: offer });
};
signaling.on("sdp-exchange", async ({ sdp }) => {
  if (sdp.type === "offer") {
    await peerConnection.setRemoteDescription(sdp);
    const answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);
    signaling.send({ type: "sdp-exchange", sdp });
  } else {
    await peerConnection.setRemoteDescription(sdp);
  }
});
// #endregion sdp