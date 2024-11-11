// #region
const devices = await navigator.mediaDevices.enumerateDevices();
// #endregion

const deviceStore = {
  set: (...data: any[]) => {},
};
const emit = (event: string, ...payload: any[]) => {};

// #region devicechange-in-spec
navigator.mediaDevices.addEventListener("devicechange", (event) => {
  const {
    devices, // весь список устройств
    userInsertedDevices, // список новых устройств
  } = event;

  deviceStore.set(devices);
  deviceEmitter.emit("new-devices", userInsertedDevices);
});
// #endregion devicechange-in-spec

// #region devicechange-real
navigator.mediaDevices.addEventListener("devicechange", async () => {
  const prevDevicesMap = getPreviousDevicesMap();
  const devices = await navigator.mediaDevices.enumerateDevices();
  const newDevices = devices.filter(
    (device) => !prevDevicesMap.has(device.deviceId),
  );

  deviceStore.set(devices);
  deviceEmitter.emit("new-devices", newDevices);
});
// #endregion devicechange-real

function getPreviousDevicesMap() {
  return new Map<string, MediaDeviceInfo>();
}

// #region devicechange-update
async function updateDevices() {
  const prevDevicesMap = getPreviousDevicesMap();
  const devices = await navigator.mediaDevices.enumerateDevices();
  const newDevices = devices.filter(
    (device) => !prevDevicesMap.has(device.deviceId),
  );

  deviceStore.set(devices);
  deviceEmitter.emit("new-devices", newDevices);
}

navigator.mediaDevices.addEventListener("devicechange", updateDevices);
// #endregion devicechange-update

// #region devicechange-update-debounce
async function updateDevices() {
  const prevDevicesMap = getPreviousDevicesMap();
  const devices = await navigator.mediaDevices.enumerateDevices();
  const newDevices = devices.filter(
    (device) => !prevDevicesMap.has(device.deviceId),
  );

  deviceStore.set(devices);
  deviceEmitter.emit("new-devices", userInsertedDevices);
}

navigator.mediaDevices.addEventListener(
  "devicechange",
  debounce(updateDevices, 500),
);
// #endregion devicechange-update-debounce

export {};
