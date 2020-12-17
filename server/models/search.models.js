const sql = require("../db/db");

const search = (searchValue, result) => {
  sql.query(
    `SELECT * FROM artists where artist_name LIKE '%${searchValue}%'`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      result(null, res);
    }
  );
};

module.exports.search = search;
