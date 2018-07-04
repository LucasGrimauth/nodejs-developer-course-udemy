const expect = require("expect");

const utils = require("./utils");

describe("Utils", () => {

  describe("#add", () => {
    it("Should sum two numbers", () => {
      var result = utils.add(33, 11);
  
      expect(result).toBeA("number").toBe(44);
    });
  
    it("Should async sum two numbers", done => {
      utils.asyncAdd(2, 12, sum => {
        expect(sum).toBeA("number").toBe(14);
        done();
      });
    });
  });

  describe("#square", () => {
    it("Should calculate number's square", () => {
      var result = utils.square(11);
  
      expect(result).toBeA("number").toBe(121);
    });
  
    it("Should calculate async number's square", done => {
      utils.asyncSquare(12, square => {
        expect(square).toBeA("number").toBe(144);
        done();
      });
    });
  });

  describe("#names", () => {
    it("Should verify first and last names are set", () => {
      var user = { age: 23, location: "Brazi" };
      var newUser = utils.setName(user, "Lucas Grimauth");
  
      expect(newUser).toInclude({ firstName: "Lucas", lastName: "Grimauth" });
    });
  });
});

// it("should expect some values", () => {
//   expect(12).toNotBe(12);
//   expect({ object: true }).toEqual({ object: false });
//   expect([2,3,4]).toExlude(5);
// });