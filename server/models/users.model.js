const db = require("../db/db.js");
const emailExists = require("./emailExists.js");
const passwordCheck = require("./passwordCheck.js");

class User {
  constructor(user) {
    this.email = user.email;
    this.name = user.name;
    this.password = user.password;
  }

  create(newUser, result) {
    emailExists(newUser.email, (res) => {
      if (res.id != undefined) {
        result({ message: "Duplicate email", auth: false }, null);
        return;
      }
      db.query("INSERT INTO users SET ?", newUser, (err, res) => {
        if (err) {
          result({ ...err, auth: false }, null);
          return;
        }
        result(null, { id: res.insertId, ...newUser, auth: true });
      });
    });
  }

  login(user, result) {
    emailExists(user.email, (res) => {
      if (!res.id) {
        result({ message: "This email does not exist" }, null);
        return;
      }

      passwordCheck(user, (matches) => {
        result(null, { auth: matches, id: res.id });
      });
    });
  }
}

module.exports = User;
