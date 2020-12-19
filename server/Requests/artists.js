require("dotenv").config();

const artistIds = require("./ids.artist.js");

const db = require("../db/db.js");
const fetch = require("node-fetch");

let params = {
  ids: artistIds.join(","),
};

(async function () {
  const res = await fetch(
    "https://api.spotify.com/v1/artists?ids=" + params.ids,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + process.env.ACCESS_TOKEN,
      },
    }
  );
  const data = await res.json();

  data.artists.map((artist) => {
    db.query(
      `INSERT INTO artists (id, artist_name, url, followers, image_url, popularity) VALUES ('${artist.id}', '${artist.name}', '${artist.external_urls.spotify}', ${artist.followers.total}, '${artist.images[1].url}', ${artist.popularity})`,
      (err, res) => {
        if (err) {
          console.log(err.errno);
          return;
        }
        console.log(res);
      }
    );
  });
})();
