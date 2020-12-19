const db = require("../db/db.js");

class User {
  constructor(user) {
    this.email = user.email;
    this.name = user.name;
    this.password = user.password;
    this.timestamp = user.timestamp;
  }

  create(newUser, result) {
    emailExists(newUser.email, (res) => {
      if (res.id != undefined) {
        result({ message: "Duplicate email", auth: false }, null);
        return;
      }
      db.query(
        `INSERT INTO users (name, email, password, timestamp) VALUES ('${newUser.name}', '${newUser.email}', '${newUser.password}', STR_to_date('${newUser.timestamp}', '%c-%e-%Y'))`,
        (err, res) => {
          if (err) {
            result({ ...err, auth: false }, null);
            return;
          }
          result(null, { id: res.insertId, ...newUser, auth: true });
        }
      );
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

const passwordCheck = function ({ email, password }, result) {
  db.query(`SELECT password FROM users WHERE email ='${email}'`, (err, res) => {
    if (err) {
      result(-1);
      return;
    }
    result(res[0].password === password);
  });
};

const emailExists = function (email, result) {
  db.query(
    `SELECT idusers as num from users where email ='${email}'`,
    (err, res) => {
      if (err) {
        result({ id: -1 });
        return;
      }
      result({ auth: res[0]?.num, id: res[0]?.num });
    }
  );
};

const search = function (id, result) {
  db.query(
    `SELECT name, email, timestamp from users where idusers ='${id}'`,
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      result(null, res);
    }
  );
};

const updateUser = function ({ id, name, email }, result) {
  db.query(
    `update users set name = '${name}', email = '${email}' where idUsers = ${id}`,
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      result(null, res);
    }
  );
};
module.exports = { User, search, updateUser };
