const signaling = {
  send: (...data: unknown[]) => {},
  on: (event: string, callback: () => {}) => {},
};

export { signaling };