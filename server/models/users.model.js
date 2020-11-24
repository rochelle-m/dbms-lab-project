const db = require("../db/db.js");

class User {
  constructor(user) {
    this.email = user.email;
    this.name = user.name;
    this.password = user.password;
  }

  create(newUser, result) {
    db.query("INSERT INTO users SET ?", newUser, (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      console.log({ id: res.insertId, ...newUser });
      result(null, { id: res.insertId, ...newUser });
    });
  }
}

module.exports = User;
