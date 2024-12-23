export const generateUUID = (prefix: string = "") => {
  let date = Date.now();
  const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (date + Math.random() * 16) % 16 | 0;
    date = Math.floor(date / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });

  if (prefix.length >= 4) {
    return uuid;
  } else {
    return prefix + uuid.substring(0, uuid.length - prefix.length);
  }
};
