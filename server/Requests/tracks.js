require("dotenv").config();

const tracksIds = require("./ids/tracks.js");

const db = require("../db/db.js");
const fetch = require("node-fetch");

let params = {
  ids: tracksIds.join(","),
};

(async function () {
  const res = await fetch(
    "https://api.spotify.com/v1/tracks?ids=" + params.ids,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + process.env.ACCESS_TOKEN,
      },
    }
  );
  const tracksData = await res.json();

  tracksData.tracks.map((track) => {
    db.query(
      `INSERT INTO tracks (idtracks, name, explicit, href, image_url, album_id) values ('${track.id}', '${track.name}', ${track.explicit}, '${track.href}', '${track.album.images[0].url}', '${track.album.id}')`,
      (err, res) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(res);
      }
    );
  });
})();
