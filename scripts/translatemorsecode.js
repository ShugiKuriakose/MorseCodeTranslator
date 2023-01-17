import { morseObject } from "./morseObject.js";
const morsecodeObject = morseObject;

export const translatemorsecode = (val) => {
  const morseToEngObj = toTranslate(morsecodeObject);

  const valArray = val.split(" ");
  const engArray = valArray.map((value) => {
    if (Object.keys(morseToEngObj).includes(value)) {
      return morseToEngObj[value];
    } else if (value === "/") return " ";
    else return "#";
  });

  return engArray.join("");
};

const toTranslate = (obj) => {
  let obj1 = Object.entries(obj).map((entry) => {
    let key = entry[1];
    let val = entry[0];
    entry[0] = key;
    entry[1] = val;
    return entry;
  });
  return Object.fromEntries(obj1);
};
