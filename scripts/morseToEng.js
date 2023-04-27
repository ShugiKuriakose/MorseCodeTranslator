export const toTranslate = (obj) => {
  let obj1 = Object.entries(obj).map((entry) => {
    key = entry[1];
    val = entry[0];
    entry[0] = key;
    entry[1] = val;
    return entry;
  });
  return Object.fromEntries(obj1);
};
