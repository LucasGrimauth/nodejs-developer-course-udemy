const expect = require("expect");

var { generateMessage, generateLocationMessage } = require("./message");

describe("generateMessage", () => {
  it("should generate the correct message object", () => {
    var from = "Lucas";
    var text = "Heya";
    var message = generateMessage(from, text);

    expect(typeof message.generatedAt).toBe("number");
    expect(message).toMatchObject({ from, text });
  })
});

describe("generateLocationMessage", () => {
  it("should generate the correct location object", () => {
    var from = "Lucas";
    var latitude = 11;
    var longitude = 11;
    var url = `https://www.google.com/maps?=${latitude},${longitude}`;
    var message = generateLocationMessage(from, latitude, longitude);

    expect(typeof message.generatedAt).toBe("number");
    expect(message).toMatchObject({ from, url });
  })
});