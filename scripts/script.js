import { morseOrEnglish } from "./morseOrEnglish.js";

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
  const translation = morseOrEnglish(text);
  document.querySelector(".translated").style.display = "flex";
  document.querySelector(".translated").textContent = translation;
});
