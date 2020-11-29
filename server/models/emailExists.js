const db = require("../db/db.js");

module.exports = function (email, result) {
  db.query(
    `SELECT count(email) as num from users where email ='${email}'`,
    (err, res) => {
      if (err) {
        result(-1);
        return;
      }
      result(res[0].num);
    }
  );
};
