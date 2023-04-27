import { morsecode } from "./morsecode.js";
import { translatemorsecode } from "./translatemorsecode.js";

export const morseOrEnglish = (text) => {
  let translatedText;
  if (/[a-zA-Z]/.test(text)) {
    translatedText = morsecode(text);
  } else if (/[.-]/.test(text)) {
    translatedText = translatemorsecode(text);
  } else {
    translatedText = "Oops!! Can't be translated";
  }
  return translatedText;
};
