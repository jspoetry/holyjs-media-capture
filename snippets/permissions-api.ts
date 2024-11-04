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

export {};
