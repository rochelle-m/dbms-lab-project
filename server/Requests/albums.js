require("dotenv").config();

const albumIds = require("./ids.albums.js");

let params = {
  ids: albumIds.join(","),
};

const db = require("../db/db.js");
const fetch = require("node-fetch");

// running this only the first time
// db.query(
//   `CREATE TABLE albums (id_album VARCHAR(45) PRIMARY KEY,album_name VARCHAR(45) NULL,album_artist VARCHAR(45) NULL,href VARCHAR(64) NULL, release_date VARCHAR(45) NULL, INDEX FK2_idx (album_artist ASC), CONSTRAINT FK2  FOREIGN KEY (album_artist) REFERENCES db.artists (idartist) ON DELETE NO ACTION ON UPDATE NO ACTION);`,
//   (err, res) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(res);
//   }
// );

(async function () {
  const res = await fetch(
    "https://api.spotify.com/v1/albums?ids=" + params.ids,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + process.env.ACCESS_TOKEN,
      },
    }
  );
  const data = await res.json();

  data.albums.map((g) => {
    db.query(
      `INSERT INTO db.albums(id_album,album_name,album_artist,href,release_date) VALUES( '${g.id}', '${g.name}','${g.artists[0].id}','${g.href}', '${g.release_date}');`,
      (err, res) => {
        if (err) {
          console.log(err.sqlMessage);
          return;
        }
        console.log(res);
      }
    );
  });
})();
