export const cloneObject = <T>(item: T): T => {
  return JSON.parse(JSON.stringify(item));
};
