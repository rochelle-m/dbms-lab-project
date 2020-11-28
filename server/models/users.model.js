const db = require("../db/db.js");

class User {
  constructor(user) {
    this.email = user.email;
    this.name = user.name;
    this.password = user.password;
  }

  create(newUser, result) {
    // duplicate email validation
    db.query(
      `SELECT count(email) as num from users where email ='${newUser.email}'`,
      (err, res) => {
        if (err) {
          result(err, null);
          return;
        }

        const numOfEmailEntries = res[0].num;

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
      }
    );
  }
}

module.exports = User;
