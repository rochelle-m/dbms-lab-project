const db = require("../db/db.js");

module.exports = function ({ email, password }, result) {
  db.query(`SELECT password FROM users WHERE email ='${email}'`, (err, res) => {
    if (err) {
      result(-1);
      return;
    }
    result(res[0].password === password);
  });
};
