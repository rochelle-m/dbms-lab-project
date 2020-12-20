const sql = require("../db/db");

const search = ({ val, type }, result) => {
  let response = [];
  sql.query(`SELECT * FROM ${type} WHERE name LIKE '%${val}%'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    response.push(res);

    if (type == "artists") {
      sql.query(
        `select * from albums where album_artist in (SELECT id from artists where name LIKE '%${val}%')`,
        (err, res1) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
          response.push(res1);

          sql.query(
            `select * from tracks where album_id in (select id from albums where album_artist in (SELECT id from artists where name LIKE '%${val}%'))`,
            (err, res2) => {
              if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
              }
              response.push(res2);

              result(null, response);
            }
          );
        }
      );
    } else result(null, response);
  });
};

module.exports.search = search;
