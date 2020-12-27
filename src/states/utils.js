export const serializeActions = acts =>
  Object.keys(acts).reduce((acc, key) => {
    acc[key] = acts[key].type;
    return acc;
  }, {});
