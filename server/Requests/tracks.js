require("dotenv").config();

const tracksIds = require("./ids/tracks.js");

const db = require("../db/db.js");
const fetch = require("node-fetch");

let params = {
  ids: tracksIds.join(","),
};

(async function () {
  const res = await fetch(
    "	https://api.spotify.com/v1/tracks?ids=" + params.ids,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + process.env.ACCESS_TOKEN,
      },
    }
  );
  const tracksData = await res.json();

  const trackObjs = tracksData.tracks.map(
    ({ id, name, explicit, href, album }) => ({
      idtracks: id,
      name,
      explicit,
      href,
      album_id: album.id,
    })
  );

  trackObjs.map((track) => {
    db.query("INSERT INTO tracks SET ?", track, (err, res) => {
      if (err) {
        console.log(err.errno);
        return;
      }
      console.log(res);
    });
  });
})();
