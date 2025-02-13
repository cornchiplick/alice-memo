export const generateUUID = (prefix: string = "") => {
  let date = Date.now();
  const uuid = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (date + Math.random() * 16) % 16 | 0;
    date = Math.floor(date / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });

  return prefix + uuid.substring(0, uuid.length - prefix.length);
};
