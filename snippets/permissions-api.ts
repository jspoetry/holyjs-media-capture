try {
  // #region query
  const permissionStatus = await navigator.permissions.query({
    name: "camera", // или "microphone"
  });
  console.log(permissionStatus.state); // "granted" | "denied" | "prompt"
  // #endregion query

  permissionStatus.addEventListener("change", ({ target }) => {
    target;
  });
} catch (error) {
  // Hello Firefox!
}

export {};
