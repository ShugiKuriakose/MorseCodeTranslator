import { morseObject } from "./morseObject.js";
const morsecodeObject = morseObject;

export const morsecode = (val) => {
  const valArray = val.toUpperCase().split("");
  const morseArray = valArray.map((value) => {
    if (Object.keys(morsecodeObject).includes(value)) {
      return morsecodeObject[value];
    } else if (value === " ") return "/";
    else return "#";
  });

  return morseArray.join(" ");
};
