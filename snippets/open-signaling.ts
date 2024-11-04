// #region signaling
const signaling = new WebSocket("wss://signaling-server.com");

signaling.addEventListener("message", handleMessage);

function handleMessage(event) {
  switch (event.type) {
    case "sdp-exchange": {
      //...
    }
    case "participant-added": {
      //...
    }
    // ...
  }
}
// #endregion signaling

signaling.addEventListener("open", handleOpenConnection);

function handleOpenConnection() {
  //...
}

export { signaling };
