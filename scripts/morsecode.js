export const morsecode = (val) => {
  const morsecodeObject = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    V: "...-",
  };

  const valArray = val.toUpperCase().split("");
  const morseArray = valArray.map((value) => {
    if (Object.keys(morsecodeObject).includes(value)) {
      return morsecodeObject[value];
    } else if (value === " ") return "/";
    else return "#";
  });

  return morseArray.join(" ");
};
