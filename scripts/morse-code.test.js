import { morsecode } from "./morsecode.js";
import { translatemorsecode } from "./translatemorsecode.js";

// test("morsecode translates english text to corresponding morse code", () => {
//   expect(morsecode("sos")).toBe("... --- ...");
//   expect(morsecode("s")).toBe("...");
//   expect(morsecode("sos sos")).toBe("... --- ... / ... --- ...");
//   expect(morsecode("sos")).toBe("... --- ...");
// });

describe("morsecode", () => {
  it("returns the morse code for english text", () => {
    expect(morsecode("sos")).toBe("... --- ...");
    expect(morsecode("s")).toBe("...");
    expect(morsecode("sos sos")).toBe("... --- ... / ... --- ...");
    expect(morsecode("sos")).toBe("... --- ...");
    expect(morsecode("123sos123")).toBe("# # # ... --- ... # # #");
  });

  it("returns error message for numbers and special characters", () => {
    expect(morsecode("123")).toBe("# # #");
  });
});

describe("translatemorsecode", () => {
  it("returns the english translation of the morse code characters", () => {
    expect(translatemorsecode("... --- ...")).toBe("SOS");
    expect(translatemorsecode("...")).toBe("S");
    expect(translatemorsecode("... --- ... / ... --- ...")).toBe("SOS SOS");
    expect(translatemorsecode("123 ... --- ... 123")).toBe("#SOS#");
  });

  it("returns error message for numbers and special characters", () => {
    expect(translatemorsecode("123")).toBe("#");
  });
});
