const videoPermission = await navigator.permissions.query({ name: "camera" });
const audioPermission = await navigator.permissions.query({
  name: "microphone",
});

// #region not-granted
videoPermission.state !== "granted";
audioPermission.state !== "granted";
// #endregion not-granted

// #region granted-video
videoPermission.state === "granted";
audioPermission.state !== "granted";
// #endregion granted-video

// #region granted-both
videoPermission.state === "granted";
audioPermission.state === "granted";
// #endregion granted-both

export {};
