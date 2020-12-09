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
    <card-list />
  </div>
</template>

<script>
import { ref } from "vue";
import CardList from "./CardList.vue";

const key = import.meta.env.VITE_ACCESS_KEY;
export default {
  beforeRouteEnter(to, from, next) {
    // auth prop is a string
    if (to.params.auth == "true") next();
    else next("/");
  },
  components: {
    CardList,
  },
  setup() {
    const searchStr = ref("");

    const getInputTextOnClick = function ($evt) {
      searchStr.value = $evt.target.value;
    };

    const search = async function () {
      const res = await fetch(
        "https://api.spotify.com/v1/search?q=" +
          searchStr.value +
          "&type=track,artist,",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + key,
          },
        }
      );
      const searchData = await res.json();

      console.log(searchData);
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
.home {
  padding: 20px;
}

.search-container {
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 50vw;
  border-radius: 5px;
  border: 1px solid silver;
  box-shadow: 1px 1px 2px 1px rgb(204, 204, 204);
}

.search-container:hover {
  box-shadow: 1px 1px 2px 1px rgb(122, 122, 122);
}

.searchbar {
  height: 3vh;
  width: 45.8vw;
  margin: 0.75vw;
  border: none;
  outline: none;
  font-size: 3vmin;
}

.searchicon {
  cursor: pointer;
  position: relative;
}

.searchicon:hover {
  transform: scale(1.2);
}
</style>
