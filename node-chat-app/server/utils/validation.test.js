const expect = require("expect");

const { isRealString } = require("./validation");

describe("validation", () => {
  it("should reject non-string values", () => {
    var value = 1;

    expect(isRealString(value)).toBeFalsy();
  })

  it("should reject string with only spaces", () => {
    var value = "       ";

    expect(isRealString(value)).toBeFalsy();
  })

  it("should allow string with non-space characters", () => {
    var value = "   Lucas  ";

    expect(isRealString(value)).toBeTruthy();
  })
});