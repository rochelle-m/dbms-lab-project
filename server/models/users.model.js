const db = require("../db/db.js");
const emailExists = require("./emailExists.js");

class User {
  constructor(user) {
    this.email = user.email;
    this.name = user.name;
    this.password = user.password;
  }

  create(newUser, result) {
    emailExists(newUser.email, (numOfEmailEntries) => {
      if (numOfEmailEntries) {
        result({ message: "Duplicate email" }, null);
      } else {
        // insert record into table
        db.query("INSERT INTO users SET ?", newUser, (err, res) => {
          if (err) {
            result(err, null);
            return;
          }
          console.log({ id: res.insertId, ...newUser });
          result(null, { id: res.insertId, ...newUser });
        });
      }
    });
  }
}

module.exports = User;
