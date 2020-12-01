require("dotenv").config();

const db = require("../db/db.js");
const fetch = require("node-fetch");

db.query(
  `CREATE TABLE genres(idgenre int primary key AUTO_INCREMENT, name varchar(20))`,
  (err, res) => {
    if (err) {
      console.log(err);
    }
    console.log(res);
  }
);

(async function () {
  const res = await fetch(
    "https://api.spotify.com/v1/recommendations/available-genre-seeds",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + process.env.ACCESS_TOKEN,
      },
    }
  );
  const data = await res.json();

  data.genres.map((g) => {
    db.query(`INSERT INTO genres (name) VALUES ('${g}')`, (err, res) => {
      if (err) {
        console.log(err);
      }
      console.log(res);
    });
  });
})();
