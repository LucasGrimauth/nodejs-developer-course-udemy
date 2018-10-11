const expect = require("expect");

var { Users } = require("./users");

describe("users", () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [
      {
        id: "1",
        name: "Lucas",
        room: "Fun Room"
      },
      {
        id: "2",
        name: "Thiago",
        room: "Lone Room"
      },
      {
        id: "3",
        name: "Willian",
        room: "Fun Room"
      }
    ]
  });

  it("should add new user", () => {
    var users = new Users();

    var user = {
      id: "123",
      name: "Lucas",
      room: "Fun Room"
    };

    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it("should remove a user", () => {
    var user = users.removeUser("1");

    expect(user.id).toBe("1");
    expect(users.users.length).toBe(2);
  });

  it("should not remove a user", () => {
    var user = users.removeUser("4");

    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it("should get user", () => {
    expect(users.getUser("1").name).toEqual("Lucas");
  });

  it("should not get user", () => {
    expect(users.getUser("4")).toBeFalsy();
  });


  it("should return names for Fun Room", () => {
    var userList = users.getUserList("Fun Room");

    expect(userList).toEqual(["Lucas", "Willian"]);
  });

  it("should return names for Lone Room", () => {
    var userList = users.getUserList("Lone Room");

    expect(userList).toEqual(["Thiago"]);
  });
});