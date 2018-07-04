const expect = require("expect");
const rewire = require("rewire");

var app = rewire("./app");

describe("App", () => {

  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__("db", db);

  it("Should call the spy correctly", () => {
    var spy = expect.createSpy();
    spy("Lucas", 23);
    expect(spy).toHaveBeenCalledWith("Lucas", 23);
  });

  it("Should call saveUser with user object", () => {
    var email = "lucas@example.com";
    var password = "secret";

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  });
});