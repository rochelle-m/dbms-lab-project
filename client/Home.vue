<template>
  <div class="home">
    <div class="search-container">
      <input
        class="searchbar"
        type="text"
        @input="getInputTextOnClick"
        placeholder="Search for an album, artist, playlist, track, show or episode"
      />
      <i
        class="fa fa-search searchicon"
        aria-hidden="true"
        title="Search"
        @click="search"
      >
      </i>
    </div>
    <div>
      <card-list :dataItems="artists" />
      <card-list :dataItems="albums" />
      <card-list :dataItems="episodes" />
      <card-list :dataItems="playlists" />
      <card-list :dataItems="tracks" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { request } from "./utils/request_get.js";
import CardList from "./CardList.vue";

const key = import.meta.env.VITE_ACCESS_KEY;
export default {
  beforeRouteEnter(to, from, next) {
    // auth prop is a string
    if (to.params.auth == "true") next();
    // temporarily relax next("/")
    else next();
  },
  components: {
    CardList,
  },
  data() {
    return {
      tracks: [],
      artists: [],
      playlists: [],
      episodes: [],
      albums: [],
      allTypes: [],
    };
  },
  setup() {
    const searchStr = ref("");

    const getInputTextOnClick = function ($evt) {
      searchStr.value = $evt.target.value;
    };

    const search = async function () {
      const res = await request(
        "https://api.spotify.com/v1/search",
        key,
        searchStr.value,
        "&type=track,artist,playlist,episode,album&limit=6"
      );
      this.allTypes = Object.keys(res);
      this.allTypes.map((type) => (this[type] = res[type].items));
      console.log(this.artists);
    };

    return {
      search,
      getInputTextOnClick,
      searchStr,
    };
  },
};
</script>

<style scoped>
@import "./styles/home.css";
</style>
