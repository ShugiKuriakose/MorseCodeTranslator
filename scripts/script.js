import { morsecode } from "./morsecode.js";
import { translatemorsecode } from "./translatemorsecode.js";

// delete contents of the textbox
document
  .querySelector(".textToTranslate")
  .addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(".textToTranslate").textContent = " ";
  });

// translate the text on submit

document.querySelector("submit").addEventListener("click", (event) => {
  event.preventDefault();
  //document.querySelector(".translated").style.display = "none";
  const text = document.querySelector(".textToTranslate").value;
  if (/[a-zA-Z]/.test(text)) {
    const morseText = morsecode(text);
    document.querySelector(".translated").style.display = "flex";
    document.querySelector(".translated").textContent = morseText;
  } else if (/[.-]/.test(text)) {
    const engText = translatemorsecode(text);
    document.querySelector(".translated").style.display = "flex";
    document.querySelector(".translated").textContent = engText;
  } else {
    document.querySelector(".translated").style.display = "flex";
    document.querySelector(".translated").textContent =
      "Oops!! Can't be translated";
  }
});
