import { test, expect, describe } from "vitest";
import { regex } from "../../utils/regex";

describe("regex", () => {
  // Errors
  test("not a 16 letter", () => {
    expect(regex("aaaaaa")).toEqual(false);
  });
  test("numbers", () => {
    expect(regex("1")).toEqual(false);
  });
  test("spaces", () => {
    expect(regex(" ")).toEqual(false);
  });

  // Trues
  test("16 letter", () => {
    expect(regex("sardorsardorsard")).toEqual(true);
  });
});
