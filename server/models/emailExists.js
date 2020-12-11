const db = require("../db/db.js");

module.exports = function (email, result) {
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
