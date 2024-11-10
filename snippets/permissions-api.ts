try {
  // #region query
  const permissionStatus = await navigator.permissions.query({
    name: "camera", // или "microphone"
  });
  console.log(permissionStatus.state); // "granted" | "denied" | "prompt"
  // #endregion query

  // #region change-event
  console.log(permissionStatus.state); // "prompt"

  permissionStatus.addEventListener("change", () => {
    console.log(permissionStatus.state); // "granted" или "denied"
  });
  // #endregion change-event
} catch (error) {
  // Hello Firefox!
}

let fireMe = null;
navigator.permissions.query = () => ({
  state: "granted",
  addEventListener: (name, callback) => (fireMe = callback),
});
navigator.mediaDevices.getUserMedia = () => {
  throw new DOMException("Requested device not found", "NotFoundError");
};

// #region permission-granted
const cameraStatus = await navigator.permissions.query({ name: "camera" });
const microphoneStatus = await navigator.permissions.query({
  name: "microphone",
});
cameraStatus.addEventListener("change", captureMedia);
microphoneStatus.addEventListener("change", captureMedia);
async function captureMedia() {
  if (
    cameraStatus.state === "granted" &&
    microphoneStatus.state === "granted"
  ) {
    await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
  }
}
// #endregion permission-granted

export {};
